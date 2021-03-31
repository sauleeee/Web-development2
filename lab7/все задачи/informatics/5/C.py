from random import random

neg = pos = zero = 0
a = []
for i in range(20):
    n = int(random() * 10) - 5
    a.append(n)
    print(n, end=' ')
    if n > 0:
        pos += 1

print(pos)