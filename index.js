// del - used for devel
const rectangle = require('./lib/Rectangle');
const point = require('./lib/Point');

let r1 = new rectangle;

r1.x = 0;
r1.y = 0;
r1.w = 100;
r1.h = 100;

let r2 = new rectangle;
r2.x = 10;
r2.y = 10;
r2.w = 50;
r2.h = 50;

const p1 = new point({x:1,y:2,data:1234});
const p2 = new point({x:5,y:3,data:9999});
console.log(p1);
console.log(p2);