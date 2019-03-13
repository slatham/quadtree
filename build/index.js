/** Author: S Latham */

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class to describe
 * a point
 */
var Point =
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
};


//# sourceMappingURL=Point.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * Class describing the data-structure
 * for a Quadtree
 */

var Quadtree = function () {
  /**
   * @constructor
   * @param {Rectangle} boundingBox
   * @param {int} maxPointsPerNode
   */
  function Quadtree(boundingBox, maxPointsPerNode) {
    _classCallCheck(this, Quadtree);

    this.boundingBox = boundingBox;
    this.maxPointsPerNode = maxPointsPerNode;
    this.points = [];
    this.childNodes = [];
  }
  /**
   * Inserts a point into the quadtree
   * @param {Point} point
   * @return {boolean}
   */


  _createClass(Quadtree, [{
    key: 'insertPoint',
    value: function insertPoint(point) {
      var _this = this;

      // early return if the point isn't within the bounding box
      if (!this.boundingBox.containsPoint(point)) {
        return false;
      }
      // if is a Leaf node - i.e. no children and not full
      if (this.points.length < this.maxPointsPerNode && this.childNodes.length === 0) {
        // insert Point
        this.points.push(point);
        return;
      }
      /**
       * If is a leaf node but full, subdivide.
       * split the bounding box into 4
       * crate 4 new quadtrees with the 4 new boxes
       * and set them as child nodes
       */
      if (this.childNodes.length === 0) {
        var x = this.boundingBox.x;
        var y = this.boundingBox.y;
        var w = this.boundingBox.w / 2;
        var h = this.boundingBox.h / 2;
        var max = this.maxPointsPerNode;
        var ne = new Quadtree(new Rectangle(x + w, y + h, w, h), max);
        var nw = new Quadtree(new Rectangle(x, y + h, w, h), max);
        var se = new Quadtree(new Rectangle(x + w, y, w, h), max);
        var sw = new Quadtree(new Rectangle(x, y, w, h), max);
        // add the quadtrees as child nodes
        this.childNodes.push(ne, nw, se, sw);
        // next, add the point that could
        // not fit into the parent node
        this.points.push(point);
        // loop through all of the points and add them again
        this.points.forEach(function (p) {
          _this.insertPoint(p);
        });
        // empty the points array after they've been redistributed
        this.points.splice(0, this.maxPointsPerNode + 1);
        return;
      }
      // if is not a leaf node, call insert on children
      this.childNodes.forEach(function (el) {
        el.insertPoint(point);
      });
    }
    /**
     * Find all points within a range
     * @param {Rectangle} range
     * @param {Array} pointsFound
     * @return {Set}
     */

  }, {
    key: 'queryPoints',
    value: function queryPoints(range) {
      var pointsFound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (typeof range === 'undefined') {
        range = this.boundingBox;
      }
      // early return if range is outside of bounding box
      if (!range.overlapsRectangle(this.boundingBox)) {
        return;
      }
      // if is a Leaf node - i.e. no children
      if (this.points.length > 0 && this.childNodes.length === 0) {
        // add points
        // range may overlap a box but the point could still be outside of
        // the range
        var validPoints = this.points.filter(function (point) {
          return range.containsPoint(point);
        });
        pointsFound.push.apply(pointsFound, _toConsumableArray(validPoints));
      }
      // if has children
      this.childNodes.forEach(function (node) {
        node.queryPoints(range, pointsFound); // recursive bit!
      });
      return new Set(pointsFound);
    }
    /**
     * Get the structure of the tree
     * @param {Array} structure
     * @return {Array}
     */

  }, {
    key: 'getStructure',
    value: function getStructure() {
      var structure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      // if is a leaf node, i.e. no children
      // add to the structure.
      if (this.childNodes.length === 0) {
        structure.push(this.boundingBox);
        return;
      }
      // if has children
      this.childNodes.forEach(function (node) {
        node.getStructure(structure);
      });
      return structure;
    }
  }]);

  return Quadtree;
}();


//# sourceMappingURL=Quadtree.js.map

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


//# sourceMappingURL=Rectangle.js.map

if (typeof module !== 'undefined') {
	module.exports = {Rectangle, Quadtree, Point, Area}
	}