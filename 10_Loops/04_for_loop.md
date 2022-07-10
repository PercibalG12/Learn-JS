# for Loop

loops through a block of code a number of times

- Syntax 
```js
// For loop structure
for(initialization, condition, increment/decrement){
  // code goes here
}
```

- Initilization is executed (one time) before the execution of the code block.

- Condition specifies the condition for executing the code block.

-  increment/decrement is executed (every time) after the code block has been executed.


- Example 1 
```js
for(let i = 0; i <= 5; i++){
  console.log(i)
}
```

![Foor loop 1 example](/img/for%20loop_Trim.gif "For loop 1 example")




- Example 2

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

```

![Foor loop 2 example](/img/forrrr_Trim.gif "For loop 2 example")
- In the above example we are using a For loop to loop through an array and convert the existing countries to uppercase.

Adding all elements in the array

```js
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}

console.log(sum)  // 15
```

Creating a new array based on the existing array

```js
const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)

}

console.log(newArr)  // [1, 4, 9, 16, 25]
```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

```js
var ourArray =[]
for(var i=0; i <10; i+=2){
ourArray.push(i);
}
console.log(ourArray)

```

```js
var myArray =[];

for (var i=10; 1> 0; i-=2){
myArray.push(i);
}
console.log(myArray)
```