var validator = require('validator');

console.log(validator.isEmail('foo@bar.org'));
console.log(validator.isISBN('978-3-16-148410-0'));
console.log(validator.isMobilePhone('15197347119', 'en-US'));
console.log(validator.isURL('http://www.google.com'));