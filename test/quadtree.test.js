const qtree = require('../build/index');
const expect = require('chai').expect;

describe('# A Quadtree', () =>{
    const x = 0;
    const y = 0;
    const w = 100;
    const h = 100;
    const maxPointsPerNode = 10;
    const boundingBox = new qtree.Rectangle(x,y,w,h);
    const qt = new qtree.Quadtree(boundingBox,maxPointsPerNode);

    it('Should instantiate to an object qt', () => {
        expect(qt).to.be.an('object');
    });

    it('Should have a method to insert points', () => {
        expect(qt.insertPoint).to.be.an('function');
    });

    it('Should take on the properties of the boundingBox and maxPointsPerNode', () => {

        expect(qt.maxPointsPerNode).to.equal(maxPointsPerNode);
        expect(qt.boundingBox.x).to.equal(x);
        expect(qt.boundingBox.y).to.equal(y);
        expect(qt.boundingBox.w).to.equal(w);
        expect(qt.boundingBox.h).to.equal(h);
   
    });

    // one point added
    it('Should be able to add a point', ()=>{
        qt.insertPoint(new qtree.Point(20,50,"Test"))
        expect(qt.points.length).to.equal(1);
    })

    // no point added
    it('Should not add a point if the point is outside the boundingBox', () =>{
        qt.insertPoint(new qtree.Point(20,500,"Test"))
        expect(qt.points.length).to.equal(1);
    })
    // 9 points added
    it('Should add all points until reaching maxPointsPerNode without subdividing', () => {
        for(let i = 0; i < maxPointsPerNode -1;i++){
            qt.insertPoint(new qtree.Point(i,i,"Test123"))
        }

        expect(qt.queryPoints().size).to.equal(10);
        expect(qt.childNodes.length).to.equal(0);

    })
    // one point added
    it('Should subdivide into 4 once over the maxPointsPerNode',()=>{
        qt.insertPoint(new qtree.Point(5.1,5.1,"Subdivide Test"))
        expect(qt.points.length).to.equal(0);
        expect(qt.childNodes.length).to.equal(4);
        //console.log('-----------------------------------------')
        //console.log(util.inspect(qt, {showHidden:false, depth:null}));
        expect(qt.childNodes[3].childNodes[3].points[9].data).to.equal("Subdivide Test")
        
    })

    it('Should have a function to query the tree', () =>{
        expect(qt.queryPoints).to.be.an('function')
    })

    it('Should return a Set of points when queried', () => {
        const range = new qtree.Rectangle(50,50,9,9);
        expect(qt.queryPoints(range) instanceof Set).to.equal(true)
    })
    // 51 points added
    it('Should return the correct amount of points for a query', () => {
       
        const range = new qtree.Rectangle(50,50,9,9);
        for (let i = 50; i <= 100; i++){
        
                const point = new qtree.Point(i, i,'Test')
                qt.insertPoint(point);
            }
            
        expect(qt.queryPoints(range).size).to.equal(10);
        

    });

    it('Should return valid objects as part of the Set', () =>{
        const range = new qtree.Rectangle(50,50,9,9);
        let dataValue = true;
        qt.queryPoints(range).forEach(el => {
            let isEqualToTest = el.data === "Test";
            dataValue = isEqualToTest && dataValue
        })

        expect(dataValue).to.equal(true);

    })

    it('Should return all points if no range is passed to the query', () => {
        expect(qt.queryPoints().size).to.equal(62)
    })

    describe('Issue #2 - Should not allow duplicate points', () =>{

        it('Should not add a point that already exists', ()=>{
            const boundingBox = new qtree.Rectangle(0,0,10,10);
            const qt1 = new qtree.Quadtree(boundingBox,2);
            qt1.insertPoint(new qtree.Point(5,5,"Subdivide Test"));
            qt1.insertPoint(new qtree.Point(5,5,"Subdivide Test"));
        
            
            expect(qt1.queryPoints().size).to.equal(1);
            

        })





    });




});