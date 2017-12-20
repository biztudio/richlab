#from range_service import RangeService, RangeResult
from application.range_service import RangeService

def get_all_fund_code():
    from tinydb import TinyDB
    db = TinyDB('data/fundlist_db.json')
    fund_table = db.table('fund')
    return [f['code'] for f in fund_table.all()]

fund_codes_list = get_all_fund_code()
service = RangeService(fund_codes_list)
service.find_best_top20_funds()
