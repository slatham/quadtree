// del - used for devel
const rectangle = require('./lib/Rectangle');
const point = require('./lib/Point');

const r1 = new rectangle({x:0,y:0,w:100,h:100});
const r2 = new rectangle({x:10,y:10,w:50,h:50});
const p1 = new point({x:1,y:2,data:1234});
const p2 = new point({x:5,y:3,data:9999});
console.log(p1);
console.log(p2);
console.log(r1);
console.log(r2);