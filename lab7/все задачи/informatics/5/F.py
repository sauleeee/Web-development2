a = [int(i) for i in input().split()]
counter = 0
for i in range(1, len(a) - 1):
    # о боги, разве так можно писать?
    if a[i - 1] < a[i] > a[i + 1]:
        counter += 1
print(counter)