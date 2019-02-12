"use strict";

var Point = function Point(_ref) {
    var x = _ref.x,
        y = _ref.y,
        data = _ref.data;
    return {
        x: x, y: y, data: data
    };
};


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Quadtree = function () {
    function Quadtree(boundingBox, maxPointsPerNode) {
        _classCallCheck(this, Quadtree);

        this.boundingBox = boundingBox;
        this.maxPointsPerNode = maxPointsPerNode;
        this.points = []; // array to host the points
        this.childNodes = []; // child nodes
        // a node is either a leaf - i.e. no children
        // 
        // a branch -  i.e has 4 children
        rect(this.boundingBox.x, this.boundingBox.y, this.boundingBox.w, this.boundingBox.h);
    }
    // insert a point into the quadtree


    _createClass(Quadtree, [{
        key: 'insertPoint',
        value: function insertPoint(point) {
            var _this = this;

            // check if valid point - within bounding box
            if (!this.boundingBox.containsPoint(point)) {
                return false;
            }

            // if isLeaf - i.e. no children and not full
            if (this.points.length < this.maxPointsPerNode && this.childNodes.length === 0) {

                // insert Point
                this.points.push(point);
                return;
            }

            // if is a leaf node but full subdivide
            // split the bounding box into 4
            // crate 4 new quadtrees with the 4 new boxes
            // and set them as child nodes
            if (this.childNodes.length === 0) {

                var x = this.boundingBox.x;
                var y = this.boundingBox.y;
                var w = this.boundingBox.w / 2;
                var h = this.boundingBox.h / 2;
                var ne = new Quadtree(new Rectangle(x + w, y + h, w, h), this.maxPointsPerNode);
                var nw = new Quadtree(new Rectangle(x, y + h, w, h), this.maxPointsPerNode);
                var se = new Quadtree(new Rectangle(x + w, y, w, h), this.maxPointsPerNode);
                var sw = new Quadtree(new Rectangle(x, y, w, h), this.maxPointsPerNode);
                this.childNodes.push(ne);
                this.childNodes.push(nw);
                this.childNodes.push(se);
                this.childNodes.push(sw);

                this.points.push(point);
                //console.log(points)
                this.points.forEach(function (p) {

                    _this.insertPoint(p);
                });
                console.log(this.points);
                this.points.splice(0, this.maxPointsPerNode + 1);

                //insertPoint(point);

                return;
            }
            // if is not a leaf node, call insert on children
            this.childNodes.forEach(function (el) {
                el.insertPoint(point);
            });

            //
            //points.splice(0,1);
            // console.log(points)
            // points = [];
            // console.log(points)
            //return
        }

        //return {boundingBox, insertPoint, points, childNodes}


    }]);

    return Quadtree;
}();


var Rectangle = function () {
    function Rectangle(x, y, w, h) {
        _classCallCheck(this, Rectangle);

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    _createClass(Rectangle, [{
        key: "containsPoint",
        value: function containsPoint(point) {
            return point.x >= this.x && point.x <= this.x + this.w && point.y >= this.y && point.y <= this.y + this.h;
        }
    }, {
        key: "overlapsRectangle",
        value: function overlapsRectangle(rectangle) {
            return !(rectangle.x > this.x + this.w || rectangle.y > this.y + this.h || rectangle.x + rectangle.w < this.x || rectangle.y + rectangle.h < this.y);
        }
    }]);

    return Rectangle;
}();

