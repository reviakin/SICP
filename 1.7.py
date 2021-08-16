def mult(a,b):
    if b == 0:
        return 0
    return a + mult(a, b - 1)

print(mult(20, 15))
