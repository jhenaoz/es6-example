"use strict";

function greetingService(name){
  return {
    sayHi() {
      console.log(`hello ${name}`);
    },
    sayBye() {
      console.log(`Bye ${name}`);
    }
  };
}

// var sayHi = greetingService('Muleys').sayHi;
// sayHi();

// how about {sayHi} WTF is that?
// var {sayHi} = greetingService('Muleys');
// sayHi();
//
// var {sayHi:hi} = greetingService('Muleys');
// hi();
