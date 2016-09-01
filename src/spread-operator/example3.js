function multiplicar(x, ...args){
  var value = x;
  // console.log(args.length);
  // console.log(arguments.length);
  for (var key in args) {
    value *= args[key];
  }
  return value;
}

console.log(multiplicar(2,2,8));



// function multiplicar(...args, x){
//   var value = x;
//   // console.log(args.length);
//   // console.log(arguments.length);
//   for (var key in args) {
//     value *= args[key];
//   }
//   return value;
// }
//
// console.log(multiplicar(2,2,8));
