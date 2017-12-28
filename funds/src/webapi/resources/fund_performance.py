from flask_restful import Resource, fields, marshal_with, reqparse
from service.data.fund_perform import FundPerformDataListService
from datetime import date

class FundPerformDataListResource(Resource):
    def __init__(self, *args, **kwargs):
        self.data_perform_service = FundPerformDataListService()

    def get(self):
        fund_perform_info = self.data_perform_service.get_performance_info()
        if fund_perform_info:
            return fund_perform_info
        return ''

class FundPerformDataResource(Resource):
    def __init__(self, *args, **kwargs):
        self.data_perform_service = FundPerformDataListService()

    def get(self, fund_code):
        fund_perform_info = self.data_perform_service.get_performance_info(fund_code)
        if fund_perform_info:
            return fund_perform_info[0]
        return ''
