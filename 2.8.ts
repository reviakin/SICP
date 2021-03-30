/** Упражнение 2.8. 
 *  Рассуждая в духе Лизы, опишите, как 
 *  можно вычислить разность двух интервалов. 
 *  Напишите соответствующую процедуру вычитания, 
 *  называемую sub-interval. 
 */

import {
    makeInterval,
    getLowerBound,
    getUpperBound,
} from './2.7'

type Interval = [number, number];

const subIntervals = 
    (interval1:Interval,interval2: Interval) => 
        makeInterval(
            getLowerBound(interval1) - getLowerBound(interval2),
            getUpperBound(interval1) - getUpperBound(interval2)
        )

export {
    subIntervals,
}