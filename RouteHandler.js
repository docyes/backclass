var RouteHandler = function(options) {
    this.cid = _.uniqueId('c');
    options || (options = {});
    this.options = options;
    this.initialize.apply(this, arguments);
};
_.extend(RouteHandler.prototype, Events, {
    initialize: function() {},
    destroy: function() {}
});
RouteHandler.extend = Backbone.Router.extend;
