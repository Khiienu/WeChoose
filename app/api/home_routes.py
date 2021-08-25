from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User_Card

card_for_home_routes = Blueprint('home', __name__) # * this is /api/{route}

@card_for_home_routes.routes('/')
def cardsForHome():
    homeCards = User_Card.query.findByPk()
