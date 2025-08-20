# Filtered Employee ID to Age Mapping
employees = [
    {"id": 101, "name": "Alice", "age": 30},
    {"id": 102, "name": "Bob", "age": 25},
    {"id": 103, "name": "Charlie", "age": 35}
]

filtered_mapping = {emp["id"]: emp["age"] for emp in employees if emp["age"] >= 28}

print(filtered_mapping)

# Filtering fruits  by Price

fruits = {'apple': 1.2, 'banana': 2.5, 'orange': 3.0, 'kiwi': 4.0}

filtered = {fruit: price for fruit, price in fruits.items() if price > 2}

print(filtered)
