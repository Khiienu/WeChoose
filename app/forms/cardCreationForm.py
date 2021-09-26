from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired



class CardForm(FlaskForm):
    userId = StringField('userId', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description')
    typeofcuisine = StringField('typeofcuisine')