 (function() {
     function RoomCtrl($scope, $cookies, Room) {
			 			 
			 if(!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '')
				 {
					 $scope.username = { set: false };
					 this.newUserName = "";
				 } else {
					 this.newUserName = $cookies.blocChatCurrentUser;
					 $scope.username.set = true;
			 }
			 
        this.rooms = Room.array;
        this.isCollapsed = false;
				this.currentRoom = "Pick a room on the left";
				this.messages = "";
			 	this.currentRoomId = "";
			 		 
				document.getElementById("submit-button").addEventListener("click", function(){ document.getElementById("input").value = ""; });
				document.getElementById("cancel-button").addEventListener("click", function(){ document.getElementById("input").value = ""; });
    
        this.addRoom = function() {
            if (this.roomName) {          
								this.rooms.$add({name: this.roomName})
            }
        }
				
				this.setUserName = function(){
					
					if(this.newUserName === '')
					{
						$scope.username.set = false;
					} else {
						$cookies.blocChatCurrentUser = this.newUserName;
						$scope.username.set = true;
						console.log("User name set: " + $cookies.blocChatCurrentUser)
					}
					
				}
				
				this.changeRoom = function(newRoom, newMessages, newId) {
  
						this.currentRoom = newRoom;
						this.currentRoomId = newId;
						this.messages = newMessages;
						this.messages = eval("[" + newMessages + "]");

        }
         
     }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['$scope', '$cookies', 'Room', RoomCtrl]);
 })();