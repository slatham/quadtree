// del - used for devel
const Rectangle = require('./lib/Rectangle');
const Point = require('./lib/Point');
const Quadtree = require('./lib/Quadtree');
const util = require('util');

const r1 = Rectangle({x:0,y:0,w:100,h:100});


const q1 = Quadtree(r1,5);
for (let i = 0; i < 100; i+=10){
    point = Point({x:i, y:i,data:'Test'})
    q1.insertPoint(point);
}




console.log('-----------------------------------------')
console.log(util.inspect(q1, {showHidden:false, depth:null}));