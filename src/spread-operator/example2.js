function sumar(...args){
  var value = 0;
  // console.log(args.length);
  // console.log(arguments.length);
  for (var key in args) {
    value += args[key];
  }
  return value;
}
console.log(sumar(1,4,5,6));
