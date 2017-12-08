import urllib.request
import json
from bs4 import BeautifulSoup, CData

page = urllib.request.urlopen("http://fund.eastmoney.com/f10/FundArchivesDatas.aspx?type=jdzf&code=161725&rt=0.5686106265556327")
lines = page.readlines()
page.close()

document = ""
for line in lines :
    document = document + line.decode('utf-8')

contentjson = document.replace('var apidata=','').replace('};','}').replace('content:','"content":')
acdata =  json.loads(contentjson)['content']
#print(acdata)

soup = BeautifulSoup(acdata, "html.parser")#, "lxml"
uls_array = soup.find_all('ul')[1:]
dataul = []
[dataul.append(d) for d in uls_array]

'''
四分位排名
四分位排名是将同类基金按涨幅大小顺序排列，然后分为四等分，每个部分大约包含四分之一即25%的基金，基金按相对排名的位置高低分为：优秀、良好、一般、不佳
'''
class Result():
    def __init__(self, category, growth, ref_avg_growth, ref_HS300_growth, range, range_updage, four_division_grange):
        self.category = category
        self.growth = growth
        self.ref_avg_growth = ref_avg_growth
        self.ref_HS300_growth = ref_HS300_growth
        self.range = range
        self.range_updage = range_updage
        self.four_division_grange = four_division_grange
        