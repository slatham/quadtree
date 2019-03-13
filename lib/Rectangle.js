"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/**
 * Class describing an area
 * given a centre point and a
 * width and height from that point
 */


var Area = function (_Rectangle) {
  _inherits(Area, _Rectangle);

  /**
  *
  * @param {float} x
  * @param {float} y
  * @param {float} w
  * @param {float} h
  */
  function Area(x, y, w, h) {
    _classCallCheck(this, Area);

    x = x - w / 2;
    y = y - h / 2;
    return _possibleConstructorReturn(this, (Area.__proto__ || Object.getPrototypeOf(Area)).call(this, x, y, w, h));
  }

  return Area;
}(Rectangle);

module.exports = Rectangle, Area;
//# sourceMappingURL=Rectangle.js.map
