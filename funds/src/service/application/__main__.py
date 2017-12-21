#from range_service import RangeService, RangeResult
from application.range_service import RangeService

def get_all_fund_code():
    from tinydb import TinyDB
    db = TinyDB('data/fundlist_db.json')
    fund_table = db.table('fund')
    return [f['code'] for f in fund_table.all()]

#002906
fund_codes_list = ['002906']#get_all_fund_code()
service = RangeService(fund_codes_list)
bad_list = service.find_worst_top100_manager()
print(bad_list)
