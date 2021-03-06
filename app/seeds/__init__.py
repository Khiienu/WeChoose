from flask.cli import AppGroup
from .users import seed_users, undo_users
from .userCards import seed_User_Cards, undo_User_Cards
from .decks import seed_Deck, undo_Deck
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_User_Cards()
    seed_Deck()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_User_Cards()
    undo_Deck()
    # Add other undo functions here
