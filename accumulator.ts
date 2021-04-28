/**
 * @module 3.1.
 * @param {number} x
 * @returns {Function}
 */
function make_accumulator(x:number){
    return (y:number) => x += y
}

export {make_accumulator}