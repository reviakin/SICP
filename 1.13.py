def fib_i(n):
    if n < 2: return n
    def fib_ter(a,b,c):
        if c == 0:
            return b
        return fib_ter(a + b, a, c -1)
    return fib_ter(1, 0, n)

def fib_r(n):
    if n < 2: return n
    return fib_r(n-1) + fib_r(n-2)

print(fib_r(8))
print(fib_i(8))
