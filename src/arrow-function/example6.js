
this.today = new Date().toTimeString();
function readDocument(){
  return new Promise((success, reject) => {
    setTimeout(function () {
      success(Math.random());
    }, 1000);
  });
}
var self = this;
readDocument().then(function(response){
  console.log(this);
  console.log('SELF', self);
  console.log(response);
});


//
// console.log(this);
// readDocument().then((response) =>{
//   readDocument().then((res) =>{
//     console.log(this.today + res);
//   });
//   console.log(this.today + response);
// })
