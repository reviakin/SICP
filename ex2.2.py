def make_pair(a, b):
    return [a, b]


def get_head(pair):
    return pair[0]


def get_tail(pair):
    return pair[1]


def make_segment(start, end):
    return make_pair(start, end)


def get_segment_start(segment):
    return get_head(segment)


def get_segment_end(segment):
    return get_tail(segment)


def make_point(x, y):
    return make_pair(x, y)


def get_point_x(point):
    return get_head(point)


def get_point_y(point):
    return get_tail(point)


def print_point(point):
    print(f"x: {get_head(point)} y:{get_tail(point)}")


def get_midpoint_segment(segment):
    segment_start_x = get_point_x(get_segment_start(segment))
    segment_end_x = get_point_x(get_segment_end(segment))
    segment_start_y = get_point_y(get_segment_start(segment))
    segment_end_y = get_point_y(get_segment_end(segment))
    x = 0
    y = 0

    if segment_start_x > segment_end_x:
        x = segment_start_x - segment_end_x
    else:
        x = segment_end_x - segment_start_x
    if segment_start_y > segment_end_y:
        y = segment_start_y - segment_end_y
    else:
        y = segment_end_y - segment_start_y

    return make_point(x, y)


segment = make_segment(make_point(1123, 123), make_point(123123, 1233))
print_point(get_midpoint_segment(segment))
