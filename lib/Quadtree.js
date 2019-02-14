'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = require('./Rectangle');

var Quadtree = function () {
    function Quadtree(boundingBox, maxPointsPerNode) {
        _classCallCheck(this, Quadtree);

        this.boundingBox = boundingBox;
        this.maxPointsPerNode = maxPointsPerNode;
        this.points = [];
        this.childNodes = [];
        //rect(this.boundingBox.x,this.boundingBox.y,this.boundingBox.w,this.boundingBox.h)
    }

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
                var ne = new Quadtree(new Rectangle(x + w, y + h, w, h), this.maxPointsPerNode);
                var nw = new Quadtree(new Rectangle(x, y + h, w, h), this.maxPointsPerNode);
                var se = new Quadtree(new Rectangle(x + w, y, w, h), this.maxPointsPerNode);
                var sw = new Quadtree(new Rectangle(x, y, w, h), this.maxPointsPerNode);
                // add the quadtrees as child nodes
                this.childNodes.push(ne, nw, se, sw);
                // next, add the point that could
                // not fit into the parent node
                this.points.push(point);
                // loop through all of the points and add them again
                this.points.forEach(function (p) {
                    _this.insertPoint(p);
                });

                // empty the points array after they've been 
                // redistributed
                this.points.splice(0, this.maxPointsPerNode + 1);
                return;
            }
            // if is not a leaf node, call insert on children
            this.childNodes.forEach(function (el) {
                el.insertPoint(point);
            });
        }
    }]);

    return Quadtree;
}();

module.exports = Quadtree;
//# sourceMappingURL=Quadtree.js.map