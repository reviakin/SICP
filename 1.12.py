m = {}

def pascal(row, element):
    if row == 1 or element == 1 or row == element: return 1
    if (row, element) not in m:
        m[(row, element)] = pascal(row - 1, element - 1) + pascal(row - 1, element)
    return m[(row, element)]


