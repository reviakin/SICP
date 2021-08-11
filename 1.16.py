def exp_r(a, n):
    print('exp_r_step')
    if n == 0: return 1;

    return exp_r(a * a, n -1)

exp_r(12, 12)

def even(a):
    if a % 2 == 0: return True
    return False

def square(a):
    return a * a

def exp_r_f(a, n):

    def fast_exp(b, m):
        print('exp_r_f_step')
        if m == 0: return 1
        if even(n): return fast_exp(square(b), m/2)
        return fast_exp(b * b, m -1)

    return fast_exp(a, n)

exp_r_f(12,12)
