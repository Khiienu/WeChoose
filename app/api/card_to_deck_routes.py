from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, User_Card, Deck

card_to_deck_routes = Blueprint('cardToDeck', __name__)


# @card_to_deck_routes.route('/<int:id>', methods=['PUT'])
# # @login_required
# def cardPut(id):
#     data = request.json
#     card = User_Card.query.get(id)
#     card.name = data['name'] if data['name'] else card.name
#     db.session.commit()
#     return card.to_dict()


@card_to_deck_routes.route('', methods=['PUT'])
def cardToDeckPost():
    try: 
        thisDeck = Deck.query.get(request.json["deckId"])
        thisCard = User_Card.query.get(request.json["cardId"])
        thisDeck.userCards.append(thisCard)
        db.session.add(thisDeck)
        db.session.commit()
        return thisDeck.to_dict()
    except:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@card_to_deck_routes.route('', methods=['DELETE'])
def deleteCardToDeck():
    try: 
        thisDeck = Deck.query.get(request.json["deckId"])
        thisCard = User_Card.query.get(request.json["cardId"])
        thisDeck.userCards.remove(thisCard)
        db.session.add(thisDeck)
        db.session.commit()
        return thisDeck.to_dict()
    except:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
