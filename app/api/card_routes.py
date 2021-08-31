from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, User_Card
from app.forms.cardCreationForm import CardForm
from .auth_routes import validation_errors_to_error_messages
from flask_login import current_user


card_routes = Blueprint('cards', __name__)


#* GET FOR ONE CARD 
@card_routes.route('/<int:id>', methods=['GET'])
def cardGetOne(id):
    card = User_Card.query.get(id)
    thing = card.to_dict()
    print("THIS IS CARD THING", thing)
    return thing


@card_routes.route('/cardsByUser')
def cardGetById():
    cards = User_Card.query.filter(current_user.id == User_Card.userId).all()
    # print("THIS IS CARDS", cards.map())
    return {'cards', [card.to_dict() for card in cards]}


# @card_route.route('', methods=['post'])
