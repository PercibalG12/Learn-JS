# Testing Objects for Properties

- Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example
```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```
The first hasOwnProperty returns true, while the second returns false.

- task

Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.
Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.
Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.
Waiting:checkObj({city: "Seattle"}, "city") should return the string Seattle.
Waiting:checkObj({city: "Seattle"}, "district") should return the string Not Found.
Waiting:checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.

 - setup 
 ```js
 function checkObj(obj, checkProp) {

  return "Change Me!";
 
 }
```

- solution

```js
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
```