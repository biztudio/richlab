'''
Services to find the best top 20 & worst top 20
'''
from dkhs.manager_perf_on_fund import ManagerPerformance, ManagerPerformanceService
from easymoney.result_rawdata import ResultRawDataService, ResultRawDataModel
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
        rd_service = ResultRawDataService()
        test = rd_service.fetch_archivedata(self.fund_codes_list[100])
        print(test)
        return     
