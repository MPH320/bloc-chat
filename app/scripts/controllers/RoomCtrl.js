 (function() {
     function RoomCtrl($scope, Room) {
        this.rooms = Room.array;
        this.isCollapsed = false;
    
        this.addRoom = function() {
            if (this.roomName) {
                this.rooms.$add({name: this.roomName})
            }
        }
         
     }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
 })();