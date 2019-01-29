const rectangle = require('../src/Rectangle.js');
const expect = require('chai').expect;

describe('# Rectangle Object', () =>{
    const r1 = new rectangle;
    const r2 = new rectangle;

    it('Should instantiate to an object r1', () => {
        expect(r1).to.be.an('object');
    });
    it('Should instantiate to an object r2', () => {    
        expect(r2).to.be.an('object');
    });
    it('Should set a value for x, y, w and h on r1', () => {    
        r1.x = -2.23456;
        r1.y = 92.12345;
        r1.w = 5;
        r1.h = 10;
        expect(r1.x).to.equal(-2.23456);
        expect(r1.y).to.equal(92.12345);
        expect(r1.w).to.equal(5);
        expect(r1.h).to.equal(10);
    });
    it('Should set a value for x, y, w and h on r2', () => {    
        r2.x = -3.23456;
        r2.y = 97.12345;
        r2.w = 8;
        r2.h = 11;
        expect(r2.x).to.equal(-3.23456);
        expect(r2.y).to.equal(97.12345);
        expect(r2.w).to.equal(8);
        expect(r2.h).to.equal(11);
    });

    //TODO check the contains functio
    
    

});