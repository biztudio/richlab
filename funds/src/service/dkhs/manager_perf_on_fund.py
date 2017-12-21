'''

REF Link Example:
https://www.dkhs.com/symbols/funds/diagnosis/detail/FP260112/
'''
import urllib.request
from bs4 import BeautifulSoup

class ManagerPerformance(object):
    '''
    '''
    def __init__(self, fund_code, score, score_percent, suggestion, conclude_statement, fund_name, category_text):
        self.fund_code = fund_code
        self.score = score
        self.score_percent = score_percent
        self.suggestion = suggestion
        self.conclude_statement = conclude_statement
        self.fund_name = fund_name
        self.category_text = category_text

    def __repr__(self): 
        return repr((self.fund_code, self.fund_name, self.category_text, self.score, self.score_percent, self.suggestion, self.conclude_statement)) 

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
        score = 0
        score_percent = '0'
        conclude_statement = ''
        category_text = ''
        fund_name = ''
        suggestion = ''
        if(lines):
            for line in lines :
                document = document + line.decode('utf-8')
        if(document):
            soup = BeautifulSoup(document, "html.parser")           
            score_tag_beginning = soup.find('div',text='综合评分')#有的扩展属性不能直接用于搜索
            if(score_tag_beginning):
                score_tag = score_tag_beginning.find_next('span')                
                if(score_tag):
                    if(score_tag.text != '' and score_tag.text != '--'):
                        score = int(score_tag.text)
                    score_percent_tag = score_tag.find_next('div').find('span')
                    if(score_percent_tag):
                        score_percent = score_percent_tag.text
            ref_tag = soup.find('div', class_='hint', text='操作建议')
            if(ref_tag):
                suggestion_tag = ref_tag.find_previous('div').find('span')
                if(suggestion_tag):
                    suggestion = suggestion_tag.text     
            ref_tag = soup.find('span', class_='text-ml', text='诊断综述')                           
            if(ref_tag):
                conclude_tag = ref_tag.find_next('div')
                if(conclude_tag):
                    conclude_statement = conclude_tag.text.strip()
            title_tag = soup.find('div', class_='panel-heading')
            if(title_tag):
                name_tag = title_tag.find('strong', class_='text-xg')
                if(name_tag):
                    fund_name = name_tag.text
                category_tag = title_tag.find('span', class_="badge badge-light")
                if(category_tag):
                    '''
                    混合型 股票型 指数型 债券型 货币型 QDII
                    '''
                    category_text = category_tag.text
        performance = ManagerPerformance(fund_code, score, score_percent, suggestion, conclude_statement, fund_name, category_text)
        print(fund_code,' done')
        return performance


if __name__ == '__main__':
    fund_code = '260112'
    service = ManagerPerformanceService()
    performance = service.get_performance_on_fund(fund_code)
    print(performance)