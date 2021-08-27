from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, Deck
from app.forms.deckCreationForm import DeckForm
from .auth_routes import validation_errors_to_error_messages
from flask_login import current_user

deck_routes = Blueprint('decks', __name__)



#* GET FOR ONE
@deck_routes.route('/<int:id>', methods=['GET'])
def deckGet(id):
    deck = Deck.query.get(id)
    thing = deck.to_dict()
    # cards = card_to_deck.query.all()
    print("THIS IS THE PRING ********************************", thing)
    return deck.to_dict() 
    # return {'decks': [deck.to_dict() for deck in decks]}

#* GET
@deck_routes.route('/decksByUser')
def deckGetById():
    decks = Deck.query.filter(current_user.id == Deck.userId).all()
    return {'decks': [deck.to_dict() for deck in decks]}


#* POST
@deck_routes.route('', methods=['POST'])
def deckPost():
    form = DeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        #* flask login- current_user for userId
        deck = Deck(
            userId = form.data['userId'],
            deckName = form.data['deckName']
        )
        db.session.add(deck)
        db.session.commit()
        return deck.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


#* PUT
@deck_routes.route('/<int:id>', methods=['PUT'])
# @login_required
def deckPut(id):
    data = request.json
    deck = Deck.query.get(id)
    deck.deckName = data['deckName'] if data['deckName'] else deck.deckName
    db.session.commit()
    return {"message": id}


#* DELETE

@deck_routes.route('/<int:id>', methods=['DELETE'])
# @login_required
def deckDelete(id):
    deck = Deck.query.get(id)
    db.session.delete(deck)
    db.session.commit()
    return {"message": id}