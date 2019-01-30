module.exports = function rectangle(){

return Object.assign({

    _x: 0,
    _y: 0,
    _w: 0,
    _h: 0,
    set x(value){
        this._x = value;
    },
    get x(){
        return this._x;
    },
    set y(value) {
        this._y = value;
    },
    get y(){
        return this._y;
    },
    set w(value){
        this._w = value;
    },
    get w() {
        return this._w;
    },
    set h(value){
        this._h = value;
    },
    get h() {
        return this._h;
    },
    contains(point) {
        return  point.x >= this.x &&             // evaluate the left edge of the rectangle
                point.x <= this.x + this.w &&    // evaluate the right edge of the rectangle
                point.y >= this.y &&             // evaluate the bottom edge of the rectangle
                point.y <= this.y + this.h       // evaluate the top edge of the rectangle    
    }

});
}