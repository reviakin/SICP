def double(a):
    return a * 2 

def half(a):
    return a / 2

def even(a):
    return a % 2 == 0


def mult(a, b): 
    # see http://www.solipsys.co.uk/new/RussianPeasantMultiplication.html?HN_20150802
    def make_russian_peasant_multiplication(c, d, e = 0):
        if c == 0: 
            return e
        if not even(c):
            return make_russian_peasant_multiplication(half(c), double(d), e + d)
        return make_russian_peasant_multiplication(half(c), double(d), e)
    
    return make_russian_peasant_multiplication(a, b)

print(mult(20, 15))
