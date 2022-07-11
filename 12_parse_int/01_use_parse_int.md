# Use the parseInt Function

- The parseInt() function parses a string and returns an integer. Here's an example:


```js
function convertToInt(str){
    return parseInt(str);

}
convertToInt("60")
```
The above function converts the string 60 to the integer 60. If the first character in the string can't be converted into a number, then it returns NaN.

