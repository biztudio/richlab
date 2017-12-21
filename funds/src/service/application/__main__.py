#from range_service import RangeService, RangeResult
from application.range_service import RangeService
from tinydb import TinyDB
from datetime import date

today_text = date.today().strftime('%Y%m%d')

def get_all_fund_code():
    db = TinyDB('data/fundlist_db.json')
    fund_table = db.table('fund')
    return [f['code'] for f in fund_table.all()]

def archive_fund_performance(archive_name, fund_perf_list):
    print('Archiving to data/'+archive_name+'.json...')
    perf_db = TinyDB('data/'+archive_name+'.json')
    perf_fund_table = perf_db.table('fund')
    perf_db.purge_table('fund')
    perf_fund_table.insert_multiple({
        'code':f.fund_code, 'name':f.fund_name, 'category':f.category_text,
        'score':f.score, 'percent':f.score_percent, 
        'suggestion':f.suggestion, 'conclude':f.conclude_statement
    } for f in fund_perf_list)
    print('Archived.')

def list_fund_performance_archive(archive_name):
    perf_db = TinyDB('data/'+archive_name+'.json')    
    fund_table = perf_db.table('fund')
    return fund_table.all()

#002906
fund_codes_list = get_all_fund_code()#['002906','002620','110022','000706','501021','002330']#
service = RangeService(fund_codes_list)
all_fund_perform_list = service.load_all_fund_perform_info()
archive_fund_performance('all_fund_perform_list_'+today_text, all_fund_perform_list)
#print(list_fund_performance_archive('all_fund_perform_list_'+today_text))
