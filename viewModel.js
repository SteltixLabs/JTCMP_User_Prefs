

define(['knockout','ojs/ojlistview','ojs/ojinputtext'], 
function(ko) {
    function model(context) {
        // to inspect the context object
        console.log(context)
        // get a handle on the current 'this' reference
        var self = this;
        self.dircolumn = ko.observable(false);
        // observable to hold JDE prefs from LS
        self.userPrefs = ko.observable();
        self.customPrefsControls = ko.observable();
        self.prefs = {
                "username": "JDE",
                "environment": "JDV920",
                "role": "*ALL",
                 "mycustom":"",
                "jasserver": "http://jas_server_url",
                "userInfo":    {
                   "langPref": "  ",
                   "locale": "en",
                   "dateFormat": "MDE",
                   "dateSeperator": "/",
                   "simpleDateFormat": "MM/dd/yyyy",
                   "decimalFormat": ".",
                   "addressNumber": 1,
                   "alphaName": "Financial/Distribution Company",
                   "appsRelease": "E920",
                   "country": " ",
                   "username": "JDE"
                },
                "userAuthorized": false,
                "version": null,
                "poStringJSON": null,
                "altPoStringJSON": null,
                "aisSessionCookie": "cDxFuGIaMbAfre8q43mIULN15UNQRMZI3FwwV2GZ4qAsLX20iRh6!541095169!1478638461466",
                "adminAuthorized": true
             }
             let holder = []
             for (prop in self.prefs.userInfo){
                 if(self.prefs.userInfo[prop] != '  '){
                    holder.push({
                        key: prop,
                        value: self.prefs.userInfo[prop]
                    })
                 }
               
             }
             self.userPrefs(holder);
        
            //console.log(JSON.stringify(self.userPrefs()));

        // get the props that were included in the implementation
        context.props.then(function(properties) {
            var holder = []
            if (properties.customprefs) {
                // work with our props
                //console.log(properties.customprefs);
                
                properties.customprefs.split('|').forEach((one)=>{
                    holder.push({
                        value: one
                    })
                })
                self.customPrefsControls(holder);
              
            }
        });


    }
return model;
});

