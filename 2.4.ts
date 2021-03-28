const pair = (x: number, y: number) => 
    (m: (x: number, y: number) => number) => m(x, y);

const head = (z: ReturnType<typeof pair>) => z((p, _) => p);

const tail = (z: ReturnType<typeof pair>) => z((_, q) => q);

export { pair, head, tail };
