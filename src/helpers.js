
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

calc();