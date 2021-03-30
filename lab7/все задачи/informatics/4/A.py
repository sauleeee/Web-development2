n = int(input())
value = 1
cur_sq = value * value

while cur_sq <= n:
	print(str(cur_sq) + ' ')
	value = value + 1
	cur_sq = value*value