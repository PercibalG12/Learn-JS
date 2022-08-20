# Slice array elements

The slice() method returns selected elements in an array, as a new array. It takes two parameters:starting and ending position. It selects from a given start, up to a (not inclusive) given end. The slice() method does not change the original array.

<!-- 
Syntax
array.slice(start, end) 
-->

| Paramater    | Description  
|--------------|------------------------------------------------------|
| start        | Optional. Start position. Default is 0.              |
|              | Negative numbers select from the end of the array.   | 
|--------------|------------------------------------------------------| 
| end          | Optional, End position. Default is last element.     |
|              | Negative numbers select from the end of the  array.  |
|--------------|------------------------------------------------------|
```js
  
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);

console.log(citrus) // ["Apple","Mango"]


 const numbers = [1,2,3,4,5]

 console.log(numbers.slice(1,4)) // [2,3,4]

```
