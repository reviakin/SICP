/**
 * @module data abstraction.
 * 2.1. Data abstraction
 * 2.7.
 * Программа Лизы неполна, поскольку она не
 * определила, как реализуется абстракция интервала.
 * Вот определение конструктора интервала:
 * (define (make-interval a b) (cons a b))
 * Завершите реализацию, определив селекторы
 * upper-bound и lower-bound.
 */


/** */
const makePair = <T>(a: T, b: T): [T, T] => [a, b];

const getHead = <T>(p:[T,T]): T => p[0];

const getTail = <T>(p:[T, T]) :T => p[1];

/** */
const makeInterval = (lower: number, upper: number) => 
    makePair<number>(lower, upper);

const getUpperBound = (interval:[number, number]) => 
    getTail<number>(interval);

const getLowerBound = (interval:[number, number]) => 
    getHead<number>(interval);

/** */
export {
    makeInterval, 
    getUpperBound, 
    getLowerBound,
}