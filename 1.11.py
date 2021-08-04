m = {}


def f_recursive(n):
    if n < 3:
        return n
    if not n in m:
        m[n] = f_recursive(n - 1) + f_recursive(n - 2) + f_recursive(n - 3)

    return m[n]


def f_iterative(n):
    def iter(a, b, c, count):
        if count == 0: return c;
        
        return iter(a+ b + c, a, b, count-1)

    if n < 3: return n

    return iter(2, 1, 0, n)
        


print(f_recursive(9))
print(f_iterative(9))
