# Backclass

A base class for creating new class defintions using the Backbone.&lt;Model|Collection|Router&gt;.extend convention. 
Classes include the static extend method, Backbone.Events mixin and instance level post initialize function 
and cid property.

## Instance
```js
var Foo = Backbone.Class.extend({
    bar: 'bar',
    baz: function() {
        //...
    }
});
var foo = new Foo();
foo.bar;
foo.baz();
```

## Class
```js
var Foo = Backbone.Class.extend({}, {
    bar: 'bar',
    baz: function() {
        //...
    }
});
Foo.bar;
Foo.baz();
```

## initialize
```js
var Foo = Backbone.Class.extend({
    initialize: function() {
        alert('')
    }
});
```

## cid
var Foo = Backbone.Class.extend({});
var foo = new Foo();
foo.cid;
```
