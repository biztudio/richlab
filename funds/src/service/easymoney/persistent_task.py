from tinydb import TinyDB, Query
from result_rawdata import ResultRawDataModel, ResultRawDataService
from datetime import date
format = '%Y%m%d'

db = TinyDB('./fundlist_db.json')
fund_table = db.table('fund')
db_archive = TinyDB('./archive_db_'+ date.today().strftime(format) +'.json')
archive_table = db_archive.table('archive')
db_archive.purge_tables()

rd_service = ResultRawDataService()

def save_archive_data(code):
    rd_list = rd_service.fetch_archivedata(code)
    for rd in rd_list:
        #print(rd.category, rd.growth, rd.ref_avg_growth, rd.ref_HS300_growth, rd.current_range, rd.range_update, rd.four_division_grange)
        archive_table.insert({
           'code':code,
           'category': rd.category, 
           'growth':rd.growth, 
           'ref_avg_growth':rd.ref_avg_growth, 
           'ref_HS300_growth':rd.ref_HS300_growth, 
           'current_range':rd.current_range, 
           'range_update':rd.range_update, 
           'four_division_grange':rd.four_division_grange
        })

if __name__ == '__main__':
    rdaq = Query()
    [save_archive_data(f['code']) for f in fund_table.search(rdaq.code == '161726')]
    print('done')
    print(archive_table.all())

