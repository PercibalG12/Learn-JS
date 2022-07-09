Conditional statements are used for make decisions based on different conditions. By default , statements in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways:

- Conditional execution: a block of one or more statements will be executed if a certain expression is true
- Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. 


# If Statement

- In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code. To create an if condition, we need if keyword, condition inside a parenthesis and block of code inside a curly bracket{}.

```js
// syntax
if (condition) {
  //this part of code runs for truthy condition
}
```

### Example 1

```js
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

- test(true) returns the string It was true, and test(false) returns the string It was false. When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.


### Example 2 

- Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

- trueOrFalse should be a function
- Waiting:trueOrFalse(true) should return a string
- Waiting:trueOrFalse(false) should return a string
- Waiting:trueOrFalse(true) should return the string Yes, that was true
- Waiting:trueOrFalse(false) should return the string No, that was false


```js
function trueOrFalse(wasThatTrue) {
  
if (wasThatTrue){
  return "Yes, that was true"
}
return  "No, that was false"

}
```