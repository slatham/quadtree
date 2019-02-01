module.exports = ({x, y, w, h}) => ({
    x, y, w, h,
    containsPoint(point) {
        return  point.x >= this.x &&             
                point.x <= this.x + this.w &&    
                point.y >= this.y &&             
                point.y <= this.y + this.h          
    },
    overlapsRectangle(rectangle) {
        return  !(rectangle.x > this.x + this.w ||
                rectangle.y > this.y + this.h ||       
                rectangle.x + rectangle.w < this.x || 
                rectangle.y + rectangle.h < this.y)     
    }
});
