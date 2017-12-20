'''
Services to find the best top 20 & worst top 20
'''
from ..dkhs.manager_perf_on_fund import ManagerPerformance, ManagerPerformanceService
from tinydb import TinyDB, Query
from datetime import date

today_text = date.today().strftime('%Y-%m-%d')

class RangeResult(object):
    def __init__(self):
        pass

class RangeService(object):
    def __init__(self, fund_codes_list):
        self.fund_codes_list = fund_codes_list

    def find_worst_top20_manager(self, fund_category = 0):
        '''
        To avoid buy the fund related to the manager
        To return the managers and the funds they are managing
        '''
        pass

    def find_best_top20_manager(self, fund_category = 0):
        '''
        To return the managers and the funds they are managing
        '''
        pass

    def find_best_top20_funds(self, fund_category = 0):
        '''
        To return the funds and the managers
        '''
        pass        

if __name__ == '__main__':
    from ..easymoney.result_rawdata import ResultRawDataService
    raw_data_service = ResultRawDataService()
    fund_codes_list = raw_data_service.get_all_fund_code()
    print(fund_codes_list)
