#from range_service import RangeService, RangeResult
from application.range_service import RangeService
from dkhs.manager_perf_on_fund import ManagerPerformance, ManagerPerformanceService

from tinydb import TinyDB
from datetime import date

today_text = '20171222'#date.today().strftime('%Y%m%d')

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

def archive_fund_category_performance(archive_name, fund_perf_list):
    print('Archiving to data/'+archive_name+'.json...')
    perf_db = TinyDB('data/'+archive_name+'.json')
    perf_fund_table = perf_db.table('fund')
    perf_db.purge_table('fund')
    perf_fund_table.insert_multiple({
        'code':f['code'], 'name':f['name'], 'category':f['category'],
        'score':f['score'], 'percent':f['percent'], 
        'suggestion':f['suggestion'], 'conclude':f['conclude']
    } for f in fund_perf_list)
    print('Archived.')    

def list_fund_performance_archive(archive_name):
    perf_db = TinyDB('data/'+archive_name+'.json')    
    fund_table = perf_db.table('fund')
    return fund_table.all()

def load_all_fund_perform_info(fund_codes_list):
    '''
    download all the performance data from web
    '''
    fund_performance_list = []
    mp_service = ManagerPerformanceService()
    if(len(fund_codes_list) > 0):
        print('loading funds...')
        fund_performance_list = list(filter(lambda f:f.score > 0, [mp_service.get_performance_on_fund(f) for f in fund_codes_list]))
        print('funds loaded')
    return fund_performance_list

def save_archive_performance_all(performance_list):
    import pyodbc
    cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=.\\dblab;DATABASE=richlab;UID=richuser;PWD=1')
    cursor = cnxn.cursor()
    archive_date = '2017-12-22'#date.today().strftime('%Y-%m-%d')
    for p in performance_list:
        cursor.execute("insert into dkhs_fund_performance ([code],[archive_date],[score],[score_percent],[suggestion],[conclude],[category]) values (?,?,?,?,?,?,?)",
        p.code, today_text, p.score, p.percent, p.suggestion, p.conclude, p.category)
    cnxn.commit()    

#002906
fund_codes_list = get_all_fund_code()#['002906','002620','110022','000706','501021','002330']#
service = RangeService(fund_codes_list)
#all_fund_perform_list = load_all_fund_perform_info(fund_codes_list)
#archive_fund_performance('all_fund_perform_list_'+today_text, all_fund_perform_list)
service.fund_performance_list = list_fund_performance_archive('all_fund_perform_list_'+today_text)
'''
best_top500_index_funds = service.find_best_top500_funds(['指数型'])
archive_fund_category_performance('best_top500_index_funds_'+today_text, best_top500_index_funds)

best_top500_money_funds = service.find_best_top500_funds(['货币型'])
archive_fund_category_performance('best_top500_money_funds_'+today_text, best_top500_money_funds)

best_top500_bond_funds = service.find_best_top500_funds(['债券型'])
archive_fund_category_performance('best_top500_bond_funds_'+today_text, best_top500_bond_funds)

best_top500_allstock_funds = service.find_best_top500_funds(['混合型','股票型','指数型'])
archive_fund_category_performance('best_top500_allstock_funds_'+today_text, best_top500_allstock_funds)

best_top500_qdii_funds = service.find_best_top500_funds(['QDII'])
archive_fund_category_performance('best_top500_qdii_funds_'+today_text, best_top500_qdii_funds)

b500_allstock_funds = list_fund_performance_archive('best_top500_allstock_funds_'+today_text)
print(b500_allstock_funds)

b500_index_funds = list_fund_performance_archive('best_top500_index_funds_'+today_text)
print(b500_index_funds)

best_top500_allstock_excl_index_funds = service.find_best_top500_funds(['混合型','股票型'])
archive_fund_category_performance('best_top500_allstock_excl_index_funds_'+today_text, best_top500_allstock_excl_index_funds)
print(list_fund_performance_archive('best_top500_allstock_excl_index_funds_'+today_text))

b500_qdii_funds = list_fund_performance_archive('best_top500_qdii_funds_'+today_text)
print(b500_qdii_funds)

good_funds_score_sort_list_allstock = service.find_good_funds_score_sort(['混合型','股票型','指数型'])
archive_fund_category_performance('good_funds_score_sort_list_allstock_' + today_text + '.json', good_funds_score_sort_list_allstock)

good_funds_score_sort_list_exc_index = service.find_good_funds_score_sort(['混合型','股票型','指数型'])
archive_fund_category_performance('good_funds_score_sort_list_exc_index_' + today_text + '.json', good_funds_score_sort_list_exc_index)

print(good_funds_score_sort_list_allstock)
#print(good_funds_score_sort_list_exc_index)

good_funds_score_sort_list_hybrid = service.find_good_funds_score_sort(['混合型'])
#archive_fund_category_performance('good_funds_score_sort_list_hybrid_'+today_text+'.json', good_funds_score_sort_list_hybrid)

good_funds_score_sort_list_equity = service.find_good_funds_score_sort(['股票型'])
#archive_fund_category_performance('good_funds_score_sort_list_equity_'+today_text+'.json', good_funds_score_sort_list_equity)

good_funds_score_sort_list_index = service.find_good_funds_score_sort(['指数型'])
#archive_fund_category_performance('good_funds_score_sort_list_index_'+today_text+'.json', good_funds_score_sort_list_index)

good_funds_score_sort_list_bond = service.find_good_funds_score_sort(['债券型'])
#archive_fund_category_performance('good_funds_score_sort_list_bond_'+today_text+'.json', good_funds_score_sort_list_bond)

print(good_funds_score_sort_list_bond)
'''

