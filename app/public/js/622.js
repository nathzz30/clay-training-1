window.modules["622"] = [function(require,module,exports){var makeString = require(578);

module.exports = function replaceAll(str, find, replace, ignorecase) {
  var flags = (ignorecase === true)?'gi':'g';
  var reg = new RegExp(find, flags);

  return makeString(str).replace(reg, replace);
};
}, {"578":578}];
