def first_denomination(kinds_of_coins):
    if kinds_of_coins == 1: return 1
    if kinds_of_coins == 2: return 5
    if kinds_of_coins == 3: return 10
    if kinds_of_coins == 4: return 25
    if kinds_of_coins == 5: return 50
    return 0

def cc(amount, kinds_of_coins):
    if amount == 0: return 1
    if amount < 0 or kinds_of_coins == 0: return 0
    return cc(amount, kinds_of_coins - 1) + cc(amount - first_denomination(kinds_of_coins), kinds_of_coins)

def count_change(amount):
    return cc(amount, 5)

print(count_change(100))
