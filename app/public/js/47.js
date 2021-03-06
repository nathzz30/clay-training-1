window.modules["47"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(51);

/**
 * First test if argument is a String. If true, test if '/_pages/' is in the string.
 * Otherwise, throw an error.
 * @param  {string}  uri
 * @return {Boolean}
 */
module.exports = function (uri) {
  isUriStringCheck.strCheck(uri);
  return uri.toLowerCase().indexOf('/_pages/') > -1;
};
}, {"51":51}];
