from flask import Flask

app = Flask(__name__)
class Config(object):
    pass

class ProdConfig(Config):
    pass

class DevConfig(Config):
    DEBUG = True

# 使用 from_ object 是因为未来会加入很多配置项，
# 如果要在不同的配置集之间切换，那么手动去改每个变量是一件烦琐乏味的事情。
app.config.from_object(DevConfig)
