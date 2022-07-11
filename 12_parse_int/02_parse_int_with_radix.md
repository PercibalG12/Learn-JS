# Use the parseInt Function with a Radix
- The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:
```js
parseInt(string, radix);
```
- And here's an example:
```js
const a = parseInt("11", 2);
```
The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

```js
function convertToInt(str){
    return parseInt(str, 2 ); // the 2 lets js know we are using the binary or base 2 system insetad of the base 10 system

}
convertToInt("10011")
```