# Enter your code here. Read input from STDIN. Print output to STDOUT

import calendar
k = map(int,raw_input().split())
m = calendar.weekday(k[2],k[0],k[1])
w = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY']

print w[m]