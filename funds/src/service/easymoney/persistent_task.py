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
        print(rd.category, rd.growth)
        #archive_table.insert({
         #   rd.
        #})

if __name__ == '__main__':
    rdaq = Query()
    [save_archive_data(f['code']) for f in fund_table.search(rdaq.code == '161726')]

