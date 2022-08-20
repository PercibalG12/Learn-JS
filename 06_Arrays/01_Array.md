# Array

An array allows us to store several pieces of data in one place. Each value in an array has an index, 
and each index has a reference in a memory address. Each value can be accessed by using it's index. 
The index of an array starts from zero, and the index of the last element is less by one from the length 
of the array(this is similar to what we looked at when looking at strings ).

An array can contain different data types which are ordered and changeable(modifiable)which makes arrays mutable unlike strings.An array allows storing duplicate elements and different data types. 
An array can be empty, or it may have different data type values. Each element in an array is separated by commas.

# How to create an empty array

In JavaScript, we can create an array in different ways.  It is very common to use const instead of let to declare an array variable.  The most common way to create an array is using square brackets[]



* Using square brackets([])
```js
// syntax
const arr = []
console.log(arr)

//array with different data types 
const array = [1, 2,"bananna", 4 ]
console.log(array)

const arry = [
    'Percival',
    150,
    true,
    { country: 'Jamaica', city: 'Portmore' }
    ] 
console.log(arry)

```

* Using Array constructor
- A constructor is a special type of function that creates and initializes an object instance of a class. We will explore constructors later on when looking at Objects in Javascript.
```js

// syntax
const arr = Array()
// or
let arr = new Array()
console.log(arr) // []
```










