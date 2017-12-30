from flask_restful import Api
from flask import Flask
from flask_cors import CORS
from webapi.app_config import DevConfig, ProdConfig
from webapi.resources.fund_performance import FundPerformDataListResource, FundPerformDataResource, AllGoodStockFundDataResource

app = Flask(__name__)
CORS(app)

# 使用 from_ object 是因为未来会加入很多配置项，
# 如果要在不同的配置集之间切换，那么手动去改每个变量是一件烦琐乏味的事情。
#app.config.from_object(DevConfig)

api = Api(app)
api.add_resource(FundPerformDataResource, '/fund_perform/<fund_code>')
api.add_resource(FundPerformDataListResource, '/fund_perform')
api.add_resource(AllGoodStockFundDataResource, '/all_stock_good_fund')

@app.route('/')
def home():
    return '<h1>Hello, Richlab</h1>'

if __name__=='__main__':
    app.run(port=5050, host='0.0.0.0')
