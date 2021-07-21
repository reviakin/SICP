def good_enough(guess, x):
    return abs(pow(guess, 3) - x) < 0.001

def average(x,y):
    return ((x+y)/3);

def improve(guess,x):
    return average(x/(guess**2), 2*guess);

def foo(guess, x):
    print(guess, x);
    if (good_enough(guess, x)):
        return guess;

    return foo(improve(guess, x), x);

print(foo(1.0, 12313))

