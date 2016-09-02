"use strict";
module.exports = {
  getFriends : function(){
    return new Promise((success, reject) => {
      setTimeout(function () {
        success([
          {name:'juan', age: 23},
          {name:'carlos', age:30},
          {name:'Jorge', age:30}
        ]);
      }, 1000);
    });
  },
  getMemes : function(){
    return new Promise((success, reject) => {
      setTimeout(function () {
        success(['Not bad', 'Troll Face', 'Poker Face', 'No papi']);
      }, 200);
    });
  }
}
