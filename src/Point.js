/**
 * Class to describe
 * a point
 */
class Point {
  /**
  * New Point with x & y
  * coordinates and some
  * data stored as an object
  * @param {float} x
  * @param {float} y
  * @param {object} data
  */
  constructor(x, y, data) {
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
  isEqualTo(point) {
    return this.x === point.x && this.y === point.y;
  }
}
module.exports = Point;
