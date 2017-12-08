import urllib.request
import json
from bs4 import BeautifulSoup

page = urllib.request.urlopen("http://fund.eastmoney.com/f10/FundArchivesDatas.aspx?type=jdzf&code=161725&rt=0.5686106265556327")
lines = page.readlines()
page.close()

document = ""
for line in lines :
    document = document + line.decode('utf-8')

contentjson = document.replace('var apidata=','').replace('};','}').replace('content:','"content":')
acdata =  json.loads(contentjson)['content']
#print(acdata)

soup = BeautifulSoup(acdata, "lxml")
#print(soup.prettify())
print(soup.body.children)
dataul = []
[dataul.append(d) for d in soup.ul]# if d['class'] != 'fcol']

print(dataul)