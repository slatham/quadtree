# Quadtree


## Usage

### Install
_Use your node package manager to install_
```
npm install@slatham/quadtree
```

### import
_Include in your project_
```javascript
// import the module
const qt = require('@slatham/quadtree');
```
### Define the properties of the quadtree
_Set up the required properties of the quadtree_
```javascript
// define the area of the quadtree
// qt.Rectangle(x, y, w, h)
const area = new qt.Rectangle(0, 0, 100, 100);

// define how many points each node should hold before sub-dividing
const maxPointsPerNode = 10;
```
### Create the quadtree
_Will create a new quadtree_
```Javascript
// create the quadtree
const qtree = new qt.Quadtree(area, maxPointsPerNode);
```
### Insert points
_Will insert a valid point into the quadtree_
```Javascript
// define a Point object
// qt.Point(x, y, data)
const point = new qt.Point(50, 50, 'Some test data');
// insert point
qtree.insertPoint();
```
### Query points
_Will return a Set of Point objects for the area defined_
```Javascript
// define an area to query
// qt.Rectangle(x, y, w, h)
const queryArea = new qt.Rectangle(25, 25, 50, 50);
// query the quadtree
const points = qtree.queryPoints(queryArea);
```
### Get all points
_Will return all points in the quadtree
```Javascript
// get all points simply by omitting the query area parameter on queryPoints()
const allPoints = qt.queryPoints(); 
```
