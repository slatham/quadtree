// del - used for devel
const Rectangle = require('./lib/Rectangle');
const Point = require('./lib/Point');
const Quadtree = require('./lib/Quadtree');
const util = require('util');

const r1 = Rectangle({x:0,y:0,w:100,h:100});
//const r2 = Rectangle({x:10,y:10,w:50,h:50});
const p1 = Point({x:1,y:2,data:'point1'});
const p2 = Point({x:5,y:3,data:'point2'});
const p3 = Point({x:6,y:7,data:'point3'});
const p4 = Point({x:3,y:6,data:'point4'});
const p5 = Point({x:52,y:6,data:'point5'});
const p6 = Point({x:55,y:6,data:'point6'});
const p7 = Point({x:52,y:6,data:'point7'});
const p8 = Point({x:52,y:6,data:'point8'});
const p9 = Point({x:90.1,y:6,data:'point9'});
const p10 = Point({x:99.6,y:6,data:'point10'});
const p11 = Point({x:52.5,y:6,data:'point11'});
const p12 = Point({x:53.3,y:6,data:'point12'});
const p13 = Point({x:51.5,y:6,data:'point13'});
const p14 = Point({x:56,y:6,data:'point14'});
const p15 = Point({x:97,y:6,data:'point15'});
const p16 = Point({x:98,y:6,data:'point16'});

//console.log(p1);
//console.log(p2);
//console.log(r1);
//console.log(r2);

const q1 = Quadtree(r1,5);



q1.insertPoint(p2);

q1.insertPoint(p3);

q1.insertPoint(p4);


 q1.insertPoint(p6);
 q1.insertPoint(p7);
 q1.insertPoint(p8);
 q1.insertPoint(p9);
 q1.insertPoint(p10);
 q1.insertPoint(p11);
 q1.insertPoint(p12);
 q1.insertPoint(p13);
 q1.insertPoint(p14);
 q1.insertPoint(p15);
 q1.insertPoint(p5);
 q1.insertPoint(p1);


console.log('-----------------------------------------')
console.log(util.inspect(q1, {showHidden:false, depth:null}));