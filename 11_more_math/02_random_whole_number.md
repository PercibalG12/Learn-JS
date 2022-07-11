# Generate Random Whole Numbers with JavaScript

It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

That can be accomlished with 
```js
Math.floor()
```
```js
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNumber(){

 return Math.floor(Math.random() * 10);
}
console.log(randomWholeNumber())
```