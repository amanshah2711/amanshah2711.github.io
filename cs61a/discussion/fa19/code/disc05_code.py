lst = [1, "hello", None, 8]


# Using Append
lst.append(5)
lst.append([6, 7])

# Using the Extend Method
lst = [1, 2]
#lst.extend(4) errors because 4 is not something that can be iterated through
lst.extend(["hi", "bye"])

"""
Meant to be like
for item in ['hi', 'bye']:
    lst.append(item)
"""

# Using Insert
lst.insert(1, None)
lst.insert(1231, "potato")
lst.insert(-12312412413, "why")

# Using pop
lst.pop()
what_came_back = lst.pop(2)

#lst.pop(12314) errors because index out of bound(same for next line)
#lst.pop(-12314)

#Using remove
lst.remove(1) #looks for the item you stick in
#lst.remove(10) errors because 10 not in list and remove looks for the item to remove not the index

#what if
lst.append(2)
lst.remove(2)

#Is this mutation
lst = [1,2,3]
temp = lst
lst = lst + [4,5,6]

#Are these the same
lst = [1,2,3]
temp = lst
lst += [4,5,6] # += is the same as extend but lst = lst + [4,5,6] makes a brand new list
lst = lst + [4,5,6]

#final thing
lst = [1,2,3]
temp = lst[:]
a = lst
print(lst is a)
print(lst == a)
print(temp == lst)
print(temp is lst)
