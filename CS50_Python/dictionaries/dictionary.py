students = {
    "Hermonie": "Griffindor",
    "Harry": "Griffindor",
    "Ron": "Griffindor",
    "Draco": "Slitherin"
}

print(students["Hermonie"])
print(students["Harry"])
print(students["Ron"])
print(students["Draco"])

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

for student in students:
    print(student, students[student], sep="~ ~ ")