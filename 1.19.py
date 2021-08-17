def even(n):
    return n % 2 == 0

def fib_iter(a, b, p, q, count):
    if count == 0:
        return b
    if even(count):
        return fib_iter(
                a, 
                b, 
                p * 2, 
                q * 2, 
                count / 2
                )

    return fib_iter(
            (b * q) + (a * q) + (a * p), 
            (b * q) + (a * q), 
            p, 
            q, 
            count - 1
            )

def fib(n):
    return fib_iter(1, 0, 0, 1, n)

print(fib(2)) 
print(fib(5)) 
print(fib(20)) 
