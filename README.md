# Backclass

A base class for creating new class defintions using the Backbone.&lt;Model|Collection|Router&gt;.extend convention. 
Classes include the static extend method, Backbone.Events mixin and instance level post initialize function 
and cid property.

## Instance Members
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

## Class Members
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

## Constructor/Initialize
```js
var Foo = Backbone.Class.extend({
    initialize: function(bar) {
        this.bar = bar;
    }
});
var foo = new Foo('bar');
foo.bar;
```

##  Unique Identifier
```js
var Foo = Backbone.Class.extend({});
var foo = new Foo();
foo.cid;
```

##  Events
```js
var Foo = Backbone.Class.extend({
    bar: function() {
        this.trigger('baz');
    }
});
var foo = new Foo();
foo.on('baz', function() {
   alert('baz event fired');
});
foo.bar();
```
