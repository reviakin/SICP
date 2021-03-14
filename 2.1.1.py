"""2.1. Data abstraction."""
"""2.1.1 Operations for Rational Numbers."""


def pair(x: int, b: int) -> [int, int]:
    return [x, b]


def head(pair: [int, int]) -> int:
    return pair[0]


def tail(pair: [int, int]) -> int:
    return pair[1]


def greatest_common_divisors(a, b):
    if b == 0:
        return a

    return greatest_common_divisors(b, a % b)


def sign(x):
    if x < 0:
        return - 1
    elif x > 0:
        return 1
    else:
        return 0


""""""


def make_rat(a, b):
    g = greatest_common_divisors(a, b)
    return pair(sign(g)*sign(a)*abs(a//g), abs(b//g))


def numer(pair: [int, int]) -> int:
    return head(pair)


def denom(pair: [int, int]) -> int:
    return tail(pair)


# or
# numer = head
# denom = tail

""""""


def add_rat(a: [int, int], b: [int, int]) -> [int, int]:
    return make_rat(
        numer(a) * denom(b) + numer(b) * denom(a),
        denom(a) * denom(b)
    )


def sub_rat(a: [int, int], b: [int, int]) -> [int, int]:
    return make_rat(numer(a)*denom(b) - numer(b)*denom(a), denom(a)*denom(b))


def mul_rat(a: [int, int], b: [int, int]) -> [int, int]:
    return make_rat(numer(a)*numer(b), denom(a)*denom(b))


def div_rat(a: [int, int], b: [int, int]) -> [int, int]:
    return make_rat(numer(a)*denom(b), denom(b)*numer(a))


def equal_rat(a: [int, int], b: [int, int]) -> bool:
    return numer(a) * denom(b) == numer(b) * denom(a)


def print_rat(pair: [int, int]):
    print(f"{numer(pair)} / {denom(pair)}")


""""""
one_half = make_rat(1, 2)
one_third = make_rat(1, 3)
print_rat(add_rat(one_half, one_third))


""""""
