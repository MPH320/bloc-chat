(function() {
  function Cookies($cookies, $uibModal) {
    $cookies.blocChatCurrentUser = $cookies.get('blocChatCurrentUser');
		console.log("Current User : " + $cookies.blocChatCurrentUser);
    
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', Cookies]);
})();




//Cookies.currentUser = $cookies.get('blocChatCurrentUser');
//			console.log("Current User: " + Cookies.currentUser)