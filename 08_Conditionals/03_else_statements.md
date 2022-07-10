 # Introducing Else Statements

 - When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

  - Example 1 
```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

- Example 2

```js
function testElse(val) {
  let result = "";


  if (val > 5) {
    result = "Bigger than 5";
  } else{ (val <= 5) 
    result = "5 or Smaller";
  }

  return result;
}

testElse(4);
```