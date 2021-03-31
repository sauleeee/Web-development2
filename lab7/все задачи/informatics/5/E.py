n = int(input())
list = input().split()
cnt = 0
for i in range(1, n):
    if (int(list[i]) <= 0 and int(list[i - 1]) <= 0) or (int(list[i]) > 0 and int(list[i - 1]) > 0):
        cnt += 1
if (cnt > 0):
    print("YES")
else:
    print("NO")