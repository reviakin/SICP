import { 
    makeInterval, 
    getUpperBound, 
    getLowerBound,
} from './2.7'

describe('2.7', () => {
    const lower = 121;
    const upper = 234;

    it('return correct interval', () => 
        expect(makeInterval(lower, upper))
            .toEqual([lower, upper])
    )
    it('return correct lower bound', () => 
        expect(getLowerBound(makeInterval(lower, upper)))
            .toEqual(lower)
    )
    it('return correct upper bound', () => 
        expect(getUpperBound(makeInterval(lower, upper)))
            .toEqual(upper)
    )
})