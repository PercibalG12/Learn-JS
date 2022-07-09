# Array Length

We use _length_ property to find the length of an array.

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // -> 5 is the size of the array
```


```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log( numbers)
console.log('Number of numbers:', numbers.length)
// this will be shown as  Number of numbers: 6 in the console because when we add a string then a variable js knows we want to log out what that strings says and then follow it up with whatver variable and it's propery we add next 
 
console.log(fruits)
console.log('Number of fruits:', fruits.length)

console.log( vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log( animalProducts)
console.log( animalProducts.length)

console.log( webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log( countries)
console.log('Number of countries:', countries.length)
```
```js
const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
] // List of food products

console.log(shoppingCart) // -> all shoppingCart in array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]) //  -> Sugar
```