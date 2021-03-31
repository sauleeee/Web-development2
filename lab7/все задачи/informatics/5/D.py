n = int(input())
l = list(input().split())
cnt = 0
for i in range(1, n):
    if int(l[i]) > int(l[i-1]):
        cnt += 1
print(cnt)