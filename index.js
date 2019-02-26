// del - used for devel
const Rectangle = require('./lib/Rectangle');
const Point = require('./lib/Point');
const Quadtree = require('./lib/Quadtree');
const util = require('util');

const r1 = new Rectangle(-10,-10,10,10);
const r2 = new Rectangle(-5,-5,5,5)

const q1 = new Quadtree(r1,1);
for (let i = -9; i < 0; i++){
//console.log(i)
    point = Point({x:i, y:i,data:'Test'})
    q1.insertPoint(point);
}


console.log('-----------------------------------------')
console.log(util.inspect(q1, {showHidden:false, depth:null}));

// all points
console.log(q1.queryPoints()) 

// points in range
console.log(q1.queryPoints(r2))