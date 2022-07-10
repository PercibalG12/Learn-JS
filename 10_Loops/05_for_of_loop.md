# for of loop

-The for of loop is a new loop introduced in ES6 syntax. We use for of loop for structures such as Arrays, Strings, Maps, NodeLists, and more. For every iteration the value of the next property is assigned to the variable.

-Iterable - An item that has anything that can be looped through.

- Syntax

```js
for (variable of iterable) {
  // code block to be executed
}
```

- Example 1 
```js
// Looping through an array 
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
```
- Example 2
```js
// Looping through an array 
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5
```
```js
for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25
```
```js
// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum) // 15
```
```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB
```


```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```


```js 
// Looping over a String
let language = "JavaScript";

let text = "I love ";
for (let x of language) {
text += x;
}
```