'''
Services to find the best top 20 & worst top 20
'''
from ..dkhs.manager_perf_on_fund import ManagerPerformance, ManagerPerformanceService
from tinydb import TinyDB, Query
from datetime import date

today_text = date.today().strftime('%Y-%m-%d')

class RangeService(object):
    def __init__(self):
        pass

    def find_worst_top20_manager(self):
        pass        