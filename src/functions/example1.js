function calcularImpuestos(valor, impuesto){
  impuesto = (typeof impuesto !== "undefined") ? impuesto:0.12;
  valor = (typeof valor !== "undefined") ? valor:100.0;
  console.log('impuesto', impuesto);
  console.log('valor', valor);
  return valor*impuesto;
}
console.log(calcularImpuestos(2000, 0.20));
console.log(calcularImpuestos(500));

// function calcularImpuestos(valor=0, impuesto=0.16){
//   console.log('impuesto', impuesto);
//   console.log('valor', valor);
//   return valor*impuesto;
// }
// console.log(calcularImpuestos(2000, 0.20));
// console.log(calcularImpuestos());
