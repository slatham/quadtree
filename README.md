# Quadtree
## A simple quadtree data structure

### Usage
```javascript
// import the module
const qt = require('@slatham/quadtree');

// define the area of the quadtree
// qt.Rectangle(x, y, w, h)
const area = new qt.Rectangle(0, 0, 100, 100);

// define how many points each node should hold before sub-dividing
const maxPointsPerNode = 10;

// create the quadtree
const qtree = new qt.Quadtree(area, maxPointsPerNode);



```
