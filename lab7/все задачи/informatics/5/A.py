n = int(input())
l = list(input().split())
for i in range(0, n):
    if i % 2 == 0:
        print(l[i], end=" ")