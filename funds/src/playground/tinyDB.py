from tinydb import TinyDB, Query

db = TinyDB('./fundlist_db.json')
fund_table = db.table('fund')

idr = Query()
print(fund_table.count(idr.code > '000000'))