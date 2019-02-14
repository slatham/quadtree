const Rectangle = require('./Rectangle');

class Quadtree {

    constructor(boundingBox,maxPointsPerNode) {
    this.boundingBox = boundingBox;
    this.maxPointsPerNode = maxPointsPerNode;
    this.points = [];    
    this.childNodes = [];  
    //rect(this.boundingBox.x,this.boundingBox.y,this.boundingBox.w,this.boundingBox.h)
    }
    insertPoint (point) {
        // early return if the point isn't within the bounding box
        if (!this.boundingBox.containsPoint(point)) {
            return false
        } 
        // if is a Leaf node - i.e. no children and not full
        if (this.points.length < this.maxPointsPerNode && this.childNodes.length === 0){
            // insert Point
            this.points.push(point);
            return;
        }
        /** 
         * If is a leaf node but full, subdivide.
         * split the bounding box into 4
         * crate 4 new quadtrees with the 4 new boxes
         * and set them as child nodes
         */
        if(this.childNodes.length === 0){
            const x = this.boundingBox.x;
            const y = this.boundingBox.y;
            const w = this.boundingBox.w / 2;
            const h = this.boundingBox.h / 2;
            const ne = new Quadtree(new Rectangle(x+w,y+h,w,h),this.maxPointsPerNode);
            const nw = new Quadtree(new Rectangle(x,y+h,w,h),this.maxPointsPerNode);
            const se = new Quadtree(new Rectangle(x+w,y,w,h),this.maxPointsPerNode);
            const sw = new Quadtree(new Rectangle(x,y,w,h),this.maxPointsPerNode);
            // add the quadtrees as child nodes
            this.childNodes.push(ne,nw,se,sw);
            // next, add the point that could
            // not fit into the parent node
            this.points.push(point);
            // loop through all of the points and add them again
            this.points.forEach(p => {               
                this.insertPoint(p)
            });
            
            // empty the points array after they've been 
            // redistributed
            this.points.splice(0,this.maxPointsPerNode+1);
            return;
        }
        // if is not a leaf node, call insert on children
        this.childNodes.forEach(el=> {
            el.insertPoint(point)
        });
        
    }

}

module.exports = Quadtree;