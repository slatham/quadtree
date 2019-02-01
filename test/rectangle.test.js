const rectangle = require('../lib/Rectangle');
const point = require('../lib/Point');
const expect = require('chai').expect;

describe('# Rectangle Object', () =>{
    const r1 = new rectangle({x:-2.23456,y:92.12345,w:5,h:10});
    const r2 = new rectangle({x:-3.23456,y:97.12345,w:8,h:11});
    const r3 = new rectangle({x:4.76544,y:97.12345,w:2,h:5});
    const p1 = new point({x:2.1234,y:93.1234,data:'test'});
    const p2 = new point ({x:-2.23456,y:93.1234,data:'test'});
    const p3 = new point ({x:-1.23456,y:92.12345});
    const p4 = new point ({x:-2.23456,y:92.12345});
    const p5 = new point ({x:-2.9234,y:93.1234});
    const p6 = new point ({x:-2.1234,y:102.2234});
    const p7 = new point ({x:-2.9234,y:102.2234});

    it('Should instantiate to an object r1', () => {
        expect(r1).to.be.an('object');
    });
    it('Should instantiate to an object r2', () => {    
        expect(r2).to.be.an('object');
    });
    it('Should set a value for x, y, w and h on r1', () => {    
        expect(r1.x).to.equal(-2.23456);
        expect(r1.y).to.equal(92.12345);
        expect(r1.w).to.equal(5);
        expect(r1.h).to.equal(10);
    });
    it('Should set a value for x, y, w and h on r2', () => {    
        expect(r2.x).to.equal(-3.23456);
        expect(r2.y).to.equal(97.12345);
        expect(r2.w).to.equal(8);
        expect(r2.h).to.equal(11);
    });
    it('Should have a function to determine if a point is contained in the rectangle', () =>{
        expect(r1.containsPoint).to.be.a('function');
    });
    it('Should return TRUE if a point is contained within the rectangle', () => {
        expect(r1.containsPoint(p1)).to.equal(true);
    });
    it('Should return TRUE if a point is is on the x border of the rectangle and y is within the rectangle', () => {
        expect(r1.containsPoint(p2)).to.equal(true);
    });
    it('Should return TRUE if a point is is on the y border of the rectangle and x is within the rectangle', () => {    
        expect(r1.containsPoint(p3)).to.equal(true);
    });
    it('Should return TRUE if a point is is on the y and x border of the rectangle', () => {
        expect(r1.containsPoint(p4)).to.equal(true);
    });
    it('Should return FALSE if a point is contained outside of the rectangle for x', () => {
        expect(r1.containsPoint(p5)).to.equal(false);
    });
    it('Should return FALSE if a point is contained outside of the rectangle for y', () => {
        expect(r1.containsPoint(p6)).to.equal(false);
    });
    it('Should return FALSE if a point is contained outside of the rectangle for x and y', () => {
        expect(r1.containsPoint(p7)).to.equal(false);
    });
    it('Should have a function to determine if a rectangle overlaps another', () =>{
        expect(r1.overlapsRectangle).to.be.a('function');
    });
    it('Should return TRUE if one rectangle overlaps another', () => {
        expect(r2.overlapsRectangle(r1)).to.equal(true);
    });
    it('Should return TRUE if one rectangle overlaps another on one edge only', () => {
        expect(r2.overlapsRectangle(r3)).to.equal(true);
    });
});