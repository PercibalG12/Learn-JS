# Converting an array to string

- The toString() method returns a string with array values separated by commas. The toString() method does not change the original array.

NB: Every JavaScript object has a toString() method.

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // "1,2,3,4,5"


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();
console.log(text) // "Banana,Orange,Apple,Mango"

```
