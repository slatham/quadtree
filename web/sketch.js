function setup() {

    noFill()
    createCanvas(1000,1000)
    scale(5)
    const size = 200;
    const r1 = new Rectangle(0,0,size,size);
    let q1 = new Quadtree(r1,10);
    for (let i = 0; i < 200; i++){
        dot = {x:Math.random()*size, y:Math.random()*size,data:'Test'}
        strokeWeight(0.1)
        point(dot.x,dot.y)
        //strokeWeight(0.5)
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