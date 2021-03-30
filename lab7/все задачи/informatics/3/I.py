x = int(input())
count = 0
i = 1
while i * i < x:
	if x % i == 0:
		count += 2
	i += 1
if i * i == x:
	count += 1
print(count)