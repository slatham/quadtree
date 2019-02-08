'use strict';

var Rectangle = require('./Rectangle');
// factory function with object destructuring
var Quadtree = function Quadtree(boundingBox, maxPointsPerNode) {
    boundingBox;
    maxPointsPerNode;
    var points = []; // array to host the points
    var childNodes = []; // child nodes
    // a node is either a leaf - i.e. no children
    // 
    // a branch -  i.e has 4 children

    // insert a point into the quadtree
    var insertPoint = function insertPoint(point) {
        // check if valid point - within bounding box
        if (!boundingBox.containsPoint(point)) {
            return false;
        }

        // if isLeaf - i.e. no children and not full
        if (points.length < maxPointsPerNode && childNodes.length === 0) {

            // insert Point
            points.push(point);
            return;
        }

        // if is a leaf node but full subdivide
        // split the bounding box into 4
        // crate 4 new quadtrees with the 4 new boxes
        // and set them as child nodes
        if (childNodes.length === 0) {

            var x = boundingBox.x;
            var y = boundingBox.y;
            var w = boundingBox.w / 2;
            var h = boundingBox.h / 2;
            var ne = new Quadtree(new Rectangle({ x: x + w, y: y + h, w: w, h: h }), 2);
            var nw = new Quadtree(new Rectangle({ x: x, y: y + h, w: w, h: h }), 2);
            var se = new Quadtree(new Rectangle({ x: x + w, y: y, w: w, h: h }), 2);
            var sw = new Quadtree(new Rectangle({ x: x, y: y, w: w, h: h }), 2);
            childNodes.push(ne);
            childNodes.push(nw);
            childNodes.push(se);
            childNodes.push(sw);
            insertPoint(point);
            return;
        }
        // if is not a leaf node, call insert on children
        childNodes.forEach(function (el) {
            el.insertPoint(point);
        });
    };

    // split the quadtree
    var split = function split(boxToSplit) {};

    return { boundingBox: boundingBox, insertPoint: insertPoint, points: points, childNodes: childNodes };
};

module.exports = Quadtree;
//# sourceMappingURL=Quadtree.js.map