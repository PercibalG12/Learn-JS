# Checking if an object is an  array

The isArray() method returns true if an object is an array, otherwise false.

You can only use it as Array.isArray().

Using x.isArray(), where x is an array will return undefined.

<!-- syntax
Array.isArray(obj)
 -->

```js
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false
```
