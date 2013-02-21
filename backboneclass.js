Backbone.Class = function() {
    this.cid = _.uniqueId('c');
    this.initialize.apply(this, arguments);
};
_.extend(RouteHandler.prototype, Events, {
    initialize: function(){}
});
Backobone.Class.extend = Backbone.Model.extend;
