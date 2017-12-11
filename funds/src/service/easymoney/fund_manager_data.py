import urllib.request
from bs4 import BeautifulSoup

class FundManager():
    '''

    '''
    def __init__(self, name, company):
        pass

class FundManagerService():
    '''
    基金经理的数据服务
    由于基金经理与基金的对应关系可能变动，所以这个数据需要定期同步并关联同步时间 
    '''
    def __init__(self, *args, **kwargs):
        pass

    def fetch_manager_info(self, fund_code):
        '''
        根据基金代码找出该基金对应的过往基金经理及他们管理的基金
        '''
        pass    
