"use strict";

// var Point = function Point(_ref) {
//     var x = _ref.x,
//         y = _ref.y,
//         data = _ref.data;
//     return {
//         x: x, y: y, data: data
//     };
// };

//# sourceMappingURL=Point.js.map



// factory function with object destructuring
var Quadtree = function Quadtree(boundingBox, maxPointsPerNode) {
    boundingBox;
    showRect(boundingBox)
    maxPointsPerNode;
    var points = []; // array to host the points
    var childNodes = []; // child nodes
    // a node is either a leaf - i.e. no children
    // 
    // a branch -  i.e has 4 children

    // insert a point into the quadtree
    var insertPoint = function insertPoint(point) {
        showPoint(point)
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
            var ne = new Quadtree(new Rectangle({ x: x + w, y: y + h, w: w, h: h }), maxPointsPerNode);
            var nw = new Quadtree(new Rectangle({ x: x, y: y + h, w: w, h: h }), maxPointsPerNode);
            var se = new Quadtree(new Rectangle({ x: x + w, y: y, w: w, h: h }), maxPointsPerNode);
            var sw = new Quadtree(new Rectangle({ x: x, y: y, w: w, h: h }), maxPointsPerNode);
            childNodes.push(ne);
            childNodes.push(nw);
            childNodes.push(se);
            childNodes.push(sw);

            points.push(point);
            //console.log(points)
            points.forEach(function (p) {

                insertPoint(p);
            });
            console.log(points);
            points.splice(0, maxPointsPerNode + 1);

            //insertPoint(point);

            return;
        }
        // if is not a leaf node, call insert on children
        childNodes.forEach(function (el) {
            el.insertPoint(point);
        });

        //
        //points.splice(0,1);
        // console.log(points)
        // points = [];
        // console.log(points)
        //return
    };

    function showRect (bb) {
        rect(bb.x,bb.y,bb.w,bb.h)
        
    }

    function showPoint (pp) {
        circle(pp.x,pp.y,1)
        
    }

    return {showPoint:showPoint,showRect:showRect, boundingBox: boundingBox, insertPoint: insertPoint, points: points, childNodes: childNodes };
};



// Rectangle factory function 
// using arrow notation with implicit return
// and object destructuring 
var Rectangle = function Rectangle(_ref) {
    var x = _ref.x,
        y = _ref.y,
        w = _ref.w,
        h = _ref.h;
    return {
        x: x, y: y, w: w, h: h,
        containsPoint: function containsPoint(point) {
            return point.x >= x && point.x <= x + w && point.y >= y && point.y <= y + h;
        },
        overlapsRectangle: function overlapsRectangle(rectangle) {
            return !(rectangle.x > x + w || rectangle.y > y + h || rectangle.x + rectangle.w < x || rectangle.y + rectangle.h < y);
        }
    };
};
