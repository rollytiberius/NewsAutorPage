fruts_data = {
    "apple": 130,
    "avocado": 50,
    "banana": 110,
    "cantaloupe": 50,
    "grapefruit": 60,
    "grapes": 90,
    "honeydew melon": 50,
    "kiwifruit": 90,
    "lemon": 15,
    "lime": 20,
    "nectarine": 60,
    "orange": 80,
    "peach": 60,
    "pear": 100,
    "pineapple": 50,
    "strawberries": 50,
    "sweet": 100,
    "tangerine": 50,
    "watermelon": 80,
    
}

userInput = input("Item: ").lower()

if userInput in fruts_data:
    print(f"Calories: {fruts_data[userInput]}")

