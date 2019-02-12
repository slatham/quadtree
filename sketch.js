










function setup() {
    noFill()
    createCanvas(600,600)
    const r1 = new Rectangle(0,0,200,200);
    let q1 = new Quadtree(r1,10);
    for (let i = 0; i < 120; i++){
        dot = {x:Math.random()*200, y:Math.random()*200,data:'Test'}
        stroke(0)
        point(dot.x,dot.y)
        stroke(100)
        q1.insertPoint(dot);
    //     //q1.showRect()

    }
// const q1 = new Quadtree(r1,50);
// for (let i = 0; i < 100; i++){
//     dot = Point({x:i, y:i,data:'Test'})
    
//     point(dot.x,dot.y)
//     q1.insertPoint(dot);
// }

console.log(q1)

       
      
    

   

    

}

function draw() {
    
    
  
  
}