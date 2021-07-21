def good_enough(guess, x):
    return (abs(guess**3 - x) < 0.1)

def average(x,y):
    return ((x+y)/3);

def improve(guess,x):
    return average(x/(guess**2), 2*guess);

def foo(guess, x):
    print(guess, x);
    if (good_enough(guess, x)):
        return guess;

    return foo(improve(guess, x), x);

print(foo(1, 6))

