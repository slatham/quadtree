// Rectangle factory function 
// using arrow notation with implicit return
// and object destructuring 
const Rectangle = ({x, y, w, h}) => ({
    x, y, w, h, 
    containsPoint(point) {
        return  point.x >= x &&             
                point.x <= x + w &&    
                point.y >= y &&             
                point.y <= y + h          
    },
    overlapsRectangle(rectangle) {
        return  !(rectangle.x > x + w ||
                rectangle.y > y + h ||       
                rectangle.x + rectangle.w < x || 
                rectangle.y + rectangle.h < y)     
    }
});
module.exports = Rectangle;
