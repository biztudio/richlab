from tinydb import TinyDB
from datetime import date

class FundPerformDataListService(object):
    '''

    '''
    fund_perform_all = []
    data_version = '20171222'#date.today().strftime('%Y%m%d')

    def __init__(self, *args, **kwargs):        
        self.load_all_fund_perform()

    def load_all_fund_perform(self):
        if len(FundPerformDataListService.fund_perform_all) <= 0:
            perf_db = TinyDB('service/data/all_fund_perform_list_'+ FundPerformDataListService.data_version + '.json')
            fund_table = perf_db.table('fund')
            FundPerformDataListService.fund_perform_all = fund_table.all()

    def get_performance_info(self, fund_code=''):
        self.load_all_fund_perform()        
        if(fund_code):
            print(fund_code)
            print(len(FundPerformDataListService.fund_perform_all))
            return list(filter(lambda f:f['code']==fund_code, FundPerformDataListService.fund_perform_all))
        else:
            return FundPerformDataListService.fund_perform_all        


