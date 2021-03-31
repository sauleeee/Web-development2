n = int(input())
l = list(input().split())
cnt = 0
for i in range(0, n):
    if int(l[i]) > 0:
        cnt += 1
print(cnt)