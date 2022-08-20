#### Splice method in array

The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.

It takes three parameters:Starting position, number of times to be removed and number of items to be added.

 <!-- syntax = array.splice(index, howmany, item1, ....., itemX) -->


| Paramater    | Description  
|--------------|------------------------------------------------------------------|
| index        | Required. The position to add/remove items.                      |
|              | Negative value defines the position from the end of the array.   | 
|--------------|------------------------------------------------------------------| 
| Howmany      | Optional, Number of items to be removed.                         |  
|--------------|------------------------------------------------------------------|
| item1, ...,  |  Optional.                                                       |
| itemX        |  New elements(s) to be added.                                    |
|--------------|------------------------------------------------------------------|
	

```js


  const numbers = [1, 2, 3, 4, 5]
	numbers.splice(0,1)
  console.log(numbers) //[2,3,4,5]
```

```js
   const numbers = [1, 2, 3, 4, 5, 6]
	const text = numbers.splice(3, 3, 7)
  console.log(text)  // [4,5,6]
```




