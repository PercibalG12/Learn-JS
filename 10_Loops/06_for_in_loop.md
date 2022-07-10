# For in Loop

## The JavaScript for in statement loops through the properties of an Object:

- Syntax
```js
for (key in object) {
  // code block to be executed
}
```

- Example 
```js
const person = {name:"John", name:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
```

- Example Explained

The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]

## For In Over Arrays
The JavaScript for in statement can also loop over the properties of an Array:

- Syntax
```js
for (variable in array) {
  code
}
```
- Example
```js
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

