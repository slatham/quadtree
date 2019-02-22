// Rectangle factory function 
// using arrow notation with implicit return
// and object destructuring 
class Rectangle {
    
    constructor(x,y,w,h) {
        this.x= x;
        this.y= y;
        this.w= w;
        this.h= h;
    }
    containsPoint(point) {
        return  point.x >= this.x &&             
                point.x <= this.x + this.w &&    
                point.y >= this.y &&             
                point.y <= this.y + this.h          
    }
    overlapsRectangle(rectangle) {
        return  !(rectangle.x > this.x + this.w ||
                rectangle.y > this.y + this.h ||       
                rectangle.x + rectangle.w < this.x || 
                rectangle.y + rectangle.h < this.y)     
    }
}
module.exports = Rectangle;
