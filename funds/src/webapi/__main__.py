from flask_restful import Api
from flask import Flask
from webapi.app_config import DevConfig, ProdConfig
from webapi.resources.fund_performance import FundPerformanceResource

app = Flask(__name__)

# 使用 from_ object 是因为未来会加入很多配置项，
# 如果要在不同的配置集之间切换，那么手动去改每个变量是一件烦琐乏味的事情。
#app.config.from_object(DevConfig)

api = Api(app)
api.add_resource(FundPerformanceResource, '/fund_perf/<fund_code>')

app.run()
