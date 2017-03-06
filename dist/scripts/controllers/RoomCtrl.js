 (function() {
     function RoomCtrl(Room) {
         this.rooms = Room.array;
         
     }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();