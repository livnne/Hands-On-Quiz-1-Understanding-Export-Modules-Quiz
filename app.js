var calc = require('./calculation.js');

console.log('The gross income is ' + calc.grossPay);
console.log('Tax: ' + calc.taxDeduct);
console.log('SSS: ' + calc.sssDeduct);
console.log('Pag-Ibig fund: ' + calc.pagIbigDeduct);
console.log('PhilHealth: ' + calc.philHealthDeduct);
console.log('Total Deductions: ' + calc.totalDeduct);
console.log('The net salary is ' + calc.netPay);