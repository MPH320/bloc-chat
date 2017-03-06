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

    Room.rootRef = firebase.database().ref();
      
    Room.usersRef = firebase.database().ref("Rooms");
    
    Room.theRooms = Room.rootRef.child('Rooms');
    
    Room.array = $firebaseArray(Room.usersRef);
      
    //console.log(Room.usersRef);  
    console.log(Room.array);
    //console.log(Room.theRooms);
      
    /*
    angular.forEach(Room.usersRef, function(user) {

    console.log(user);
    });
    */
    
    return Room;
      
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();