from .db import db 

# class Card_To_Deck(db.Model):
#     __tablename__= 'card-to-decks'

#     id = db.Column(db.Integer, primary_key=True)
#     deckId = db.Column(db.Integer, db.ForeignKey('decks.id'), nullable=False)
#     cardId = db.Column(db.Integer, db.ForeignKey('userCards.id'), nullable=False)

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'deckId': self.deckId,
#             'cardId': self.cardId
#         }


# card_to_deck = db.Table(
#     "card_to_deck",
#     db.Column(
#         "deckId",
#         db.Integer,
#         db.ForeignKey("decks.id"),
#         primary_key=True
#     ),
#     db.Column(
#         "cardId",
#         db.Integer,
#         db.ForeignKey("userCards.id"),
#         primary_key=True
#     )
# )