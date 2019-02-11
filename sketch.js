










function setup() {
    createCanvas(600,600)
    const r1 = Rectangle({x:0,y:0,w:400,h:400});
    let q1 = Quadtree(r1,10);
    for (let i = 0; i < 100; i++){
        point = {x:Math.random()*400, y:Math.random()*400,data:'Test'}
        q1.insertPoint(point);
      
    }
    console.log(q1)
   // q1.show()
    

}

function draw() {
    
    
  
  
}