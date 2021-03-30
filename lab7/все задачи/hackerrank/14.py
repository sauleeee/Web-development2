from itertools import combinations_with_replacement

lis = raw_input().split(' ')

for i in combinations_with_replacement(sorted(lis[0]), int(lis[1])):
    print ''.join(i)
