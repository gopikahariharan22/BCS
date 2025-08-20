stock1 = "vanilla"
stock2 = "chocolate"
stock3 = "tin roof"
stock4 = "cookie dough"

stock = [stock1,stock2,stock3,stock4]

# Output
# Case 1
# Please enter your fav 🍧?:    VAnilla
# Yes, we have vanilla in stock

# Case 2
# Please enter your fav 🍧?: salted Caramel
# Sorry, we ran out of Salted Caramel

# Task 1.1
# Clue: if..elif..else


# Task 1.2
# Clue: or (Refactoring)


# Task 1.3
# Clue: in (Refactoring)

favorite = input("Please Enter Your Favorite:").trip().lower()

if(favorite in stock  ):
    print("yes we have {favorite.}")

