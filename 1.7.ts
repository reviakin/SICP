function good_enough(guess: number, x: number): boolean {
  return Math.abs(Math.pow(guess, 2) - x) < 0.001;
}

function improve(guess: number, x: number): number {
  return average(guess, x / guess);
}

function average(x: number, y: number): number {
  return (x + y) / 2;
}

function new_if<T>(predicate: boolean, then_clause: T, else_clause: T): T {
  return predicate ? then_clause : else_clause;
}
let j = 0;
function sqrt_iter(guess: number, x: number): number {
  j++;
  return good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}

function good_enough1(guess1: number, guess2: number): boolean {
  return Math.abs(guess1 - guess2) < 0.001;
}
let i = 0;
function sqrt_iter1(guess: number, x: number, old_guess = 0): number {
  i++;
  return good_enough1(guess, old_guess)
    ? guess
    : sqrt_iter1(improve(guess, x), x, guess);
}
let testsq = 12312312312312313;
console.log(sqrt_iter1(1, testsq));
console.log(sqrt_iter(1, testsq));
console.log({ i, j });
