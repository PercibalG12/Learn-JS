#  Delete Properties from a JavaScript Object
- We can also delete properties from objects like this:

```js
delete ourDog.bark;
```
- Example:
```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
```
```js
delete ourDog.bark;
```
After the last line shown above, ourDog looks like:
```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```