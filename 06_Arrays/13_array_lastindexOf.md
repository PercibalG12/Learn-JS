# Getting last index of an element in array

The lastIndexOf() method returns the last index (position) of a specified value. If it exist, it returns the index else it returns -1. lastIndexOf() starts at a specified index and searches from right to left.By defalt the search starts at the last element and ends at the first. Negative start values counts from the last element (but still searches from right to left).


```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(5)) //  4

```

