# Functions 

A function is a reusable block of code or programming statements designed to perform a certain task. A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter.Paramaters work as slots for placeholder inputs that the function should receive. If a function takes a parameter it will be called with argument. An argument reffers to a specific value of js datatypes, it is alos the real value passed into the function.  A function can also take a default parameter. To store a data to a function, a function has to return certain data types. To get the value we call or invoke a function. 

```js
function isResuable(){
    console.log("heyyyyy")
}

isResuable()
```

- The paramater would go inside the parenthesis ()
![Alt text](/img/fun1.PNG "")

- The argument would  would go inside the parenthesis ()
![Alt text](/img/fun2.PNG "")

### Whenever a function ius called or invoked the code inside the {} would be ran 

- When the argument ![Alt text](/img/fun2.PNG "") is called then the code 
![Alt text](/img/fun3.PNG "") would be executed


## function with paramaters and arguments 
```js
function funcWithParamsAndArgs(a,b){
    console.log(a - b);
}
funcWithParamsAndArgs(10,5)
```
- The argument 10 replaces the placeholder value of the parameter a and the same is true for 5 and b.When the function is called it would return 5 since we are logging a - b  which results to 10 - 5.