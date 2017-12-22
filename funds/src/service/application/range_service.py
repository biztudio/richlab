'''
Services to find the best top 20 & worst top 20
'''
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
        self.fund_performance_list = []

    def find_best_top500_funds(self, fund_category = ['混合型','股票型','指数型','债券型','货币型','QDII']):
        '''
        To return the funds and the managers
        '''
        good_fund_list = list(filter(lambda f:((f['suggestion'] == '建议增持' or f['suggestion'] == '建议买入') and f['category'] in fund_category), self.fund_performance_list))
        best_funds_top500 = sorted(good_fund_list, key=lambda f: f['score'], reverse=True)[0:499]
        return best_funds_top500

    def find_worst_top500_funds(self, fund_category = ['混合型','股票型','指数型','债券型','货币型','QDII']):
        '''
        performance.suggestion == '建议减持' / '建议观望'
        '''
        bad_fund_list = list(filter(lambda f:((f.suggestion == '建议减持' or f.suggestion == '建议观望') and f.category in fund_category), self.fund_performance_list))
        worst_funds_top500 = sorted(bad_fund_list, key=lambda f: f.score, reverse=False)[0:499]
        return worst_funds_top500

    def find_worst_top100_manager(self, fund_category = 0):
        '''
        To avoid buy the fund related to the manager
        To return the managers and the funds they are managing
        '''
        bad_source_fund = []      

        return bad_source_fund

    def find_best_top100_manager(self, fund_category = 0):
        '''
        To return the managers and the funds they are managing
        '''
        pass

      
