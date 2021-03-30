import unittest


def square(x: int) -> int:
    return x * x


def is_even(n: int) -> bool:
    return n % 2 == 0


def fast_expt(b: int, n: int) -> int:
    if n == 0:
        return 1
    elif is_even(n):
        return square(fast_expt(b, n // 2))
    else:
        return b * fast_expt(b, n - 1)


def pair(a: int, b: int) -> int:
    return fast_expt(2, a) * fast_expt(3, b)


def head(p: int) -> int:
    if p % 2 == 0:
        return head(p/2) + 1
    else:
        return 0


def tail(p: int) -> int:
    if p % 3 == 0:
        return tail(p/3) + 1
    else:
        return 0


# TODO: fixed testcase or code 

class TestRational(unittest.TestCase):

    def test_rat(self):
        a = 13
        b = 123
        r = pair(a, b)

        self.assertEqual(
            tail(r), b, f"should be {b}"
        )


if __name__ == '__main__':
    unittest.main()
