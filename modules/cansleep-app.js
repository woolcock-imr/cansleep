(function(){
    var modules={
        "panel-main":                       {url:"$A/modules/c/cansleep/panel-main.html",router:1},
        "panel-child": 		                {url:"$A/modules/c/cansleep/panel-child.html"},

        "randomisation-data":		        {url:"$A/modules/c/cansleep/tasks/randomisation-data.html",Table:"91000672",form_module:"randomisation-form"},
        "randomisation-form":		        {url:"$A/modules/c/cansleep/tasks/randomisation-form.html",Table:"91000672"},
        "participant-data":     	        {url:"$A/modules/c/cansleep/participant-data.html", Table:"91000629",
                                                form_module:"participant-form",
                                                panel_child:"panel-child",
                                                online_questionnaire_setup:"online-questionnaire-setup"
                                            },
        "participant-form":     	        {url:"$A/modules/c/cansleep/participant-form.html", Table:"91000629"},
        "edc-notes-data":	  		        {url:"$A/modules/c/cansleep/edc-notes-data.html",Table:"91000630",form_module:"edc-notes-form"},
        "edc-notes-form":	  		        {url:"$A/modules/c/cansleep/edc-notes-form.html",Table:"91000630"},
        "online-questionnaire-setup": 	    {url:"$A/modules/c/cansleep/online-questionnaire-setup.html",Table:"91000629"},
        "online-questionnaire-panel":       {url:"$A/modules/c/cansleep/online-questionnaire-panel.html"},
        "online-questionnaire-login":       {url:"$A/modules/c/cansleep/online-questionnaire-login.html"},
        "job-tracking-data":	  		    {url:"$A/modules/j/job-tracking-data.html",Table:"91000637",form_module:"job-tracking-form"},
        "job-tracking-form":	  		    {url:"$A/modules/j/job-tracking-form.html",Table:"91000637"},
    }
    var $A="https://cansleep.rt.org.au";
    if($vm.localhost==true) $A="http://127.0.0.1:8000/woolcock-imr/cansleep/";
    var prefix="cansleep-";
    for(m in modules){
        $vm.module_list[prefix+m]=modules[m];
        $vm.module_list[prefix+m].prefix=prefix;
        $vm.module_list[prefix+m].url=$vm.module_list[prefix+m].url.replace("$A",$A);
    }
})();
