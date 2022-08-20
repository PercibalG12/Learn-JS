# Concatenating array using concat

The concat() method concatenates (joins) two or more arrays. It returns a new array, containing the joined arrays. The concat() method does not change the existing arrays.

```js
// concat 2 arrays 

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = arr1.concat(arr2);
console.log(arr3)
```



```js
// concat 3 arrays 
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);
console.log(children)
```




