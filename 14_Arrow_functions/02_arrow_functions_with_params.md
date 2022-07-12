# Arrow function with paramaters and arguments 


- Similarily to regular functions we can pass in params and args into arrow functions

- Anonymus function example 

```js
const arrFunc = function(arr1, arr2){
    return arr1.concat (arr2)
}

arrFunc([1,2,3], [4,5,6,7,8,9])
```

- Arrow Function example 
```js
const arrFunc = (arr1, arr2) => arr1.concat (arr2)


arrFunc([1,2,3], [4,5,6,7,8,9])
```