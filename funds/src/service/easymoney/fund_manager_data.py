import urllib.request
from bs4 import BeautifulSoup

class FundManager():
    '''

    '''
    def __init__(self, name, ref_link, managing_funds):
        pass

class FundManagerService():
    '''
    基金经理的数据服务
    由于基金经理与基金的对应关系可能变动，所以这个数据需要定期同步并关联同步时间 
    举例 http://fund.eastmoney.com/f10/jjjl_110022.html
    '''
    def __init__(self, *args, **kwargs):
        pass

    def fetch_manager_info(self, fund_code):
        '''
        根据基金代码找出该基金对应的过往基金经理及他们管理的基金
        '''
        page = urllib.request.urlopen('http://fund.eastmoney.com/f10/jjjl_'+ fund_code +'.html')
        lines = page.readlines()
        page.close()
        document = ''
        for line in lines :
            document = document + line.decode('utf-8')
        #print(document)    
        soup = BeautifulSoup(document, "html.parser")
        tables = soup.find_all('table', class_='w782 comm jloff')
        managers_table = tables[0]
        managers = [mr.find_all('td')[2].text for mr in managers_table.find_all('tr')[1:]]

        #注意有很多基金有多个基金经理，所以关联基金列表应该有多个
        #related_funds_to_current_manager = tables[1]
        print(managers)

if __name__ == '__main__':
    fund_code = '110022'
    service = FundManagerService()
    result = service.fetch_manager_info(fund_code)

