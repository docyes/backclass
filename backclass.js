Backbone.Class = function() {
    this.cid = _.uniqueId('c');
    this.initialize.apply(this, arguments);
};
_.extend(Backbone.Class.prototype, Backbone.Events, {
    initialize: function(){}
});
Backbone.Class.extend = Backbone.Model.extend;
