# Quadtree
A simple quadtree data structure for storing 2d objects - [Quadtree](https://en.wikipedia.org/wiki/Quadtree)

## Usage

### Install
Use your node package manager to install or if your are just using it in the browser,  skip this.
```
npm install @slatham/quadtree
```

### Import
Include in your node project
```javascript
// import the module
const qt = require('@slatham/quadtree');
```
Or, if it is a browser-based project, include the file found in the build folder in your HTML
```HTML
<html>
  <head>
    <title>My Quadtree</title>
    <script src="/path/to/quadtree.js"></script>
  </head>
```
### Define the properties of the quadtree
Set up the required properties of the quadtree
```javascript
// define the area of the quadtree
// qt.Rectangle(x, y, w, h)
const area = new qt.Rectangle(0, 0, 100, 100);

// define how many points each node should hold before sub-dividing
const maxPointsPerNode = 10;
```
### Create the quadtree
Will create a new quadtree
```Javascript
// create the quadtree
const qtree = new qt.Quadtree(area, maxPointsPerNode);
```
### Insert points
Will insert a valid point into the quadtree
```Javascript
// define a Point object
// qt.Point(x, y, data)
const point = new qt.Point(50, 50, 'Some test data');
// insert point
qtree.insertPoint();
```
### Query points
Will return a ```Set``` of Point objects for the area defined
```Javascript
// define an area to query
// qt.Rectangle(x, y, w, h)
const queryArea = new qt.Rectangle(25, 25, 50, 50);
// query the quadtree
const points = qtree.queryPoints(queryArea);
```
### Get all points
Will return all points in the quadtree
```Javascript
// get all points simply by omitting the query area parameter on queryPoints()
const allPoints = qt.queryPoints(); 
```
## Examples
Two working examples can be found in the folders web_example and node_example.  To run the node example,
navigate to the node_example folder and run
```
node index.js
```
To run the web example that uses p5 to visualise the quadtree, open up web_example/index.html with your browser.

