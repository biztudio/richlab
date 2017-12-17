'''

REF Link Example:
https://www.dkhs.com/symbols/funds/diagnosis/detail/FP260112/
'''
import urllib.request
from bs4 import BeautifulSoup

class ManagerPerformance(object):
    '''
    '''
    def __init__(self, fund_code, score, score_percent, suggestion):
        self.fund_code = fund_code
        self.score = score
        self.score_percent = score_percent
        self.suggestion = suggestion


class ManagerPerformanceService(object):
    '''
    
    '''
    def __init__(self, *args, **kwargs):
        pass

    def get_performance_on_fund(self, fund_code):
        page = urllib.request.urlopen('https://www.dkhs.com/symbols/funds/diagnosis/detail/FP'+fund_code+'/')
        lines = page.readlines()
        page.close()
        document = ''
        for line in lines :
            document = document + line.decode('utf-8')
        soup = BeautifulSoup(document, "html.parser")
        score = 0
        score_percent = '0'
        score_tag_beginning = soup.find('div',text='综合评分')#有的扩展属性不能直接用于搜索
        if(score_tag_beginning):
            score_tag = score_tag_beginning.find_next('span')
            score_percent_tag = score_tag.find_next('div').find('span')
            score = score_tag.text
            score_percent = score_percent_tag.text
            print(score,': ',score_percent)
        suggestion = ''
        suggestion_tag = soup.find('div', class_='hint', text='操作建议').find_previous('div').find('span')
        if(suggestion_tag):
            suggestion = suggestion_tag.text
            print(suggestion)    

if __name__ == '__main__':
    fund_code = '260112'
    service = ManagerPerformanceService()
    service.get_performance_on_fund(fund_code)