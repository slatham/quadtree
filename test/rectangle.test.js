const qtree = require('../build/index');
//const Point = require('../lib/Point');
const expect = require('chai').expect;

describe('# A Rectangle', () =>{
    const r1 = new qtree.Rectangle(-2.23456,92.12345,5,10);
    const r2 = new qtree.Rectangle(-3.23456,97.12345,8,11);
    const r3 = new qtree.Rectangle(4.76544,97.12345,2,5);
    const p1 = new qtree.Point(2.1234,93.1234,'test');
    const p2 = new qtree.Point (-2.23456,93.1234,'test');
    const p3 = new qtree.Point (-1.23456,92.12345);
    const p4 = new qtree.Point (-2.23456,92.12345);
    const p5 = new qtree.Point (-2.9234,93.1234);
    const p6 = new qtree.Point (-2.1234,102.2234);
    const p7 = new qtree.Point (-2.9234,102.2234);

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
    it('Should have a function to determine if a Point is contained in the Rectangle', () =>{
        expect(r1.containsPoint).to.be.a('function');
    });
    it('Should return TRUE if a Point is contained within the Rectangle', () => {
        expect(r1.containsPoint(p1)).to.equal(true);
    });
    it('Should return TRUE if a Point is is on the x border of the Rectangle and y is within the Rectangle', () => {
        expect(r1.containsPoint(p2)).to.equal(true);
    });
    it('Should return TRUE if a Point is is on the y border of the Rectangle and x is within the Rectangle', () => {    
        expect(r1.containsPoint(p3)).to.equal(true);
    });
    it('Should return TRUE if a Point is is on the y and x border of the Rectangle', () => {
        expect(r1.containsPoint(p4)).to.equal(true);
    });
    it('Should return FALSE if a Point is contained outside of the Rectangle for x', () => {
        expect(r1.containsPoint(p5)).to.equal(false);
    });
    it('Should return FALSE if a Point is contained outside of the Rectangle for y', () => {
        expect(r1.containsPoint(p6)).to.equal(false);
    });
    it('Should return FALSE if a Point is contained outside of the Rectangle for x and y', () => {
        expect(r1.containsPoint(p7)).to.equal(false);
    });
    it('Should have a function to determine if a Rectangle overlaps another', () =>{
        expect(r1.overlapsRectangle).to.be.a('function');
    });
    it('Should return TRUE if one Rectangle overlaps another', () => {
        expect(r2.overlapsRectangle(r1)).to.equal(true);
    });
    it('Should return TRUE if one Rectangle overlaps another on one edge only', () => {
        expect(r2.overlapsRectangle(r3)).to.equal(true);
    });
});