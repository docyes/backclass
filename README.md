# Backclass

A base class for creating new class defintions using the Backbone.&lt;Model|Collection|Router&gt;.extend convention, 
Backbone.Events mixin and initialize function.

## Example
```js
var Foo = Backbone.Class.extend(
    //instance
    {
        initialize: function() {
            //...
        },
        instanceProperty: '',
        instanceFunction: function () {
            //...
        }
    },
    //class
    classFunction: function() {
        //...
    },
    classProperty: ''
);
Foo.classFunction();
Foo.classProperty;
var foo = new Foo;
foo.instanceFunction();
foo.instanceProperty;
```
