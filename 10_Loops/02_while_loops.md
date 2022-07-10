# while loop

The while loop loops through a block of code as long as a specified condition is true.

- Syntax

```js
while (condition) {
  // code block to be executed
}
```

- Example 1

In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

```js
let  i = 3;
let text = "heya user";

while (i < 10) {
    text += "The number is " + i;
    i++;
    console.log(i)
  }
```

![Example 1](/img/while1.PNG "while loop 1")

- Example 2
```js
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

```
- Console.log example 2
![Example 2](/img/while2.PNG "while loop 2")

- NB:  If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

