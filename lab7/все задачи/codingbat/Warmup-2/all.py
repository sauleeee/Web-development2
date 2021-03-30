def string_times(str, n):
  return str*n

def front_times(str, n):""
  return str[:(3 if len(str)>3 else len(str))]*n

def string_bits(str):
  return str[::2]

def string_splosion(str):
  result = ""
  for i in range(1,len(str)+1):
    result = result + str[:i]
  return result

def last2(str):
  count = 0
  for i in range(0, len(str)-2):
    if str[i:i+2] == str[-2:]:
      count += 1
  return count

def array_count9(nums):
  return nums.count(9)

def array_front9(nums):""
  return nums[:4].count(9) > 0

def array123(nums):"
  for i in range(0,len(nums)-2):
    if [1,2,3] == nums[i:i+3]:
      return True
  return False


def string_match(a, b):
  def splitter(str,n):
    result = []
    for i in range(0,len(str)-n+1):
      result.append(str[i:i+n])
    return result

  count = 0
  a_split = splitter(a,2)
  b_split = splitter(b,2)

  for i in range(0, len(a_split) if len(a_split)<=len(b_split) else len(b_split)):
    if a_split[i] == b_split[i]:
      count += 1

  return count
