# We can use array  indexs to modify arrays

 Earlier we tried to do this when looking at string immutability. We realized it wasnt possible but it is with arrays. To do this we must declare an array and then indicate tye index position wwe wish to be changed and then initalize it with the new value 
```js
const myArr = [1,2,3];
myArr[0] =45 ;
console.log(myArr)
// It would return [ 45, 2, 3 ]

```


```js
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20

console.log(numbers) // [10, 20, 3, 4, 5]

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // Replacing Kenya by Korea

console.log(countries)
```

```sh
["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]
```
