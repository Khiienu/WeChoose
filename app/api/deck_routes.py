from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Deck
app.forms import deckCreationForm
from .auth_routes import validation_errors_to_error_messages

deck_routes = Blueprint('decks', __name__)

#* GET 
@deck_routes.route('/<int:id>', methods=['GET'])
def deckGet():
    decks = Deck.query.filter_by(userId)
    return {'decks': [decks.to_dict() for deck in decks]}


#* POST
@deck_routes.route('/<int:id>', methods=['POST'])
def deckPost():
    form = deckCreationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        deck = Deck(
            userId = form.data['userId'],
            deckName = form.data['deckName']
        )
        db.session.add(deck)
        db.session.commit()
        return deck.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


#* PUT
@deck_routes.route('/<int:id>', method=['PUT'])
@login_required
def deckPut(id):
    data = request.json
    price = Deck.query.get(id)
    deck.deckName = data['deckName'] if data['deckName'] else deck.deckName
    db.session.commit()
    return {"message": id}


#* DELETE

@deck_routes.route('</int:id>', method=['DELETE'])
@login_required
def deckDelete(id)
    deck = Deck.query.get(id)
    db.session.delete(deck)
    db.session.commit()
    return {"message": id}