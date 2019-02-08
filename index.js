// del - used for devel
const Rectangle = require('./lib/Rectangle');
const Point = require('./lib/Point');
const Quadtree = require('./lib/Quadtree');
const util = require('util');

const r1 = Rectangle({x:0,y:0,w:100,h:100});
//const r2 = Rectangle({x:10,y:10,w:50,h:50});
const p1 = Point({x:1,y:2,data:1234});
const p2 = Point({x:5,y:3,data:9999});
const p3 = Point({x:6,y:7,data:9999});
const p4 = Point({x:3,y:6,data:9999});
const p5 = Point({x:52,y:6,data:9999});
const p6 = Point({x:55,y:6,data:9999});
const p7 = Point({x:52,y:6,data:9999});
const p8 = Point({x:52,y:6,data:9999});
const p9 = Point({x:90,y:6,data:9999});
const p10 = Point({x:99,y:6,data:9999});

//console.log(p1);
//console.log(p2);
//console.log(r1);
//console.log(r2);

const q1 = Quadtree(r1,3);

q1.insertPoint(p1);
console.log(q1)
q1.insertPoint(p2);
console.log(q1)
q1.insertPoint(p3);
console.log(q1)
q1.insertPoint(p4);
console.log(q1)
q1.insertPoint(p5);
q1.insertPoint(p6);
q1.insertPoint(p7);
q1.insertPoint(p8);
q1.insertPoint(p9);
q1.insertPoint(p10);
console.log('-----------------------------------------')
console.log(util.inspect(q1, {showHidden:false, depth:null}));