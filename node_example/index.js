const qt = require('../build/index');
const util = require('util');

// create a bounding box for the quadtree
const r1 = new qt.Rectangle(0, 0, 10, 10);
// create a query area
const r2 = new qt.Rectangle(5, 5, 5, 5);
// create a new quadtree
const q1 = new qt.Quadtree(r1, 1);
// loop through and insert some points
for (let i = 0; i < 10; i++) {
  q1.insertPoint(new qt.Point (i, i, 'Test'));
}

// log out the full tree
console.log(util.inspect(q1, {showHidden:false, depth:null}));

// log all points
console.log(q1.queryPoints());

// log points in range
console.log(q1.queryPoints(r2));
