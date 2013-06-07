(function($) {

    var consoleLog = console.log;
    console.log = function() {
        var args = Array.prototype.slice.call(arguments);
        consoleLog.apply(this, args.map(function(obj, i) {
            return $.isPlainObject(obj) ? $.extend(true, {}, obj) : obj;
        }));
    }

    // For good ol' nostalgic purposes
    console.old = function() {
        consoleLog.apply(this, arguments);
    }

}(jQuery));
