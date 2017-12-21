'''
Services to find the best top 20 & worst top 20
'''
from dkhs.manager_perf_on_fund import ManagerPerformance, ManagerPerformanceService
from easymoney.result_rawdata import ResultRawDataService, ResultRawDataModel
from datetime import date
#import asyncio

today_text = date.today().strftime('%Y-%m-%d')

class RangeResult(object):
    def __init__(self):
        pass

    def __repr__(self):
        pass

class RangeService(object):
    def __init__(self, fund_codes_list):
        self.fund_codes_list = fund_codes_list
        self.mp_service = ManagerPerformanceService()

    def collect_fund_performance_data(self, fund_code):
        mp_service = ManagerPerformanceService()
        rd_service = ResultRawDataService()
        mp_data = mp_service.get_performance_on_fund(fund_code)
        rd_data = rd_service.fetch_archivedata(fund_code)
        print([mp_data, rd_data])
        print(fund_code,' done')

    def determine_if_bad_fund(self, fund_code):
        performance = self.mp_service.get_performance_on_fund(fund_code)
        return performance.suggestion == '建议减持'

    def find_worst_top100_manager(self, fund_category = 0):
        '''
        To avoid buy the fund related to the manager
        To return the managers and the funds they are managing
        '''
        bad_source_fund = []      
        print(self.fund_codes_list)
        [bad_source_fund.append(f) for f in self.fund_codes_list if self.determine_if_bad_fund(f)]
        return bad_source_fund

    def find_best_top100_manager(self, fund_category = 0):
        '''
        To return the managers and the funds they are managing
        '''
        pass

    def find_best_top100_funds(self, fund_category = 0):
        '''
        To return the funds and the managers
        '''
        

        return     
