def exp_r(a, n):
    print('exp_r_step')
    if n == 0: return 1

    
    return a * exp_r(a, n -1)

print(exp_r(12, 12))

def even(a):
    if a % 2 == 0: return True
    return False

def square(a):
    return a * a

def exp_r_f(a, n):

    def fast_exp(b, m):
        print('exp_r_f_step')
        if m == 0: return 1
        if even(m): return square(fast_exp(b, m / 2))
        return b * fast_exp(b, m -1)

    return fast_exp(a, n)

print(exp_r_f(12,12))

def exp_i(a,n):
    
    def iterative_exp(m, product):
        print('exp_i_step')
        if m == 0:
            return product
        return iterative_exp(m - 1, product * a)

    return iterative_exp(n, 1);

print(exp_i(12, 12))

def exp_i_f(a,n):

    def fast_iterative_exp(a, b, n):
        print('exp_i_f_step')
        if n == 0: return a;

        if even(n):
            return fast_iterative_exp(a, square(b), n/2)
        return fast_iterative_exp(a * b, b, n - 1)

    return fast_iterative_exp(1, a, n)

print(exp_i_f(12,12))
