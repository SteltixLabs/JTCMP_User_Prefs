define(['knockout'], 
    function(ko) {
        function model(context) {
                var self = this;
               //viewmodel code goes here 
                
                self.exampleObservable = ko.observable("blank-component");
        }
    return model;
});
