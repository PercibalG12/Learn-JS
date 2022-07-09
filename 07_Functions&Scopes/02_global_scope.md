# What is Global Scope?

In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

```js
var myGlobal = 10;


function fun1(){
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
    
}

fun1()
```
- the variable var  myGlobal = 10;  is a global variable bacuse we declared it outside of a function and thus it can be referrenced in any function.


