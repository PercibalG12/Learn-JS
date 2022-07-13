# Declarative Functions 

- An object can contain a function. we can do it like so 

```js

const bicycle = {
    gear: 2,
    setGear: function (newGear){
    "use strict"
    this.gear =newGear;
    }
};
bicycle.setGear(3)

```


- this is the simplier way to do it 


```js

const bicycle = {
    gear: 2,
    setGear (newGear){
    "use strict"
    this.gear =newGear;
    }
};

bicycle.setGear(3)

```
