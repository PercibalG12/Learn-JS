# Higher order arrow functions 

```js
const array = [1, 2, 3, 4.44, -1, 0, 88, 0.4, 10]
const squaredList =(arr) => {
    const squaredIntegers = arr.filter(num=> Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntegers = squaredList(array);
console.log(squaredIntegers)
```


- Don't be  be discouraged if you don't understand this. For now you just need to grasp the concept. Higher order functions will be explored soon and ten you can come back to this to revise and polish your skills!

[Timestamp 2:49:30](https://youtu.be/PkZNo7MFNFg)