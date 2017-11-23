from tinydb import TinyDB, Query

funds = TinyDB('./fundlist_db.json').table('fund')
#print(db.tables())

fund = Query()
print(funds.search(fund.code == '519743'))

