# Backbone Class

A boilerplate for creating new class defintions using the Backbone.<Class>extend convention.

## Example
```js
var Foo = Backbone.Class.extend(
    //instance
    {
        initialize: function() {
            //...
        },
        instanceProperty: '',
        instanceMethod: function () {
        
        }
    },
    //class
    classMethod: function() {
        //...
    },
    classProperty: ''
);
Foo.classMethod();
Foo.classProperty;
var foo = new Foo;
foo.instanceMethod();
foo.instanceProperty;
```
