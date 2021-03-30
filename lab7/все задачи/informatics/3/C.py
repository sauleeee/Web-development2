import math
a = int(input())
b = int(input())
sqrta = int(math.sqrt(a) + 1)
sqrtb = int(math.sqrt(b))
for x in range(sqrta, sqrtb + 1):
   print(x * x)