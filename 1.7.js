function good_enough(guess, x) {
    return Math.abs(Math.pow(guess, 2) - x) < 0.001;
}
function improve(guess, x) {
    return average(guess, x / guess);
}
function average(x, y) {
    return (x + y) / 2;
}
function new_if(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause;
}
var j = 0;
function sqrt_iter(guess, x) {
    j++;
    return good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
    return new_if(good_enough(guess, x), guess, sqrt_iter(improve(guess, x), x));
}
function good_enough1(guess1, guess2) {
    return Math.abs(guess1 - guess2) < 0.001;
}
var i = 0;
function sqrt_iter1(guess, x, old_guess) {
    if (old_guess === void 0) { old_guess = 0; }
    i++;
    return good_enough1(guess, old_guess)
        ? guess
        : sqrt_iter1(improve(guess, x), x, guess);
}
var testsq = 12312312312312313;
console.log(sqrt_iter1(1, testsq));
console.log(sqrt_iter(1, testsq));
console.log({ i: i, j: j });
