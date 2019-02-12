// del - used for devel
const Rectangle = require('./lib/Rectangle');
const Point = require('./lib/Point');
const Quadtree = require('./lib/Quadtree');
const util = require('util');

const r1 = new Rectangle(0,0,10,10);


const q1 = new Quadtree(r1,5);
for (let i = 0; i < 10; i++){
    point = Point({x:i, y:i,data:'Test'})
    q1.insertPoint(point);
}




console.log('-----------------------------------------')
console.log(util.inspect(q1, {showHidden:false, depth:null}));