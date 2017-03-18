 (function() {
     function RoomCtrl($scope, $cookies, Room) {
			 
			 this.currentRoomRef = "";
			 this.messageObj = {};
			 			 
			 if(!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '')
				 {
					 $scope.username = { set: false };
					 this.newUserName = "";
				 } else {
					 this.newUserName = $cookies.blocChatCurrentUser;
					 $scope.username = { set: true };
			 }
			 
        this.rooms = Room.array;
        this.isCollapsed = false;
				this.currentRoom = "Pick a room on the left";
				this.messages = "";
			 	this.currentRoomId = "";
			 	this.message = "";
			 		 
				document.getElementById("submit-button").addEventListener("click", function(){ document.getElementById("input").value = ""; });
				document.getElementById("cancel-button").addEventListener("click", function(){ document.getElementById("input").value = ""; });
    
        this.addRoom = function() {
            if (this.roomName) {          
								this.rooms.$add({name: this.roomName, messages: []})
            }
        }
				
				this.getTime = function(){
						var theDate = new Date();
						var day = theDate.getDate();
						return theDate.toString();
				}

				this.setUserName = function(){

					if(this.newUserName === '')
					{
						$scope.username.set = false;
					} else {
						$cookies.blocChatCurrentUser = this.newUserName;
						$cookies.put('blocChatCurrentUser', this.newUserName);
						$scope.username.set = true;
						console.log("User name set: " + $cookies.blocChatCurrentUser)
					}
			
				}
				
				this.changeRoom = function(newRoom, newMessages, newId, newProp) {
					
						this.currentRoom = newRoom;
						this.currentRoomId = newId;
						this.messages = newMessages;
						Room.changeRoom(this.currentRoomId);
						this.currentRoomRef = Room.currentRoom;
						this.messageObj[this.currentRoom] = newId;
						Room.messagesRef(this.currentRoomId); 
						
        }

				this.sendMessage = function() {
					
					Room.messagesArray.push({ 'username': $cookies.blocChatCurrentUser, 'timestamp': this.getTime(), 'content': this.message });
				
				}
         
     }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['$scope', '$cookies', 'Room', RoomCtrl]);
 })();