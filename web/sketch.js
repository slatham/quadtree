function setup() {

    noFill()
    stroke(0.1)
    createCanvas(1500,1500)
    scale(5)
    const size = 200;
    const r1 = new Rectangle(0,0,size,size);
    let q1 = new Quadtree(r1,10);
    for (let i = 0; i < 900; i++){
        dot = {x:Math.random()*size, y:Math.random()*size,data:'Test'}
      //  strokeWeight(3)
       // point(dot.x,dot.y)
        //strokeWeight(0.5)
        q1.insertPoint(dot);
        //console.log(q1.getStructure())
        //rect(q1.boundingBox.x, q1.boundingBox.y, q1.boundingBox.w, q1.boundingBox.h)
    //     //q1.showRect()

    }


    const structure = q1.getStructure();
   // strokeWeight(1)
        stroke(0,204,0)
    structure.forEach(el => {
        rect(el.x,el.y,el.w,el.h)
    })
    const allPoints = q1.queryPoints();
    console.log(allPoints);
    allPoints.forEach(el => {
      //  strokeWeight(1)
        stroke(233,4,200)
        point(el.x,el.y)
    });

    

// const q1 = new Quadtree(r1,50);
// for (let i = 0; i < 100; i++){
//     dot = Point({x:i, y:i,data:'Test'})
    
//     point(dot.x,dot.y)
//     q1.insertPoint(dot);
// }
noStroke();
fill(255,0,0,50)
    // test a point query
    const randomNumber = Math.floor(Math.random()*180)
    console.log(randomNumber)
    const queryRect = new Rectangle(52,52,99,101)
    rect(queryRect.x,queryRect.y,queryRect.w,queryRect.h);
    const queryPoints = q1.queryPoints(queryRect);
    console.log(queryPoints)
    queryPoints.forEach(el =>{
        //strokeWeight(1)
        stroke(25,204,0)
        point(el.x,el.y)
    })

console.log(q1)

       
      
    

   

    

}

function draw() {
    
    
  
  
}