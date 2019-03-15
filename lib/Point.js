"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class to describe
 * a point
 */
var Point = function () {
  /**
  * New Point with x & y
  * coordinates and some
  * data stored as an object
  * @param {float} x
  * @param {float} y
  * @param {object} data
  */
  function Point(x, y, data) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
    this.data = data;
  }
  /**
   * Check if two points are the same
   * in both dimensions
   * @param {Point} point
   * @return {boolean}
   */


  _createClass(Point, [{
    key: "isEqualTo",
    value: function isEqualTo(point) {
      return this.x === point.x && this.y === point.y;
    }
  }]);

  return Point;
}();

module.exports = Point;
//# sourceMappingURL=Point.js.map
