$(function() {
    //ViewModel
    function AppViewModel(){
        this.hello = "Hello World!!";
    }
    ko.applyBindings(new AppViewModel());
});