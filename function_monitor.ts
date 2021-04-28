/**
 * @module 3.2.
 * @param {Function} f
 * @returns {Function}
 */
function make_monitor(f: Function) {
    let inner_counter = 0;

    return (param: 'how many?' | 'reset count' | any) => {
        if (param === 'how many?') return inner_counter;
        if (param === 'reset count') return (inner_counter = 0);

        inner_counter++;
        return f(param);
    };
}

export { make_monitor };
