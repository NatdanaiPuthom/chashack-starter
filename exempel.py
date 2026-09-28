int_var: int = 10
float_var: float = 3.14159
bool_var: bool = True
str_var: str = "Hello World!"
str_var2 : str = 'Hello World' 
str_var3: str = "Hello \"World\"
str_var4 = ['H', 'E' 'L', 'L', 'O', '', 'W', 'O', 'R', 'L', 'D']


list_var = [1, 2, 3, 4, 5, 6]
tuple_var = (1, 2, 3, 4, 5, 6)
set_var = {1, 2, 3, 4, 5, 6}
dict_var = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6}

#list_var.append(8)- lägg till element i listan

#add_result = int_var + 10
#print(int_var, '+', 10, '=', add_result- får 10 + 20=20
)

#pi_lesser_than_ten = float_var <=int_var
#print(pi_lesser_than_ten)- får sant eller falskt

#print := int_var + float var)- får 13.14159

#is_one_in_set = 8 in set_var
#print(is_one_in_set)- får False

#if 1 in list_var:
#pass- FALSE

#print(list_var)
if 0 in list_var:
    print('ny lista', list_var)
elif 10 in list_var:
    list_var.append(10)
print('ny lista', list_var)
else:
    print(0, 10, 'finns inte i list_var')-

#for str_char in str_var:
str_var[str_var.index(str_char)] = str_var.index(str_char)
print(str_var) - får Hellp World

#Ctrl+c- escape meny när den fastnar

#run_menu = True
while run_menu:
    print("[0] exit\n[1] stanna i meny")
    menu_choise = input("Vad vill du göra?\n> ")")
    
    if menu:choise== "0":
    run_menu = False
    
    if menu:choise =="1":
    pass- får frågan vad jag vill göra-1 för stannaimenyn

#def area_rektangel(sida_a, sida_b):
area= sida_1 + sida_b
return area

print
area_rektangel(10, 10)
area_rektangel(sida_a=10, sida_b=10,)
area_rektangel(sida_b=10, sida_a=10)- får svar 100

namn = input("Vad är ditt namn?\n> ")
print("Hej"m namn)
print("ditt namn är", len(namn), "bokstäver långt")
print("ditt namn innehåller bokstäverna", set(namn)
      får Hej och namn, ditt namn är ...bkstv långt och vilka bkstv namnet innehåller)

def kub_volym(sida)
    """Volymen på kub med sida (int)"""
    return sida**3- 

Lösning:
a = 40
b = input( Gissning:)

def Spel():                                   # funktionen Spel
    korrekt_svar = "Bästa klassen"            # ordet som ska gissas
    spela = True                              # spelet fortsätter
    rätta_bokstäver = ""                      # rätt bokstäver
    fel_bokstäver = ""                        # fel bokstäver
    antal_fel = 0                             # antal fel
    max_försök = 10                           # max fel man får göra

    while spela:                              # spel-loop
        gissning = input("Gissning: ")        # spelaren gissar bokstav

        if gissning in korrekt_svar:          # bokstaven finns i ordet
            print("Gissning", gissning, "är i korrekt svar")
            rätta_bokstäver += gissning       # lägg till rätt bokstav

        if gissning not in korrekt_svar:      # bokstaven finns inte
            print("Gissning inte i korrekt svar")
            fel_bokstäver += gissning         # lägg till fel bokstav
            antal_fel += 1                    # öka fel

        print("Korrekt:", rätta_bokstäver, "Inkorrekt:", fel_bokstäver)  # visa gissningar
        print(max_försök - antal_fel, "av", max_försök, "försök kvar")   # visa försök kvar

        # ---- NY, ENKEL OCH FUNGERANDE VINSTKONTROLL ----
        alla_hittade = True                   # antar att allt är hittat
        for bokstav in korrekt_svar:          # kollar varje bokstav i ordet
            if bokstav != " " and bokstav not in rätta_bokstäver:
                alla_hittade = False          # hittade inte alla

        if alla_hittade:                      # om alla bokstäver är hittade
            spela = False
            print("Du vann, korrekt svar är", korrekt_svar)

        if antal_fel == max_försök:           # för många fel
            spela = False
            print("Du förlorade, korrekt svar är", korrekt_svar)

Spel()                                        # startar spelet













