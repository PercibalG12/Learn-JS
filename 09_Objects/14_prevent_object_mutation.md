# In order to prevent object mutation we use Object.freeze()

- The Object.freeze method freezes an object that prevents new properties from being added to it. This method prevents the modification of existing property, attributes, and values.

- Let's say for example we have pi stored as an object. In order to prevent pi from chainging we can use Object.freeze.
```js
const math = 
{
"PI": 3.14
}

Object.freeze(math)

```
