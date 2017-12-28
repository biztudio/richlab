from flask_restful import Resource, fields, marshal_with, reqparse
from service.data.fund_perform import FundPerformDataListService
from datetime import date

class FundPerformDataListResource(Resource):
    def __init__(self, *args, **kwargs):
        self.data_perform_service = FundPerformDataListService()

    def get(self):
        return self.data_perform_service.get_performance_info()

class FundPerformDataResource(Resource):
    def __init__(self, *args, **kwargs):
        self.data_perform_service = FundPerformDataListService()

    def get(self, fund_code):
        return self.data_perform_service.get_performance_info()[0]
