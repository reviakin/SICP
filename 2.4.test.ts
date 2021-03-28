import { pair, tail, head } from './2.4';

describe('2.4.ts', () => {
    it('make a correct rational', () => {
        const n = 123;
        const d = 53214;

        const rat = pair(n, d);

        expect(head(rat) / tail(rat)).toBe(n / d);
    });
});
