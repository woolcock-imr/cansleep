(function(){
    var modules={
        "adverse-event-data":		    {url:"$A/modules/c/cansleep/tasks/adverse-event-data.html",Table:"91000635",form_module:"adverse-event-form"},
        "adverse-event-form":		    {url:"$A/modules/c/cansleep/tasks/adverse-event-form.html",Table:"91000635"},
        
        "concomitant-medication-data":	{url:"$A/modules/c/cansleep/tasks/concomitant-medication-data.html",Table:"91000636",form_module:"concomitant-medication-form"},
        "concomitant-medication-form":	{url:"$A/modules/c/cansleep/tasks/concomitant-medication-form.html",Table:"91000636"},
        
        "s-visit-date-data":		    {url:"$A/modules/c/cansleep/tasks/visit-date-data.html",Table:"91000631",form_module:"s-visit-date-form"},
        "s-visit-date-form":		    {url:"$A/modules/c/cansleep/tasks/visit-date-form.html",Table:"91000631"},
        
        "s-anthropometry-data":		    {url:"$A/modules/c/cansleep/tasks/anthropometry-data.html",Table:"91000632",form_module:"s-anthropometry-form"},
        "s-anthropometry-form":		    {url:"$A/modules/c/cansleep/tasks/anthropometry-form.html",Table:"91000632",task_name:"Anthropometry"},
        
        "s-isi-data":		            {url:"$A/modules/c/cansleep/tasks/insomnia-severity-index-data.html",Table:"91000633",form_module:"s-isi-form"},
        "s-isi-form":		            {url:"$A/modules/c/cansleep/tasks/insomnia-severity-index-form.html",Table:"91000633",task_name:"Insomnia severity index"},

        "s-actigraphy-data":		    {url:"$A/modules/c/cansleep/tasks/actigraphy-data.html",Table:"91000634",form_module:"s-actigraphy-form"},
        "s-actigraphy-form":		    {url:"$A/modules/c/cansleep/tasks/actigraphy-form.html",Table:"91000634"},
        
        /*
        "anthropometry-data":		    {url:"$A/modules/c/cansleep/task/anthropometry-data.html",Table:"anthropometry",form_module:"anthropometry-form"},
        "anthropometry-form":		    {url:"$A/modules/c/cansleep/task/anthropometry-form.html",Table:"anthropometry"},
        "adverseevents-data":	        {url:"$A/modules/c/cansleep/task/adverseevents-data.html",Table:"cpap-adverseevents",form_module:"adverseevents-form"},
        "adverseevents-form":	        {url:"$A/modules/c/cansleep/task/adverseevents-form.html",Table:"cpap-adverseevents"},
        "adverseevents-data-3m":	    {url:"$A/modules/c/cansleep/task/adverseevents-data.html",Table:"cpap-adverseevents-3m",form_module:"adverseevents-form-3m"},
        "adverseevents-form-3m":	    {url:"$A/modules/c/cansleep/task/adverseevents-form.html",Table:"cpap-adverseevents-3m"},

        "bloodgas-data":                   {url:"$A/modules/b/bloodgas-data.html",Table:"bloodgas",form_module:"bloodgas-form"},
        "bloodgas-form":                   {url:"$A/modules/b/bloodgas-form.html",Table:"bloodgas"},
        "bloodgas-data-1m":                {url:"$A/modules/b/bloodgas-data.html",Table:"bloodgas-1m",form_module:"bloodgas-form-1m"},
        "bloodgas-form-1m":                {url:"$A/modules/b/bloodgas-form.html",Table:"bloodgas-1m"},
        "bloodgas-data-3m":                {url:"$A/modules/b/bloodgas-data.html",Table:"bloodgas-3m",form_module:"bloodgas-form-3m"},
        "bloodgas-form-3m":                {url:"$A/modules/b/bloodgas-form.html",Table:"bloodgas-3m"},
        "blood-data":                      {url:"$A/modules/b/blood-data.html",Table:"blood",form_module:"blood-form"},
        "blood-form":                      {url:"$A/modules/b/blood-form.html",Table:"blood"},
        "blood-data-3m":                   {url:"$A/modules/b/blood-data.html",Table:"blood-3m",form_module:"blood-form-3m"},
        "blood-form-3m":                   {url:"$A/modules/b/blood-form.html",Table:"blood-3m"},

        "clinical-trials-app":             {url:"$A/apps/c/clinical-trials/index.html"},
        "consent-form-upload-data":        {url:"$A/modules/c/consent-form-upload-data.html",Table:"consent-form",form_module:"consent-form-upload-form"},
        "consent-form-upload-form":        {url:"$A/modules/c/consent-form-upload-form.html",Table:"consent-form"},
        "contact-details-data":   		{url:"$A/modules/c/contact-details-data.html",Table:"contact-details",form_module:"contact-details-form",router:1},
        "contact-details-form":   		{url:"$A/modules/c/contact-details-form.html",Table:"contact-details"},

        "cpapdownload-data":   	{url:"$A/modules/c/cpapdownload-data.html",Table:"cpapdownload",form_module:"cpapdownload-form"},
        "cpapdownload-form":   	{url:"$A/modules/c/cpapdownload-form.html",Table:"cpapdownload"},
        "cpapdownload-data-3m":   	{url:"$A/modules/c/cpapdownload-data.html",Table:"cpapdownload-3m",form_module:"cpapdownload-form-3m"},
        "cpapdownload-form-3m":   	{url:"$A/modules/c/cpapdownload-form.html",Table:"cpapdownload-3m"},

        "ess-data":       			{url:"$A/modules/e/epworth-sleepiness-scale-data.html",Table:"ess",form_module:"ess-form"},
        "ess-form":       			{url:"$A/modules/e/epworth-sleepiness-scale-form.html",Table:"ess",task_name:"Visit 1 - Epworth Sleepiness Scale"},
        "ess-data-3m":     		{url:"$A/modules/e/epworth-sleepiness-scale-data.html",Table:"ess-3m",form_module:"ess-form-3m"},
        "ess-form-3m":     		{url:"$A/modules/e/epworth-sleepiness-scale-form.html",Table:"ess-3m",task_name:"3 Month - Epworth Sleepiness Scale"},
        "ecg-data":   	  			{url:"$A/modules/e/ecg-data.html",Table:"ecg",form_module:"ecg-form"},
        "ecg-form":   	  			{url:"$A/modules/e/ecg-form.html",Table:"ecg"},
        "ecg-data-3m":   	  		{url:"$A/modules/e/ecg-data.html",Table:"ecg-3m",form_module:"ecg-form-3m"},
        "ecg-form-3m":   	  		{url:"$A/modules/e/ecg-form.html",Table:"ecg-3m"},
        
        "fosq-data":  	  			{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-data.html",Table:"fosq",form_module:"fosq-form"},
        "fosq-form":  	  			{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-form.html",Table:"fosq",task_name:"Visit 1 - Functional Outcomes of Sleep Questionnaire"},
        "fosq-data-3m":  	  		{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-data.html",Table:"fosq-3m",form_module:"fosq-form-3m"},
        "fosq-form-3m":  	  		{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-form.html",Table:"fosq-3m",task_name:"3 Month - Functional Outcomes of Sleep Questionnaire"},
        
        "medical-history-data":    {url:"$A/modules/m/medical-history-data.html",Table:"medical-history",form_module:"medical-history-form"},
        "medical-history-form":    {url:"$A/modules/m/medical-history-form.html",Table:"medical-history"},
        "medication-data":         {url:"$A/modules/m/medication-data.html",Table:"medication",form_module:"medication-form"},
        "medication-form":         {url:"$A/modules/m/medication-form.html",Table:"medication"},
        
        "online-questionnaire-app":    {url:"$A/apps/o/online-questionnaire/index.html"},
        

        "pwa-data":	            {url:"$A/modules/p/pwa-data.html",Table:"pwa",form_module:"pwa-form"},
        "pwa-form":	            {url:"$A/modules/p/pwa-form.html",Table:"pwa"},
        "pwa2-data":	            {url:"$A/modules/p/pwa-data.html",Table:"pwa2",form_module:"pwa2-form"},
        "pwa2-form":	            {url:"$A/modules/p/pwa-form.html",Table:"pwa2"},
        "pwa-data-3m":	            {url:"$A/modules/p/pwa-data.html",Table:"pwa-3m",form_module:"pwa-form-3m"},
        "pwa-form-3m":	            {url:"$A/modules/p/pwa-form.html",Table:"pwa-3m"},
        "pwa2-data-3m":	        {url:"$A/modules/p/pwa-data.html",Table:"pwa2-3m",form_module:"pwa2-form-3m"},
        "pwa2-form-3m":	        {url:"$A/modules/p/pwa-form.html",Table:"pwa2-3m"},
        "pwv-data":	            {url:"$A/modules/p/pwv-data.html",Table:"pwv",form_module:"pwv-form"},
        "pwv-form":	            {url:"$A/modules/p/pwv-form.html",Table:"pwv"},
        "pwv2-data":	            {url:"$A/modules/p/pwv-data.html",Table:"pwv2",form_module:"pwv2-form"},
        "pwv2-form":	            {url:"$A/modules/p/pwv-form.html",Table:"pwv2"},
        "pwv-data-3m":	            {url:"$A/modules/p/pwv-data.html",Table:"pwv-3m",form_module:"pwv-form-3m"},
        "pwv-form-3m":	            {url:"$A/modules/p/pwv-form.html",Table:"pwv-3m"},
        "pwv2-data-3m":	        {url:"$A/modules/p/pwv-data.html",Table:"pwv2-3m",form_module:"pwv2-form-3m"},
        "pwv2-form-3m":	        {url:"$A/modules/p/pwv-form.html",Table:"pwv2-3m"},
        
        "pressurecansleep-data":       {url:"$A/modules/p/pressurecansleep-data.html",Table:"pressurecansleep",form_module:"pressurecansleep-form"},
        "pressurecansleep-form":	    {url:"$A/modules/p/pressurecansleep-form.html",Table:"pressurecansleep"},
        "pressurecpap-data":       {url:"$A/modules/p/pressurecpap-data.html",Table:"pressurecpap",form_module:"pressurecpap-form"},
        "pressurecpap-form":	    {url:"$A/modules/p/pressurecpap-form.html",Table:"pressurecpap"},

        "physical-examination-data":{url:"$A/modules/p/physical-examination-data.html",Table:"physical-examination",form_module:"physical-examination-form"},
        "physical-examination-form":{url:"$A/modules/p/physical-examination-form.html",Table:"physical-examination"},

        "randomisation-table-low-data": {url:"$A/modules/r/randomisation-table-data.html",Table:"cansleep-randomisation-low",form_module:"randomisation-table-low-form"},
        "randomisation-table-low-form": {url:"$A/modules/r/randomisation-table-form.html",Table:"cansleep-randomisation-low"},
        "randomisation-table-high-data":{url:"$A/modules/r/randomisation-table-data.html",Table:"cansleep-randomisation-high",form_module:"randomisation-table-high-form"},
        "randomisation-table-high-form":{url:"$A/modules/r/randomisation-table-form.html",Table:"cansleep-randomisation-high"},
        
        "social-history-data":    	{url:"$A/modules/s/social-history-data.html",Table:"social-history",form_module:"social-history-form"},
        "social-history-form":    	{url:"$A/modules/s/social-history-form.html",Table:"social-history"},
        "spirometry-data":      	{url:"$A/modules/s/spirometry-data.html",Table:"spirometry",form_module:"spirometry-form"},
        "spirometry-form":      	{url:"$A/modules/s/spirometry-form.html",Table:"spirometry"},
        "spirometry-data-1m":     	{url:"$A/modules/s/spirometry-data.html",Table:"spirometry-1m",form_module:"spirometry-form-1m"},
        "spirometry-form-1m":     	{url:"$A/modules/s/spirometry-form.html",Table:"spirometry-1m"},
        "sri-data":      	        {url:"$A/modules/s/sri-data.html",Table:"sri",form_module:"sri-form"},
        "sri-form":      	        {url:"$A/modules/s/sri-form.html",Table:"sri",task_name:"Visit 1 - Severe Respiratory Insufficiency Questionnaire"},
        "sri-data-3m":             {url:"$A/modules/s/sri-data.html",Table:"sri-3m",form_module:"sri-form-3m"},
        "sri-form-3m":             {url:"$A/modules/s/sri-form.html",Table:"sri-3m",task_name:"3 Month - Severe Respiratory Insufficiency Questionnaire"},
        */

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
