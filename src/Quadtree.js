// rework using prototypes
const Rectangle = require('./Rectangle');
// factory function with object destructuring
class Quadtree {

    constructor(boundingBox,maxPointsPerNode) {
    this.boundingBox = boundingBox;
    this.maxPointsPerNode = maxPointsPerNode;
    this.points = [];    // array to host the points
    this.childNodes = [];   // child nodes
    // a node is either a leaf - i.e. no children
    // 
    // a branch -  i.e has 4 children
    rect(this.boundingBox.x,this.boundingBox.y,this.boundingBox.w,this.boundingBox.h)
    }
    // insert a point into the quadtree
    insertPoint (point) {
        // check if valid point - within bounding box
        if (!this.boundingBox.containsPoint(point)) {
            return false
        } 
        
        // if isLeaf - i.e. no children and not full
        if (this.points.length < this.maxPointsPerNode && this.childNodes.length === 0){

            // insert Point
            this.points.push(point);
            return
        }


        // if is a leaf node but full subdivide
              // split the bounding box into 4
              // crate 4 new quadtrees with the 4 new boxes
              // and set them as child nodes
        if(this.childNodes.length === 0){

            const x = this.boundingBox.x;
            const y = this.boundingBox.y;
            const w = this.boundingBox.w / 2;
            const h = this.boundingBox.h / 2;
            const ne = new Quadtree(new Rectangle(x+w,y+h,w,h),this.maxPointsPerNode)
            const nw = new Quadtree(new Rectangle(x,y+h,w,h),this.maxPointsPerNode)
            const se = new Quadtree(new Rectangle(x+w,y,w,h),this.maxPointsPerNode)
            const sw = new Quadtree(new Rectangle(x,y,w,h),this.maxPointsPerNode)
            this.childNodes.push(ne)
            this.childNodes.push(nw)
            this.childNodes.push(se)
            this.childNodes.push(sw);
            
            this.points.push(point);
            //console.log(points)
            this.points.forEach(p => {
                
                this.insertPoint(p)
            })
            console.log(this.points)
            this.points.splice(0,this.maxPointsPerNode+1);

            
            //insertPoint(point);
   
            return
        }
        // if is not a leaf node, call insert on children
        this.childNodes.forEach(el=> {
            el.insertPoint(point)

        });
        

        //
        //points.splice(0,1);
        // console.log(points)
        // points = [];
        // console.log(points)
        //return

    }



    //return {boundingBox, insertPoint, points, childNodes}



}

module.exports = Quadtree;