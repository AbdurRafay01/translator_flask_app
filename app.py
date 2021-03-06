#----------------------------------------------------------------------------#
# Imports
#----------------------------------------------------------------------------#

from typing import Text
from flask import Flask, render_template, request, flash
from flask_socketio import SocketIO, send, emit
import logging
from logging import Formatter, FileHandler
from forms import *
import os
#----------------------------------------------------------------------------#
# App Config.
#----------------------------------------------------------------------------#

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.debug = True
# app.config.from_object('config')
#db = SQLAlchemy(app)
socketio = SocketIO(app)
# Automatically tear down SQLAlchemy.
'''
@app.teardown_request
def shutdown_session(exception=None):
    db_session.remove()
'''

# Login required decorator.
'''
def login_required(test):
    @wraps(test)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return test(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect(url_for('login'))
    return wrap
'''
#----------------------------------------------------------------------------#
# Controllers.
#----------------------------------------------------------------------------#

@app.route('/')
def home():
    print("Hello world")
    return render_template('pages/home.html')
# Error handlers.

@socketio.on('to_translate_type_event')
def get_text_to_translate(text):
    print("received message : ", text['text'])
    socketio.emit('translated_text_is_ready', {'translated_text' : text['text'] })


#error handling
@app.errorhandler(500)
def internal_error(error):
    #db_session.rollback()
    return render_template('errors/500.html'), 500


@app.errorhandler(404)
def not_found_error(error):
    return render_template('errors/404.html'), 404

if not app.debug:
    file_handler = FileHandler('error.log')
    file_handler.setFormatter(
        Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
    )
    app.logger.setLevel(logging.INFO)
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)
    app.logger.info('errors')

#----------------------------------------------------------------------------#
# Launch.
#----------------------------------------------------------------------------#

# Default port:
if __name__ == '__main__':
    socketio.run(app)

# Or specify port manually:
'''
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
'''
