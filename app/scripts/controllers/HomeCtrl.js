(function() {
    function HomeCtrl() {
        this.Title = "Chat";
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();