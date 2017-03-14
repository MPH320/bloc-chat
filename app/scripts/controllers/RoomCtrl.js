 (function() {
     function RoomCtrl($scope, Room) {
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
				
				this.changeRoom = function(newRoom, newMessages, newId) {
//            console.log("Room Name : " + newRoom)
//						console.log("Room Messages : " + newMessages);
						this.currentRoom = newRoom;
						this.currentRoomId = newId;
						this.messages = newMessages;
						this.messages = eval("[" + newMessages + "]");
						//console.log(this.messages);
						console.log(this.currentRoomId);
//						var str = eval("[" + newMessages + "]");
//						
//						for(var i=0;i<str.length;i++)
//						{
//							console.log(str[i].username + " " + str[i].content + " " + str[i].sentAt + " " + str[i].roomId);
//						}
						
        }
         
     }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
 })();