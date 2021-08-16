def mult(a,b):
    if b == 0:
        return 0
    return a + mult(a, b - 1)

print(mult(20, 150))

def double(a):
    return a * 2

def half(a):
    return a / 2

def even(a):
    return a % 2 == 0

def mult_f(a,b):

    if b == 0:
        return 0

    if even(b):
        return mult_f(double(a), half(b)) 

    return a + mult_f(a, b - 1)

print(mult_f(20, 150))
