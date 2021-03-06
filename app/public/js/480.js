window.modules["480"] = [function(require,module,exports){'use strict';

exports.__esModule = true;

var _container = require(487);

var _container2 = _interopRequireDefault(_container);

var _types = require(470);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pseudo = function (_Container) {
    _inherits(Pseudo, _Container);

    function Pseudo(opts) {
        _classCallCheck(this, Pseudo);

        var _this = _possibleConstructorReturn(this, _Container.call(this, opts));

        _this.type = _types.PSEUDO;
        return _this;
    }

    Pseudo.prototype.toString = function toString() {
        var params = this.length ? '(' + this.map(String).join(',') + ')' : '';
        return [this.spaces.before, String(this.value), params, this.spaces.after].join('');
    };

    return Pseudo;
}(_container2.default);

exports.default = Pseudo;
module.exports = exports['default'];}, {"470":470,"487":487}];
