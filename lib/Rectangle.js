"use strict";

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
module.exports = Rectangle;
//# sourceMappingURL=Rectangle.js.map