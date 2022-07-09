# Assignment with a Returned Value

- We can take the return value of a function and assign it to a variable.

```js

var processed = 0;

function processArg(num){
    return (num +3 ) / 5;
}

processed = processArg(7);
console.log(processed)
```

- The console would log out 2 . The function simply passes a the param (num) and returns the value of num + 3 divided by 5. It then assigns the value of 7 as an argument to the paramater num.  the global variable which was assigned 0 got overwritten because after its original initilization it was then a assigned a new value which is the argument processArg(7).
