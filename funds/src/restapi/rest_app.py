from restapi.app_config import app
from flask_restful import Api

from restapi.resources.fund_performance import FundPerformanceResource

api = Api(app)
api.add_resource(FundPerformanceResource, '/fund_perf/<fund_code>')
