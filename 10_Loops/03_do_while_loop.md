# do while loop

- The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.


- Syntax
```js
do {
  // code block to be executed
}
while (condition);
```


- Example -1

```js

let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

```

![Example 2](/img/dowhile.PNG "do while loop")

The results shows that the console logged out 0 first as it was stated so in the code block then it checked the condition to see if i was less than or equal t0 5 and looped over the numbers until it arrived at 5 
