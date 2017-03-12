(function() {
  function Room($firebaseArray) {
      
    var config = {
        apiKey: "AIzaSyDqsDmKtITXypTQfLJ5lO2eutTXXTTdlO0",
        authDomain: "bloc-chat-846cf.firebaseapp.com",
        databaseURL: "https://bloc-chat-846cf.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "279828265899"
    };
      
    firebase.initializeApp(config);
      
    Room.usersRef = firebase.database().ref("Rooms");
    
    Room.array = $firebaseArray(Room.usersRef);
    
   
      

//    console.log(Room.array);
      
      
      

    
    return Room;
      
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();