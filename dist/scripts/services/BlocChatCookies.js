(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log("Current User: " + currentUser);
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();





//Cookies.currentUser = $cookies.get('blocChatCurrentUser');
//			console.log("Current User: " + Cookies.currentUser)