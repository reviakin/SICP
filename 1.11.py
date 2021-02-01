m = {}


def f_recursive(n):
    if n < 3:
        return n
    if not n in m:
        m[n] = f_recursive(n - 1) + f_recursive(n - 2) + f_recursive(n - 3)

    return m[n]


def f_iterative(n):
    def fib_Iter(a, b, c, count):
        if count == 0:
            return c
        return fib_Iter(a + b + c, a + b, a, count - 1)
    return fib_Iter(1, 0, 0, n)


print(f_recursive(90))
print(f_recursive(90))
