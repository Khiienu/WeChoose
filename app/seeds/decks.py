from app.models import db, Deck

def seed_Deck():
    userDecks1 =Deck(userId=2,deckName="First Deck")
    userDecks2 =Deck(userId=2,deckName="Second Deck")
    userDecks3 =Deck(userId=2,deckName="Third Deck")
    userDecks4 =Deck(userId=2,deckName="Fourth Deck")
    userDecks5 =Deck(userId=2,deckName="Fifth Deck")
    userDecks6 =Deck(userId=3,deckName="Sixth Deck")
    userDecks7 =Deck(userId=2,deckName="Seventh Deck")
    userDecks8 =Deck(userId=2,deckName="Eight Deck")
    userDecks9 =Deck(userId=2,deckName="Ninth Deck")
    userDecks10 =Deck(userId=2,deckName="Tenth Deck")
    userDecks11 =Deck(userId=2,deckName="Eleventh Deck")

    db.session.add_all([
        userDecks1,
        userDecks2,
        userDecks3,
        userDecks4,
        userDecks5,
        userDecks6,
        userDecks7,
        userDecks8,
        userDecks9,
        userDecks10,
        userDecks11
    ])

    db.session.commit()

def undo_Deck():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()