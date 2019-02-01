"use strict";

module.exports = function (_ref) {
    var x = _ref.x,
        y = _ref.y,
        w = _ref.w,
        h = _ref.h;
    return {
        x: x, y: y, w: w, h: h,
        containsPoint: function containsPoint(point) {
            return point.x >= this.x && point.x <= this.x + this.w && point.y >= this.y && point.y <= this.y + this.h;
        },
        overlapsRectangle: function overlapsRectangle(rectangle) {
            return !(rectangle.x > this.x + this.w || rectangle.y > this.y + this.h || rectangle.x + rectangle.w < this.x || rectangle.y + rectangle.h < this.y);
        }
    };
};
//# sourceMappingURL=Rectangle.js.map