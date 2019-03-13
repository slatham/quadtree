/**
 * Setup the P5 drawing of the quadtree
 */
function setup() {
  // set a canvas size
  createCanvas(1000, 1000);
  // set the weight for easy viewing
  strokeWeight(2);
  // scale up the drawing
  scale(1);
  // size of the quadtree
  const size = 500;
  // set the position of the quadtree bounding box
  const r1 = new Rectangle(10, 10, size, size);
  // create the quadtree with maxpoints = 10
  const q1 = new Quadtree(r1, 10);
  // loop through and add random points to the quadtree
  for (let i = 0; i < 200; i++) {
    const dot = {x: Math.random()*size, y: Math.random()*size, data: 'Test'};
    q1.insertPoint(dot);
  }
  // get the structure of the quadtree
  const structure = q1.getStructure();
  // set the stroke colour and alpha for the structure lines
  stroke(0, 200, 100, 80);
  // loop through and draw each of the bounding boxes
  structure.forEach((el) => {
    rect(el.x, el.y, el.w, el.h);
  });
  // get all points from the quadtree
  const allPoints = q1.queryPoints();
  // change the colour for the points
  stroke(250, 10, 200, 90);
  // loop through and draw each point
  allPoints.forEach((el) => {
    point(el.x, el.y);
  });
  // set up a random x and y for our query area
  const randomNumberX = Math.floor(Math.random()*size);
  const randomNumberY = Math.floor(Math.random()*size);

  circle(randomNumberX, randomNumberY, 2);
  // set our query area
  const queryRect = new Area(randomNumberX, randomNumberY, 99, 101);
  // colour in the query rectangle
  fill(150, 150, 150, 50);
  // draw the query area
  rect(queryRect.x, queryRect.y, queryRect.w, queryRect.h);
  // query the points within our area
  const queryPoints = q1.queryPoints(queryRect);
  // set up the stroke for the query points
  strokeWeight(5);
  // use a different colour for the found points
  stroke(25, 204, 0, 150);
  // draw each of the query points
  queryPoints.forEach((el) => {
    point(el.x, el.y);
  });
}

function draw() {}
