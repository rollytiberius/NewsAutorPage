def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")


def is_valid(s):
    if len(s) <= 6 and len(s) >= 2:
        validLeters = ["A"," B", "C"," D", "E", "F", "G", "H", "I", "J", "K", "L"," M", "N", "O","P", "Q","R", "S", "T", "U", "V", "W", "X", "Y",  "Z"]
        count = 0
        for leter in validLeters:
            if s[0] == leter or s[1] == leter:
                count = count + 1
        if count == 6:
            return True
        if len(s) > 2 and s[2] == "0":
            return False
        s_list = list(s)
        
        for char in s_list:
            if char == ".":
                return False

        if len(s) == 6 and s[5].isnumeric():
            for leter in validLeters:
                if leter == s[4]:
                    return False
        
        if count == 2 :
            return True
        
     
    else:
        return False


main()
