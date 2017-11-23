import pandas
from tinydb import TinyDB
db = TinyDB('./fundlist_db.json')
fund_table = db.table('fund')

#throw away data
#db.purge()

def insert_fund_to_listdb(raw_item):
    fee = '0'
    if(raw_item[-3]):
        fee = raw_item[-3]
    #print(raw_item[0] + ': ' + raw_item[1])
    fund_table.insert({'code':raw_item[0], 'name':raw_item[1], 'fee':fee})

data_raw=pandas.read_json('./eastmoney_fundbase_data.json',encoding="utf-8")['datas']
[insert_fund_to_listdb(f.split(',')) for f in data_raw]


