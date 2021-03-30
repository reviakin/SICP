import { subIntervals } from './2.8';
import { makeInterval } from './2.7';

describe('2.8', () => {
    const i1 = makeInterval(16, 543);
    const i2 = makeInterval(12, 235);
    const i3 = makeInterval(4, 308)
    it('subIntervals is not falsy value', () => 
        expect(subIntervals).toBeTruthy()
    );
    
    it('return correct intervals subtraction', () => 
        expect(subIntervals(i1, i2)).toEqual(i3)
    );
});