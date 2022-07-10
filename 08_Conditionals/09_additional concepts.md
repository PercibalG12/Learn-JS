# Return a Boolean from a Function 

You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:
```js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:
```js
function isEqual(a, b) {
  return a === b;
}
```





# Returning early patterns from a function 

When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example
```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```
The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.