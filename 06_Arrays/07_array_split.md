# Creating an array using split

This splits (as the name suggest) an array into different characters if it only has a single string or it splits the array into multiple strings if the array contains different strings seperated by commas

```js
let html = 'html'
const charsInhtml = html.split('')

console.log(charsInhtml) // ["h", "t", "m", "l"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
```