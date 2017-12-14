from tinydb import TinyDB, Query
from result_rawdata import ResultRawDataModel, ResultRawDataService
from datetime import date
import pyodbc

format = '%Y%m%d'
db = TinyDB('./fundlist_db.json')
fund_table = db.table('fund')
db_archive = TinyDB('./archive_db_'+ date.today().strftime(format) +'.json')
archive_table = db_archive.table('archive')
db_archive.purge_tables()

rd_service = ResultRawDataService()

cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=.\\dblab;DATABASE=richlab;UID=richuser;PWD=1')

def save_archive_data(code):
    rd_list = rd_service.fetch_archivedata(code)
    cursor = cnxn.cursor()
    for rd in rd_list:
        cursor.execute("insert into em_archive_growth(code, archive_time,category,growth,ref_avg_growth,ref_HS300_growth,current_range,range_update,four_division_grange) values (?, ?, ?, ?, ?, ?, ?, ?, ?)", 
                        code, today_text,rd.category, rd.growth, rd.ref_avg_growth, rd.ref_HS300_growth, rd.current_range, rd.range_update, rd.four_division_grange)
        print(code, ' done')
    cnxn.commit()   


if __name__ == '__main__':
    
    today_text = date.today().strftime('%Y-%m-%d')
    
    '''
    # Create a cursor from the connection
    cursor = cnxn.cursor()
    deleted1 = cursor.execute("delete from em_archive_growth where archive_time = '" + today_text + "'").rowcount
    deleted2 = cursor.execute("delete from fund").rowcount
    cnxn.commit()
      
    rdaq = Query()
    [save_archive_data(f['code']) for f in fund_table.all()]#.search(rdaq.code == '161726')]#.all()]#
    print('all done')
    '''

    '''
    def save_fund(fund):
        code = fund['code']
        name = fund['name']
        fee = fund['fee']
        cursor = cnxn.cursor()
        cursor.execute("insert into fund(code, [name],[fee]) values (?, ?, ?)", code, name, fee)
        cnxn.commit()
        print(code, ' done')

    [save_fund(f) for f in fund_table.all()]
    '''
    
    #cursor.execute("select code from em_archive_growth")
    #row = cursor.fetchone()
    #print(row)

    from fund_manager_data import FundManagerService

    service = FundManagerService()
    
    def save_manager_on_fund(manager):
        cursor = cnxn.cursor()
        #cmd = "{call EM_Add_Manager_On_Fund('"+manager.fund_code+"', '"+manager.code+"',N'"+manager.name+"','"+manager.growth_on_fund+"','"+manager.begin_date_on_fund+"','"+manager.end_date_on_fund+"')}"
        cmd = "{call EM_Add_Manager_On_Fund(?,?,?,?,?,?)}"
        values = (manager.fund_code, manager.code, manager.name, manager.growth_on_fund, manager.begin_date_on_fund, manager.end_date_on_fund)
        cursor.execute(cmd,(values))

    def save_fund_related_managers(fund_code):
        manager = service.fetch_manager_info(fund_code)
        [save_manager_on_fund(m) for m in manager]
        print(fund_code,' done')

    rdaq = Query()
    #[save_fund_related_managers(f['code']) for f in fund_table.search(rdaq.code == '002229')] 
    [save_fund_related_managers(f['code']) for f in fund_table.all()] 
    cnxn.commit()
    print('done')
  
   
