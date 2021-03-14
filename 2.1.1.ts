/**
 * @module data abstraction.
 * 2.1. Data abstraction.
 * 2.1.1 Operations for Rational Numbers.
 */

/** */
type Pair = [number, number];

const pair = (x: number, xs: number): Pair => [x, xs];

const head = (pair: Pair): number => pair[0];

const tail = (pair: Pair): number => pair[1];

/** */
const makeRat = (a: number, b: number): Pair => pair(a, b);

const numer = (pair: Pair): number => head(pair);

const denom = (pair: Pair): number => tail(pair);

/** */
const addRat = (a: Pair, b: Pair): Pair =>
  makeRat(numer(a) * denom(b) + numer(b) * denom(a), denom(a) * denom(b));

const subRat = (a: Pair, b: Pair): Pair =>
  makeRat(numer(a) * denom(b) - numer(b) * denom(a), denom(a) * denom(b));

const mulRat = (a: Pair, b: Pair): Pair =>
  makeRat(numer(a) * numer(b), denom(a) * denom(b));

const divRat = (a: Pair, b: Pair): Pair =>
  makeRat(numer(a) * denom(b), denom(a) * numer(b));

const isEqualRat = (a: Pair, b: Pair): boolean =>
  numer(a) * denom(b) === numer(b) * denom(a);
