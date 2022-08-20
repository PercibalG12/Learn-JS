# Joining array elements

The join() method returns an array as a string. It does not change the original array. Any separator can be specified. The default however is comma (,).

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // "1,2,3,4,5"


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
console.log(text) // "Banana and Orange and Apple and Mango"
```
