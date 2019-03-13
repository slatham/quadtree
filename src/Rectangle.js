/**
 * Class describing a rectangle
 */
class Rectangle {
  /**
   * New Rectangle with x & y
   * coordinates and a
   * width and height.
   * @param {float} x
   * @param {float} y
   * @param {float} w
   * @param {float} h
   */
  constructor(x, y, w, h) {
    this.x= x;
    this.y= y;
    this.w= w;
    this.h= h;
  }
  /**
   * Checks if a point sits in
   * the area of the rectangle
   * @param {Point} point
   * @return {boolean}
   */
  containsPoint(point) {
    return point.x >= this.x &&
           point.x <= this.x + this.w &&
           point.y >= this.y &&
           point.y <= this.y + this.h;
  }
  /**
   * Check if a rectangle's area
   * overlaps this rectangle
   * @param {Rectangle} rectangle
   * @return {boolean}
   */
  overlapsRectangle(rectangle) {
    return !(rectangle.x > this.x + this.w ||
            rectangle.y > this.y + this.h ||
            rectangle.x + rectangle.w < this.x ||
            rectangle.y + rectangle.h < this.y);
  }
}
/**
 * Class describing an area
 * given a centre point and a
 * width and height from that point
 */
class Area extends Rectangle {
  /**
  *
  * @param {float} x
  * @param {float} y
  * @param {float} w
  * @param {float} h
  */
  constructor(x, y, w, h) {
    x = x - w / 2;
    y = y - h / 2;
    super(x, y, w, h);
  }
}
module.exports = Rectangle, Area;
