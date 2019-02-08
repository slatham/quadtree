const Rectangle = require('./Rectangle');
// factory function with object destructuring
const Quadtree = (boundingBox, maxPointsPerNode) => {
    boundingBox;
    maxPointsPerNode;
    let points = [];    // array to host the points
    let childNodes = [];   // child nodes
    // a node is either a leaf - i.e. no children
    // 
    // a branch -  i.e has 4 children

    // insert a point into the quadtree
    const insertPoint = point => {
        // check if valid point - within bounding box
        if (!boundingBox.containsPoint(point)) {
            return false
        } 
        
        // if isLeaf - i.e. no children and not full
        if (points.length < maxPointsPerNode && childNodes.length === 0){

            // insert Point
            points.push(point);
            return
        }


        // if is a leaf node but full subdivide
              // split the bounding box into 4
              // crate 4 new quadtrees with the 4 new boxes
              // and set them as child nodes
        if(childNodes.length === 0){

            const x = boundingBox.x;
            const y = boundingBox.y;
            const w = boundingBox.w / 2;
            const h = boundingBox.h / 2;
            const ne = new Quadtree(new Rectangle({x:x+w,y:y+h,w:w,h:h}),maxPointsPerNode)
            const nw = new Quadtree(new Rectangle({x:x,y:y+h,w:w,h:h}),maxPointsPerNode)
            const se = new Quadtree(new Rectangle({x:x+w,y:y,w:w,h:h}),maxPointsPerNode)
            const sw = new Quadtree(new Rectangle({x:x,y:y,w:w,h:h}),maxPointsPerNode)
            childNodes.push(ne)
            childNodes.push(nw)
            childNodes.push(se)
            childNodes.push(sw);
            
            points.push(point);
            //console.log(points)
            points.forEach(p => {
                
                insertPoint(p)
            })
            console.log(points)
            points.splice(0,maxPointsPerNode+1);

            
            //insertPoint(point);
   
            return
        }
        // if is not a leaf node, call insert on children
        childNodes.forEach(el=> {
            el.insertPoint(point)

        });
        

        //
        //points.splice(0,1);
        // console.log(points)
        // points = [];
        // console.log(points)
        //return

    }



    return {boundingBox, insertPoint, points, childNodes}



}

module.exports = Quadtree;