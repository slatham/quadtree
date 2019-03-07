# Quadtree


## Usage

### Install

```
npm install@slatham/quadtree
```

### import

```javascript
// import the module
const qt = require('@slatham/quadtree');
```
### Define the properties of the quadtree
```javascript
// define the area of the quadtree
// qt.Rectangle(x, y, w, h)
const area = new qt.Rectangle(0, 0, 100, 100);

// define how many points each node should hold before sub-dividing
const maxPointsPerNode = 10;
```
### Create the quadtree
```Javascript
// create the quadtree
const qtree = new qt.Quadtree(area, maxPointsPerNode);
```
