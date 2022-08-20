# includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

The includes() method returns true if an array contains a specified value and returns false if the value is not found.The includes() method is case sensitive.


```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs.includes('C#'))  // false
console.log(webTechs.includes('Node'))     // true
```
