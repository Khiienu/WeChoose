from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired

class DeckForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    deckName = StringField('deckName', validators=[DataRequired])