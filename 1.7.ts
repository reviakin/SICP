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

function sqrt_iter(guess: number, x: number): number {
  //  if (good_enough(guess, x)) {
  //    return guess;
  //  }
  //  return sqrt_iter(improve(guess, x), x);

  return new_if<number>(good_enough(guess, x), guess, improve(guess, x));
}
