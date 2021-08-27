from .db import db
from .deck import card_to_deck
class User_Card(db.Model):
    __tablename__= 'userCards'

    id= db.Column(db.Integer, primary_key=True)
    userId= db.Column(db.Integer, db.ForeignKey('users.id'))
    name= db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    typeofcuisine = db.Column(db.String(100), nullable=False)


    decks = db.relationship(
        "Deck",
        secondary=card_to_deck,
        back_populates="userCards"
    )

    def to_dict(self):
        return{
            'id': self.id,
            'userId': self.userId,
            'name': self.name,
            'description': self.description,
            'typeofcuisine': self.typeofcuisine
        }