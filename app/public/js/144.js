window.modules["144"] = [function(require,module,exports){var List = require(61);
var ALLOW_OF_CLAUSE = true;

module.exports = {
    parse: function() {
        return new List().appendData(
            this.Nth(ALLOW_OF_CLAUSE)
        );
    }
};
}, {"61":61}];
