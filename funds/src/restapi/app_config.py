class Config(object):
    pass

class ProdConfig(Config):
    DEBUG = False

class DevConfig(Config):
    DEBUG = True
