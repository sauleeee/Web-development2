def sleep_in(weekday, vacation):
  return not weekday or vacation

def monkey_trouble(a_smile, b_smile):return a_smile == b_smile

def sum_double(a, b):
    return a+b if a != b else 2*(a+b)

def diff21(n):
    return 21-n if n < 22 else 2*(n-21)

def parrot_trouble(talking, hour):
  return talking and hour not in range(7,21)

def makes10(a, b):
    return a+b == 10 or a == 10 or b == 10

def near_hundred(n):
    return abs(n-100) < 11 or abs(n-200) < 11

def pos_neg(a, b, negative):
  return (a < 0) ^ (b < 0) if not negative else (a < 0) and (b < 0)

def not_string(str):
  return str if str[:3] == "not" else "not " + str

def missing_char(str, n):
  return str[:n] + str[n+1:]

def front_back(str):""
  return str if len(str) < 2 else str[-1] + str[1:-1] + str[0]

def front3(str):
  return str[:(3 if len(str)>3 else len(str))]*3
