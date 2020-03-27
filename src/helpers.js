//Моя релизация с приведением к флоту
export function calc(a, b, operation) {
  if(operation === '+') {
     return (parseFloat(a) + parseFloat(b));
   }
   if(operation === '-') {
     return (parseFloat(a) - parseFloat(b));
   }
   if(operation === '*') {
     return (parseFloat(a) * parseFloat(b));
   }
   if(operation === '/') {
     return ((parseFloat(a) / parseFloat(b)).toFixed(1));
   }

 }


//Пример Павла Малышева
//export function calc(a, b, operation) {
//return operation ? (new Function('a', 'b', `return a ${operation} b`))(a, b) : 0;
//}
export function calculate(vals = [], operation = []) {
	let values = [...vals];
	let val = values.shift();
	return values.reduce((result, val, i) => calc(result, val, operation[i]), val);
}





