'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function () {
  var $s = '`!@#$%^&*()-+=_[]{},./<>?;:"|\\\'';
  var lowers = 'abcdefghijklmnopqrstuvwxyz';
  var uppers = lowers.toUpperCase();
  var digits = '0123456789';
  var maps = {
    $: [$s, $s.length],
    d: [digits, digits.length],
    l: [lowers, lowers.length],
    u: [uppers, uppers.length]
  };
  var resolve = function resolve(format) {
    var keys = (format || 'dlu').split('').sort();
    var key = keys.join('');
    if (!maps[key]) {
      keys.reduce(function (path, name) {
        var curr = '' + path + name;
        if (!maps[curr]) {
          var _maps$path = _slicedToArray(maps[path], 2),
              arr = _maps$path[0],
              len = _maps$path[1];

          var _maps$name = _slicedToArray(maps[name], 2),
              arr1 = _maps$name[0],
              len1 = _maps$name[1];

          maps[curr] = [arr.concat(arr1), len + len1];
        }
        return curr;
      }, '');
    }
    return maps[key];
  };
  return function () {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
    var format = arguments[1];
    var symbols = arguments[2];

    var _resolve = resolve(format),
        _resolve2 = _slicedToArray(_resolve, 2),
        chars = _resolve2[0],
        charl = _resolve2[1];

    var str = '';
    var chr = void 0;
    if (symbols) {
      chars = chars.replace($s, '') + symbols;
      charl = chars.length;
    }
    while (size-- > 0) {
      chr = chars.charAt(Math.round(Math.random() * charl));
      str += chr;
    }
    return str;
  };
}();