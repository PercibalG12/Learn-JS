# Generate Random Whole Numbers within a Range

- Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:
```js
Math.floor(Math.random() * (max - min + 1)) + min
```

- Example 

```js
function ourRandomRange(ourMin, ourMax){

    return Math.floor(Math.random()* (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);
console.log(ourRandomRange(1, 9))
```