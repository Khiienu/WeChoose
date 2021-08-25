from .db import db 

class Deck(db.Model):
    __tablename__= 'decks'

    id= db.Column(db.Integer, primary_key=True)
    userId= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name= db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'name': self.name
        }