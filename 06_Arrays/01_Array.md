# Array

An array allows us to store several pieces of data in one place. Each value in an array has an index, 
and each index has a reference in a memory address. Each value can be accessed by using their indexes. 
The index of an array starts from zero, and the index of the last element is less by one from the length 
of the array(this is similar to what we looked at when looking at strings ).

An array can contain different data types which are ordered and changeable(modifiable).
An array allows storing duplicate elements and different data types. 
An array can be empty, or it may have different data type values.
Each element in an array is separated by commas.

# How to create an empty array

In JavaScript, we can create an array in different ways.  It is very common to use const instead of let to declare an array variable. If you are using const it means you do not use that variable name again.



* Using square brackets([])
```js
// syntax
// This the most recommended way to create an empty list
const arr = []
console.log(arr)

const array = [1, 2,"bananna", 4 ]
console.log(array)

```

* Using Array constructor
```js
// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []
```

- Array can have items of different data types

```js
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)
```






