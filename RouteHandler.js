var RouteHandler = function(options) {
    this.cid = _.uniqueId('c');
    oprtions || (options = {});
    this.initialize.apply(this, arguments);
};
_.extend(RouteHandler.prototype, Events, {
    initialize: function() {},
    terimnate: function() {}
});
