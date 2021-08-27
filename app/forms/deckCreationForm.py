from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired



class DeckForm(FlaskForm):
    userId = StringField('userId', validators=[DataRequired()])
    deckName = StringField('deckName', validators=[DataRequired()])