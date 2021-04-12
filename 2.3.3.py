
"""
Exercise 2.33 Fill in the missing expressions to complete 
the following definitions of some basic list-manipulation 
operations as accumulations:
"""


def head(pair: [int, int]) -> int:
    return pair[0]


def tail(pair: [int, int]) -> int:
    return pair[1]


def accamulate(op, initial, sequence):
    if not sequence:
        return initial
    else:
        return op(head(sequence), accamulate(op, initial, tail(sequence)))


def map(f, sequence):
    return accamulate()
