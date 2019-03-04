"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class describing a rectangle
 */
var Rectangle = function () {
  /**
   * New Rectangle with x & y
   * coordinates and a
   * width and height.
   * @param {float} x
   * @param {float} y
   * @param {float} w
   * @param {float} h
   */
  function Rectangle(x, y, w, h) {
    _classCallCheck(this, Rectangle);

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  /**
   * Checks if a point sits in
   * the area of the rectangle
   * @param {Point} point
   * @return {boolean}
   */


  _createClass(Rectangle, [{
    key: "containsPoint",
    value: function containsPoint(point) {
      return point.x >= this.x && point.x <= this.x + this.w && point.y >= this.y && point.y <= this.y + this.h;
    }
    /**
     * Check if a rectangle's area
     * overlaps this rectangle
     * @param {Rectangle} rectangle
     * @return {boolean}
     */

  }, {
    key: "overlapsRectangle",
    value: function overlapsRectangle(rectangle) {
      return !(rectangle.x > this.x + this.w || rectangle.y > this.y + this.h || rectangle.x + rectangle.w < this.x || rectangle.y + rectangle.h < this.y);
    }
  }]);

  return Rectangle;
}();

module.exports = Rectangle;
//# sourceMappingURL=Rectangle.js.map
