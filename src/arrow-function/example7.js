
function GreetingService(name){
  this.name = name;
  this.sayHi = function(){
    console.log(`hello ${name}`);
  }
  this.sayHiAsync = function(){
    setTimeout(function () {
      console.log(this);
      console.log(`Hello ${name}`);
    }, 10);
  }
  this.sayBye = function(){
    console.log(`Bye ${name}`);
  }
}

var gs = new GreetingService('Muleys');
gs.sayHiAsync();

//make example with destruction...
