(function() {
  function Room($firebaseArray) {
            
    var config = {
        apiKey: "AIzaSyDqsDmKtITXypTQfLJ5lO2eutTXXTTdlO0",
        authDomain: "bloc-chat-846cf.firebaseapp.com",
        databaseURL: "https://bloc-chat-846cf.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "279828265899"
    };
		
		Room.currentRoom = "";
		Room.messagesArray = "";

		Room.changeRoom = function(roomID) {
				Room.currentRoom = firebase.database().ref("Rooms").child(roomID);
				Room.currentRoom = $firebaseArray(Room.currentRoom);
		}
		
		Room.messagesRef = function(roomID) {
				Room.messagesArray = firebase.database().ref("Rooms").child(roomID).child("messages");
		}
      
    firebase.initializeApp(config);
    Room.usersRef = firebase.database().ref("Rooms");
    Room.array = $firebaseArray(Room.usersRef);
    return Room;   
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();