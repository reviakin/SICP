def square(a):
    return a * a

def remainder(a,b):
    return a % b

def divides(a,b):
    return remainder(b, a) == 0

def find_divisor(n, test_divisor):
    print(n, test_divisor)
    if square(test_divisor) > n:
        return n
    elif divides(test_divisor, n):
        return test_divisor
    else:
        return find_divisor(n, test_divisor + 1)


def smallest_divisor(n):
    return find_divisor(n, 2)

print(smallest_divisor(199))
#print(smallest_divisor(1999))
#print(smallest_divisor(19999))
