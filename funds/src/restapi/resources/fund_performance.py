from flask_restful import Resource, fields, marshal_with, reqparse
from datetime import date

class FundPerformanceResource(Resource):
    def __init__(self, *args, **kwargs):
        self.date_version = '20171222'#date.today().strftime('%Y%m%d')

    def get(self, fund_code):
        return fund_code + self.date_version