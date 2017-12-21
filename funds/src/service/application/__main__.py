#from range_service import RangeService, RangeResult
from application.range_service import RangeService

def get_all_fund_code():
    from tinydb import TinyDB
    db = TinyDB('data/fundlist_db.json')
    fund_table = db.table('fund')
    return [f['code'] for f in fund_table.all()]

#002906
fund_codes_list = ['002906','002620','110022','000706']#get_all_fund_code()
service = RangeService(fund_codes_list)
worst_list_500 = service.find_worst_top500_funds()
best_list_500 = service.find_best_top500_funds()
print('BEST 500')
print(best_list_500)

print('WORST 500')
print(worst_list_500)
