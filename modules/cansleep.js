(function(){
    var modules={
        "panel-main-cansleep":    			{url:"$A/modules/p/panel-cansleep/panel-main.html",router:1},
        "panel-child-cansleep":    			{url:"$A/modules/p/panel-cansleep/panel-child.html"},    
        "participant-data-cansleep":   		{url:"$A/modules/p/participant-data-cansleep.html",Table:"1902010929",form_module:"participant-form-cansleep",router:1,
                                                child_panel:"panel-child-cansleep",
                                                questionnaire_setup:"online-questionnaire-setup-cansleep",
                                                online_questionnaire:"online-questionnaire-app-cansleep"
                                            },
        "participant-form-cansleep":   		{url:"$A/modules/p/participant-form-cansleep.html",Table:"1902010929"},

        "etc-notes":  		  	  			{url:"$A/modules/e/etc-notes.html",Table:"1902010930"},

        "online-questionnaire-setup-cansleep": 	{url:"$A/modules/o/online-questionnaire-setup-cansleep.html",Table:"1902010929"},



        "anthropometry-data-cansleep":		    {url:"$A/modules/a/anthropometry-data-cansleep.html",Table:"anthropometry",form_module:"anthropometry-form-cansleep"},
        "anthropometry-form-cansleep":		    {url:"$A/modules/a/anthropometry-form-cansleep.html",Table:"anthropometry"},
        "adverseevents-data-cansleep":	        {url:"$A/modules/a/adverseevents-data-cansleep.html",Table:"cpap-adverseevents",form_module:"adverseevents-form-cansleep"},
        "adverseevents-form-cansleep":	        {url:"$A/modules/a/adverseevents-form-cansleep.html",Table:"cpap-adverseevents"},
        "adverseevents-data-3m-cansleep":	    {url:"$A/modules/a/adverseevents-data-cansleep.html",Table:"cpap-adverseevents-3m",form_module:"adverseevents-form-3m-cansleep"},
        "adverseevents-form-3m-cansleep":	    {url:"$A/modules/a/adverseevents-form-cansleep.html",Table:"cpap-adverseevents-3m"},

        "bloodgas-data-cansleep":                   {url:"$A/modules/b/bloodgas-data-cansleep.html",Table:"bloodgas-cansleep",form_module:"bloodgas-form-cansleep"},
        "bloodgas-form-cansleep":                   {url:"$A/modules/b/bloodgas-form-cansleep.html",Table:"bloodgas-cansleep"},
        "bloodgas-data-1m-cansleep":                {url:"$A/modules/b/bloodgas-data-cansleep.html",Table:"bloodgas-1m-cansleep",form_module:"bloodgas-form-1m-cansleep"},
        "bloodgas-form-1m-cansleep":                {url:"$A/modules/b/bloodgas-form-cansleep.html",Table:"bloodgas-1m-cansleep"},
        "bloodgas-data-3m-cansleep":                {url:"$A/modules/b/bloodgas-data-cansleep.html",Table:"bloodgas-3m-cansleep",form_module:"bloodgas-form-3m-cansleep"},
        "bloodgas-form-3m-cansleep":                {url:"$A/modules/b/bloodgas-form-cansleep.html",Table:"bloodgas-3m-cansleep"},
        "blood-data-cansleep":                      {url:"$A/modules/b/blood-data-cansleep.html",Table:"blood-cansleep",form_module:"blood-form-cansleep"},
        "blood-form-cansleep":                      {url:"$A/modules/b/blood-form-cansleep.html",Table:"blood-cansleep"},
        "blood-data-3m-cansleep":                   {url:"$A/modules/b/blood-data-cansleep.html",Table:"blood-3m-cansleep",form_module:"blood-form-3m-cansleep"},
        "blood-form-3m-cansleep":                   {url:"$A/modules/b/blood-form-cansleep.html",Table:"blood-3m-cansleep"},

        "clinical-trials-app-cansleep":             {url:"$A/apps/c/clinical-trials-cansleep/index.html"},
        "consent-form-upload-data-cansleep":        {url:"$A/modules/c/consent-form-upload-data-cansleep.html",Table:"consent-form",form_module:"consent-form-upload-form-cansleep"},
        "consent-form-upload-form-cansleep":        {url:"$A/modules/c/consent-form-upload-form-cansleep.html",Table:"consent-form"},
        "contact-details-data":   		{url:"$A/modules/c/contact-details-data.html",Table:"contact-details",form_module:"contact-details-form",router:1},
        "contact-details-form":   		{url:"$A/modules/c/contact-details-form.html",Table:"contact-details"},

        "cpapdownload-data-cansleep":   	{url:"$A/modules/c/cpapdownload-data-cansleep.html",Table:"cpapdownload-cansleep",form_module:"cpapdownload-form-cansleep"},
        "cpapdownload-form-cansleep":   	{url:"$A/modules/c/cpapdownload-form-cansleep.html",Table:"cpapdownload-cansleep"},
        "cpapdownload-data-3m-cansleep":   	{url:"$A/modules/c/cpapdownload-data-cansleep.html",Table:"cpapdownload-3m-cansleep",form_module:"cpapdownload-form-3m-cansleep"},
        "cpapdownload-form-3m-cansleep":   	{url:"$A/modules/c/cpapdownload-form-cansleep.html",Table:"cpapdownload-3m-cansleep"},

        "ess-data-cansleep":       			{url:"$A/modules/e/epworth-sleepiness-scale-data-cansleep.html",Table:"ess",form_module:"ess-form-cansleep"},
        "ess-form-cansleep":       			{url:"$A/modules/e/epworth-sleepiness-scale-form-cansleep.html",Table:"ess",task_name:"Visit 1 - Epworth Sleepiness Scale"},
        "ess-data-3m-cansleep":     		{url:"$A/modules/e/epworth-sleepiness-scale-data-cansleep.html",Table:"ess-3m-cansleep",form_module:"ess-form-3m-cansleep"},
        "ess-form-3m-cansleep":     		{url:"$A/modules/e/epworth-sleepiness-scale-form-cansleep.html",Table:"ess-3m-cansleep",task_name:"3 Month - Epworth Sleepiness Scale"},
        "ecg-data-cansleep":   	  			{url:"$A/modules/e/ecg-data-cansleep.html",Table:"ecg-cansleep",form_module:"ecg-form-cansleep"},
        "ecg-form-cansleep":   	  			{url:"$A/modules/e/ecg-form-cansleep.html",Table:"ecg-cansleep"},
        "ecg-data-3m-cansleep":   	  		{url:"$A/modules/e/ecg-data-cansleep.html",Table:"ecg-3m-cansleep",form_module:"ecg-form-3m-cansleep"},
        "ecg-form-3m-cansleep":   	  		{url:"$A/modules/e/ecg-form-cansleep.html",Table:"ecg-3m-cansleep"},
        
        "fosq-data-cansleep":  	  			{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-data-cansleep.html",Table:"fosq-cansleep",form_module:"fosq-form-cansleep"},
        "fosq-form-cansleep":  	  			{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-form-cansleep.html",Table:"fosq-cansleep",task_name:"Visit 1 - Functional Outcomes of Sleep Questionnaire"},
        "fosq-data-3m-cansleep":  	  		{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-data-cansleep.html",Table:"fosq-3m-cansleep",form_module:"fosq-form-3m-cansleep"},
        "fosq-form-3m-cansleep":  	  		{url:"$A/modules/f/functional-outcome-of-sleepquestionnaire-form-cansleep.html",Table:"fosq-3m-cansleep",task_name:"3 Month - Functional Outcomes of Sleep Questionnaire"},
        
        "medical-history-data-cansleep":    {url:"$A/modules/m/medical-history-data-cansleep.html",Table:"medical-history",form_module:"medical-history-form-cansleep"},
        "medical-history-form-cansleep":    {url:"$A/modules/m/medical-history-form-cansleep.html",Table:"medical-history"},
        "medication-data-cansleep":         {url:"$A/modules/m/medication-data-cansleep.html",Table:"medication-cansleep",form_module:"medication-form-cansleep"},
        "medication-form-cansleep":         {url:"$A/modules/m/medication-form-cansleep.html",Table:"medication-cansleep"},
        
        "online-questionnaire-app-cansleep":    {url:"$A/apps/o/online-questionnaire-cansleep/index.html"},
        

        "pwa-data-cansleep":	            {url:"$A/modules/p/pwa-data-cansleep.html",Table:"pwa-cansleep",form_module:"pwa-form-cansleep"},
        "pwa-form-cansleep":	            {url:"$A/modules/p/pwa-form-cansleep.html",Table:"pwa-cansleep"},
        "pwa2-data-cansleep":	            {url:"$A/modules/p/pwa-data-cansleep.html",Table:"pwa2-cansleep",form_module:"pwa2-form-cansleep"},
        "pwa2-form-cansleep":	            {url:"$A/modules/p/pwa-form-cansleep.html",Table:"pwa2-cansleep"},
        "pwa-data-3m-cansleep":	            {url:"$A/modules/p/pwa-data-cansleep.html",Table:"pwa-3m-cansleep",form_module:"pwa-form-3m-cansleep"},
        "pwa-form-3m-cansleep":	            {url:"$A/modules/p/pwa-form-cansleep.html",Table:"pwa-3m-cansleep"},
        "pwa2-data-3m-cansleep":	        {url:"$A/modules/p/pwa-data-cansleep.html",Table:"pwa2-3m-cansleep",form_module:"pwa2-form-3m-cansleep"},
        "pwa2-form-3m-cansleep":	        {url:"$A/modules/p/pwa-form-cansleep.html",Table:"pwa2-3m-cansleep"},
        "pwv-data-cansleep":	            {url:"$A/modules/p/pwv-data-cansleep.html",Table:"pwv-cansleep",form_module:"pwv-form-cansleep"},
        "pwv-form-cansleep":	            {url:"$A/modules/p/pwv-form-cansleep.html",Table:"pwv-cansleep"},
        "pwv2-data-cansleep":	            {url:"$A/modules/p/pwv-data-cansleep.html",Table:"pwv2-cansleep",form_module:"pwv2-form-cansleep"},
        "pwv2-form-cansleep":	            {url:"$A/modules/p/pwv-form-cansleep.html",Table:"pwv2-cansleep"},
        "pwv-data-3m-cansleep":	            {url:"$A/modules/p/pwv-data-cansleep.html",Table:"pwv-3m-cansleep",form_module:"pwv-form-3m-cansleep"},
        "pwv-form-3m-cansleep":	            {url:"$A/modules/p/pwv-form-cansleep.html",Table:"pwv-3m-cansleep"},
        "pwv2-data-3m-cansleep":	        {url:"$A/modules/p/pwv-data-cansleep.html",Table:"pwv2-3m-cansleep",form_module:"pwv2-form-3m-cansleep"},
        "pwv2-form-3m-cansleep":	        {url:"$A/modules/p/pwv-form-cansleep.html",Table:"pwv2-3m-cansleep"},
        
        "pressurecansleep-data-cansleep":       {url:"$A/modules/p/pressurecansleep-data-cansleep.html",Table:"pressurecansleep-cansleep",form_module:"pressurecansleep-form-cansleep"},
        "pressurecansleep-form-cansleep":	    {url:"$A/modules/p/pressurecansleep-form-cansleep.html",Table:"pressurecansleep-cansleep"},
        "pressurecpap-data-cansleep":       {url:"$A/modules/p/pressurecpap-data-cansleep.html",Table:"pressurecpap-cansleep",form_module:"pressurecpap-form-cansleep"},
        "pressurecpap-form-cansleep":	    {url:"$A/modules/p/pressurecpap-form-cansleep.html",Table:"pressurecpap-cansleep"},

        "physical-examination-data-cansleep":{url:"$A/modules/p/physical-examination-data-cansleep.html",Table:"physical-examination",form_module:"physical-examination-form-cansleep"},
        "physical-examination-form-cansleep":{url:"$A/modules/p/physical-examination-form-cansleep.html",Table:"physical-examination"},

        "randomisation-table-low-data-cansleep": {url:"$A/modules/r/randomisation-table-data-cansleep.html",Table:"cansleep-randomisation-low",form_module:"randomisation-table-low-form-cansleep"},
        "randomisation-table-low-form-cansleep": {url:"$A/modules/r/randomisation-table-form-cansleep.html",Table:"cansleep-randomisation-low"},
        "randomisation-table-high-data-cansleep":{url:"$A/modules/r/randomisation-table-data-cansleep.html",Table:"cansleep-randomisation-high",form_module:"randomisation-table-high-form-cansleep"},
        "randomisation-table-high-form-cansleep":{url:"$A/modules/r/randomisation-table-form-cansleep.html",Table:"cansleep-randomisation-high"},
        
        "social-history-data-cansleep":    	{url:"$A/modules/s/social-history-data-cansleep.html",Table:"social-history",form_module:"social-history-form-cansleep"},
        "social-history-form-cansleep":    	{url:"$A/modules/s/social-history-form-cansleep.html",Table:"social-history"},
        "spirometry-data-cansleep":      	{url:"$A/modules/s/spirometry-data-cansleep.html",Table:"spirometry-cansleep",form_module:"spirometry-form-cansleep"},
        "spirometry-form-cansleep":      	{url:"$A/modules/s/spirometry-form-cansleep.html",Table:"spirometry-cansleep"},
        "spirometry-data-1m-cansleep":     	{url:"$A/modules/s/spirometry-data-cansleep.html",Table:"spirometry-1m-cansleep",form_module:"spirometry-form-1m-cansleep"},
        "spirometry-form-1m-cansleep":     	{url:"$A/modules/s/spirometry-form-cansleep.html",Table:"spirometry-1m-cansleep"},
        "sri-data-cansleep":      	        {url:"$A/modules/s/sri-data-cansleep.html",Table:"sri-cansleep",form_module:"sri-form-cansleep"},
        "sri-form-cansleep":      	        {url:"$A/modules/s/sri-form-cansleep.html",Table:"sri-cansleep",task_name:"Visit 1 - Severe Respiratory Insufficiency Questionnaire"},
        "sri-data-3m-cansleep":             {url:"$A/modules/s/sri-data-cansleep.html",Table:"sri-3m-cansleep",form_module:"sri-form-3m-cansleep"},
        "sri-form-3m-cansleep":             {url:"$A/modules/s/sri-form-cansleep.html",Table:"sri-3m-cansleep",task_name:"3 Month - Severe Respiratory Insufficiency Questionnaire"},


    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
