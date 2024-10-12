def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")


def is_valid(s):
    if len(s) <= 6 and len(s) >= 2:
        validLeters = ["A"," B", "C"," D", "E", "F", "G", "H", "I", "J", "K", "L"," M", "N", "O"," P", "Q"," R", "S", "T", "U", "V", "W", "X", "Y",  "Z"]
        count = 0
        for leter in validLeters:
            if s[0] == leter or s[1] == leter:
                count = count + 1
            if len(s) >= 3:
                if s[2] == 0:
                    return False   
        if count >= 2:
            return True
    else:
        return False


main()