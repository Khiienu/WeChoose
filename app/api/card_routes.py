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
    return {'cards': [card.to_dict() for card in cards]}

#* POST FOR ONE CARD.
@card_routes.route('', methods=['POST'])
def cardPost():
    form = CardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        card = User_Card(
            userId = form.data['userId'],
            name = form.data['name'],
            description = form.data['description'],
            typeofcuisine = form.data['typeofcuisine']
        )
        db.session.add(card)
        db.session.commit()
        return card.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#* PUT

@card_routes.route('/<int:id>', methods=['PUT'])
# @login_required
def cardPut(id):
    data = request.json
    card = User_Card.query.get(id)
    card.name = data['name'] if data['name'] else card.name
    db.session.commit()
    return card.to_dict()

#* DELETE 

@card_routes.route('/<int:id>', methods=['DELETE'])
# @login_required
def cardDelete(id):
    card = User_Card.query.get(id)
    db.session.delete(card)
    db.session.commit()
    return {"message": id}