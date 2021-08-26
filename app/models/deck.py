from .db import db 

card_to_deck = db.Table(
    "card_to_deck",
    db.Column(
        "deckId",
        db.Integer,
        db.ForeignKey("decks.id"),
        primary_key=True
    ),
    db.Column(
        "cardId",
        db.Integer,
        db.ForeignKey("userCards.id"),
        primary_key=True
    )
)

class Deck(db.Model):
    __tablename__= 'decks'

    id= db.Column(db.Integer, primary_key=True)
    userId= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    deckName= db.Column(db.String(50), nullable=False)

    userCards = db.relationship(
        "User_Card",
        secondary=card_to_deck,
        back_populates="decks"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'deckName': self.deckName
        }