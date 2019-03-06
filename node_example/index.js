// del - used for devel
const qt = require('../build/index');
const util = require('util');

const r1 = new qt.Rectangle(-10,-10,10,10);
const r2 = new qt.Rectangle(-5,-5,5,5)

const q1 = new qt.Quadtree(r1,1);
let point;
for (let i = -9; i < 0; i++) {
  // console.log(i)
  point = new qt.Point (i, i, 'Test');
  q1.insertPoint(point);
}


console.log('-----------------------------------------')
console.log(util.inspect(q1, {showHidden:false, depth:null}));

// all points
console.log(q1.queryPoints()) 

// points in range
console.log(q1.queryPoints(r2))