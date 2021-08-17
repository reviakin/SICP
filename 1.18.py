def double(a):
    return a * 2 

def half(a):
    return a / 2

def even(a):
    return a % 2 == 0


def mult(a, b): 

    def make_russian_peasant_multiplication(c, d, e = 0):
        if c == 0: return e
        if not even(c):
            return make_mult(half(c), double(d), e + d)
        return make_mult(half(c), double(d), e)
    
    return make_russian_peasant_multiplication(a, b)

print(mult(20, 15))
