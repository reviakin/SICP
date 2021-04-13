def pair(a, b):
    return [a, b]


def get_head(p):
    return p[0]


def get_tail(p):
    return p[1]


def make_vector(x, y):
    return pair(x, y)


def get_x_coord_vector(v):
    return get_head(v)


def get_y_coord_vector(v):
    return get_tail(v)


def add_vector(v1, v2):
    return make_vector(
        get_x_coord_vector(v1) + get_x_coord_vector(v2),
        get_y_coord_vector(v1) + get_y_coord_vector(v2)
    )


def sub_vector(v1, v2):
    return make_vector(
        get_x_coord_vector(v1) - get_x_coord_vector(v2),
        get_y_coord_vector(v1) - get_y_coord_vector(v2)
    )


def scale_vector(v, s):
    return make_vector(
        get_x_coord_vector(v) * s,
        get_y_coord_vector(v) * s
    )
