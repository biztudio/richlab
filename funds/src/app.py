from app_config import app
from flask_script import Manager, Server

manager = Manager(app)
manager.add_command('server', Server())

@manager.shell
def make_shell_context():
    return dict(app=app)

@app.route('/')
def home():
   return 'Richlab'

if __name__ == '__main__':
    #app.run(host='0.0.0.0')
    manager.run()
