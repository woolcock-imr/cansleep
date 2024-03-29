//-------------------------------------
var participant_pid=$vm.module_list[m.prefix+'participant-data'].Table;
var notes_pid=$vm.module_list[m.prefix+'edc-notes-data'].Table;
var participant_info=function(record){ if(record.Subject_Initials!=undefined) return record.UID+" "+record.Subject_Initials; else return record.UID; }
//-------------------------------------
m.set_req=function(){
    var participant_where="";
    var participant_uid="";
	if($vm.vm['__ID'].input!=undefined){
        var participant_record=$vm.vm['__ID'].input.record;
        if(participant_record!=undefined) participant_uid=participant_record.UID;
    }
    if(participant_uid!=="" && participant_uid!==undefined){
        participant_where=" where uid="+participant_uid;
    }
    var sql="with notes as (select PUID,NT=S1,NC=S2,NRowNum=row_number() over (PARTITION BY PUID order by ID DESC) from [FORM-"+notes_pid+"] where ppid="+m.Table+")";
    sql+=",participant as (select V1, ParticipantUID=UID from [FORM-"+participant_pid+"] "+participant_where+" )";
    sql+=",task as (select ID, Randomisation_Number=participant.V1, PID,UID,PUID,S3,Information,DateTime,Author,RowNum=row_number() over (order by ID DESC) from [FORM-"+m.Table+"-@S1] join participant on PUID=ParticipantUID)";
    sql+="select ID,Randomisation_Number,S3,PID,UID,Information,Submit_date=DateTime,Submitted_by=Author,RowNum,NT,NC from task left join notes on UID=notes.PUID and NRowNum=1 where RowNum between @I6 and @I7";
    
    
    var sql_n="with participant as (select ParticipantUID=UID from [FORM-"+participant_pid+"] )";
    sql_n+=" select count(ID) from [FORM-"+m.Table+"-@S1] join participant on PUID=ParticipantUID";

    m.req={cmd:'read',qid:m.qid,sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
}
//-------------------------------------
m.set_req_export=function(i1,i2){
    //m.fields_e=m.form_fields;
    var sql="with participant as (select ParticipantUID=UID, V1 from [FORM-"+participant_pid+"] )";
    sql+=",task as (select ID,UID,PUID,S3,Information,DateTime,Author from [FORM-"+m.Table+"-@S1])";
    sql+=",records as (select ID,Randomisation_Number=participant.V1,ParticipantUID,Information,DateTime,Author,RowNum=row_number() over (order by ID DESC) from participant left join task on PUID=ParticipantUID)";
	sql+=" select * from records where RowNum between @I1 and @I2";
    m.req={cmd:'read',qid:m.qid,sql:sql,i1:i1,i2:i2}
}
//-------------------------------------
m.cell_render=function(records,I,field,td,set_value,source){
    switch(field){
        case 'S3':
            records[I].vm_custom[field]=true;
            td.html("<span style='color:"+records[I][field]+"'>&#x25cf;</span>");
            break;
        case 'NT':
            records[I].vm_custom[field]=true;
            if(m.records[I].UID===undefined) return;
            var color=records[I].NC;     if(color==="") color="#000000"
            var value=records[I][field];  if(value==="") value='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            td.html("<u style='cursor:pointer;color:"+color+"'>"+value+"</u>");
            td.find('u').on('click',function(){
                $vm.load_module(m.prefix+'edc-notes-data',$vm.root_layout_content_slot,{
                    task_module_name:$vm.vm['__ID'].name,
                    record:records[I]
                });
            });
            break;
        case 'Participant_uid':
        case 'Participant':
            records[I].vm_readonly[field]=true;
            break;
    }
}
//-------------------------------------
m.before_submit=function(record,dbv){
    dbv.PPID=participant_tid;
	dbv.S3=$vm.status_of_data(m.row_data(record));
    if(record.Participant_uid!==undefined) dbv.PUID=record.Participant_uid;
    return true;
}
//-------------------------------------
m.new=function(){
    if(m.form_module!=undefined){
        var participant_record=$vm.vm['__ID'].input.record; //from the child panel
        $vm.load_module(m.prefix+m.form_module,'',{participant_record:participant_record,goback:1});
    }
}
//-------------------------------------
m.fields="_Form,Status|S3,Notes|NT,Participant_ID|Participant_uid,Participant,"+fields+",Submit_date,Submitted_by,_Delete";
//-------------------------------------
