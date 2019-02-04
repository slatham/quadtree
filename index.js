// del - used for devel
const Rectangle = require('./lib/Rectangle');
const Point = require('./lib/Point');

const r1 = Rectangle({x:0,y:0,w:100,h:100});
const r2 = Rectangle({x:10,y:10,w:50,h:50});
const p1 = Point({x:1,y:2,data:1234});
const p2 = Point({x:5,y:3,data:9999});
console.log(p1);
console.log(p2);
console.log(r1);
console.log(r2);