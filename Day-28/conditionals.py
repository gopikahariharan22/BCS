
# no_of_person = 3


# if no_of_person <= 2:
#     print("We will take 🛵 to the party")
# else:
#     print("We will take 🏎️ to the party")


# if no_of_person <= 2:
#     print("We will take 🛵 to the party")
# elif no_of_person == 3:
#     print("We will take 🛺 to the party")
# else:
#     print("We will take 🏎️ to the party")


# if, else - 1, elif - multiple


# Task 1.1
# Get two person name and height
# Case 1:
# Ethan, Luvuyo
# 185cm, 175cm
# Ethan is taller than Luvuyo by 10cm


person1 = input("Enter Your Name :")
person1_height = int(input("Enter your height in cm:"))
person2 = input("Enter your Name : ")
person2_height = int(input("Enter your height in cm:"))

height_difference = abs(person1_height-person2_height) # always +ve

if (person1_height > person2_height):
    print(f"{person1} taller than {person2} by {height_difference} cm ")
elif(person2_height > person1_height):
    print(f"{person2} taller than {person1} by {height_difference} cm ")
else:
    print(f"{person1} and {person2} are same height ")


# Case 2:
# Ethan, Luvuyo
# 185cm, 194cm
# Luvuyo is taller than Ethan by 9cm


# Task 1.2
# Case 3:
# Ethan, Luvuyo
# 185cm, 185cm
# Ethan and Luvuyo are of the same height