from app.models import db, User_Card

def seed_User_Cards(): 
    userCard1 =User_Card(userId=1,name="McDonald's",description="Known for its nuggets and burgers, McDonald's satisfies hunger when needed.",typeofcuisine="Fast Food")
    userCard2 =User_Card(userId=1,name="Burger King",description="Burger King has burgers.",typeofcuisine="Fast Food")
    userCard3 =User_Card(userId=1,name="Chic Fil a",description="Closed on Sundays, but still loved by many.",typeofcuisine="Fast Food")
    userCard4 =User_Card(userId=1,name="TGIF",description="Thank God It's Friday. Good for going out to eat on Friday's.",typeofcuisine="American")
    userCard5 =User_Card(userId=1,name="Taco Bell",description="Fast food tacos.",typeofcuisine="Fast Food")
    userCard6 =User_Card(userId=1,name="Wendy's",description="Fresh, never frozen burgers.",typeofcuisine="Fast Food")
    userCard7 =User_Card(userId=1,name="Subway",description="Sandwiches made in front of you. Eat Fresh.",typeofcuisine="Fast Food")
    userCard8 =User_Card(userId=1,name="Chipotle",description="Mexican grill, bowls and burritos made in front of you.",typeofcuisine="Mexican")
    userCard9 =User_Card(userId=1,name="Sonic",description="Known for its retro theme, drive -in concept. The happy hour is loved by many.",typeofcuisine="Fast Food")
    userCard10 =User_Card(userId=1,name="Starbucks",description="It's more than good coffee.",typeofcuisine="Cafe")
    userCard11 =User_Card(userId=1,name="Popeyes",description="Serving chicken dishes in mild/spicy flavors. Love that chicken from Popeye's.",typeofcuisine="Fast Food")
    userCard12 =User_Card(userId=1,name="Panda Express",description="Chinese fast food.",typeofcuisine="Fast Food")
    userCard13 =User_Card(userId=1,name="Nine Roses",description="Vietnamese cuisine.",typeofcuisine="Vietnamese")
    userCard14 =User_Card(userId=1,name="Bali Hai",description="With a spectactular view. This restaurant has Polynesian cuisine.",typeofcuisine="Polynesian")
    userCard15 =User_Card(userId=1,name="Buffalo Wild Wings",description="Buffalo wild wings are known to have a wide assortment of wings of different spice levels.",typeofcuisine="American")
    userCard16 =User_Card(userId=1,name="Chinese Buffet",description="All you can eat chinese food.",typeofcuisine="Chinese")
    userCard17 =User_Card(userId=1,name="Arashi Ramen",description="With an assortment of different ramen, located in Seattle.",typeofcuisine="Japanese")
    userCard18 =User_Card(userId=1,name="Dan Sung Sa",description="Serving authentic Korean cuisine. Located in Los Angeles.",typeofcuisine="Korean")
    userCard19 =User_Card(userId=1,name="Tokyo Sushi",description="Sushi cuisine",typeofcuisine="Japanese")
    userCard20 =User_Card(userId=1,name="Clever Koi",description="Clever Koi is an Asian-inspired kitchen & craft cocktail bar, Located in Phoenix.",typeofcuisine="Asian")
    userCard21 =User_Card(userId=1,name="Texas Roadhouse",description="Famous for hand-cut steaks, fall-off-the-bone ribs, sides, and BREAD.",typeofcuisine="American")
    userCard22 =User_Card(userId=1,name="Taco Stall",description="Any taco stall you know",typeofcuisine="Mexican")
    userCard23 =User_Card(userId=1,name="Cheesecake Factory",description="Outside of cheescakes, the factory is known for dishes for breakfast, lunch, and dinner.",typeofcuisine="American")
    userCard24 =User_Card(userId=1,name="H20 Sushi",description="Japanese cuisine.",typeofcuisine="Japanese")
    userCard25 =User_Card(userId=1,name="Providence Oyster Bar",description="Found Rhode Island, this restaurant offers visitors the freshest selection of oysters and clams, bold and creative seafood dishes ",typeofcuisine="Seafood")

    db.session.add_all([
        userCard1,
        userCard2,
        userCard3,
        userCard4,
        userCard5,
        userCard6,
        userCard7,
        userCard8,
        userCard9,
        userCard10,
        userCard11,
        userCard12,
        userCard13,
        userCard14,
        userCard15,
        userCard16,
        userCard17,
        userCard18,
        userCard19,
        userCard20,
        userCard21,
        userCard22,
        userCard23,
        userCard24,
        userCard25
    ])

    db.session.commit()

def undo_User_Cards():
    db.session.execute('TRUNCATE userCards RESTART IDENTITY CASCADE;')
    db.session.commit()