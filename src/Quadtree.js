const Rectangle = require('./Rectangle');
/**
 * Class describing the data-structure
 * for a Quadtree
 */
class Quadtree {
  /**
   * @constructor
   * @param {Rectangle} boundingBox
   * @param {int} maxPointsPerNode
   */
  constructor(boundingBox, maxPointsPerNode) {
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
  insertPoint(point) {
    // early return if the point isn't within the bounding box
    if (!this.boundingBox.containsPoint(point)) {
      return false;
    }
    // if is a Leaf node - i.e. no children and not full
    if (this.points.length < this.maxPointsPerNode
        && this.childNodes.length === 0) {
      // insert Point
      const exists = this.points.some((p) => {
        return p.isEqualTo(point);
      });

      if (!exists) {
        this.points.push(point);
      }
      return;
    }
    /**
     * If is a leaf node but full, subdivide.
     * split the bounding box into 4
     * crate 4 new quadtrees with the 4 new boxes
     * and set them as child nodes
     */
    if (this.childNodes.length === 0) {
      const x = this.boundingBox.x;
      const y = this.boundingBox.y;
      const w = this.boundingBox.w / 2;
      const h = this.boundingBox.h / 2;
      const max = this.maxPointsPerNode;
      const ne = new Quadtree(new Rectangle(x+w, y+h, w, h), max);
      const nw = new Quadtree(new Rectangle(x, y+h, w, h), max);
      const se = new Quadtree(new Rectangle(x+w, y, w, h), max);
      const sw = new Quadtree(new Rectangle(x, y, w, h), max);
      // add the quadtrees as child nodes
      this.childNodes.push(ne, nw, se, sw);
      // next, add the point that could
      // not fit into the parent node
      this.points.push(point);
      // loop through all of the points and add them again
      this.points.forEach((p) => {
        this.insertPoint(p);
      });
      // empty the points array after they've been redistributed
      this.points.splice(0, this.maxPointsPerNode+1);
      return;
    }
    // if is not a leaf node, call insert on children
    this.childNodes.forEach((el)=> {
      el.insertPoint(point);
    });
  }
  /**
   * Find all points within a range
   * @param {Rectangle} range
   * @param {Array} pointsFound
   * @return {Set}
   */
  queryPoints(range, pointsFound = []) {
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
      const validPoints = this.points.filter(
          (point) => range.containsPoint(point));
      pointsFound.push(...validPoints);
    }
    // if has children
    this.childNodes.forEach((node) => {
      node.queryPoints(range, pointsFound); // recursive bit!
    });
    return new Set(pointsFound);
  }
  /**
   * Get the structure of the tree
   * @param {Array} structure
   * @return {Array}
   */
  getStructure(structure = []) {
    // if is a leaf node, i.e. no children
    // add to the structure.
    if (this.childNodes.length === 0) {
      structure.push(this.boundingBox);
      return;
    }
    // if has children
    this.childNodes.forEach((node) =>{
      node.getStructure(structure);
    });
    return structure;
  }
}
module.exports = Quadtree;
