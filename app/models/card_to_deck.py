from .db import db 

class Card_To_Deck(db.Model):
    __tablename__= 'card-to-deck'

    id = db.Column(db.Integer, primary_key=True)
    deckId = db.Column(db.Integer, db.ForeignKey('decks.id'), nullable=False)
    cardId = db.Column(db.Integer, db.ForeignKey('userCards.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'deckId': self.deckId,
            'cardId': self.cardId
        }