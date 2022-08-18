//const add = require('./utils.js')
//const sum = add(4, -2)
//console.log(sum)
const validator = require('validator')
const meg = require('./notes.js')

console.log(meg());

// emailかどうかのバリデーション(true/false)
console.log(validator.isEmail('endrew@exaple.com'))

// URLかどうかのバリデーション(true/false)
console.log(validator.isURL('https://mead.io'))