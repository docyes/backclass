# Backclass

A base class for creating new class defintions using the Backbone.<Model|Collection|Router>.extend convention and Backbone.Events mixin.

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
