import { makeRat, denom, numer } from './2.1.1';

describe('2.1.1', ()=> {
    it('make a correct rat', ()=> {
        const n = 123, d = 345; 
        const rat = makeRat(n, d)
        expect(numer(rat)/denom(rat)).toBe(n/d)
    })
});
