import urllib.request
from bs4 import BeautifulSoup

class FundManager():
    '''

    '''
    def __init__(self, name, ref_link, growth_on_fund, managing_funds):
        self.name = name
        self.ref_link = ref_link
        self.growth_on_fund = growth_on_fund
        self.managing_funds = managing_funds

class FundManagerService():
    '''
    基金经理的数据服务
    由于基金经理与基金的对应关系可能变动，所以这个数据需要定期同步并关联同步时间 
    举例 http://fund.eastmoney.com/f10/jjjl_110022.html
    '''
    def __init__(self, *args, **kwargs):
        pass

    def parse_manager_rowtag(self, managers_rowtag):
        manager_inf_tags = managers_rowtag.find_all('td')
        managers_person_tags = manager_inf_tags[2].find_all('a')
        growth_on_fund = manager_inf_tags[4].text
        managers_list_per_tag = []
        [managers_list_per_tag.append(FundManager(manager.text, manager['href'], growth_on_fund, [1,2,3])) for manager in managers_person_tags]
        return managers_list_per_tag
        
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
        soup = BeautifulSoup(document, "html.parser")
        tables = soup.find_all('table', class_='w782 comm jloff')
        managers_table = tables[0]
        current_manager = self.parse_manager_rowtag(managers_table.find_all('tr')[1])
        #[print(m.name,m.growth_on_fund,m.ref_link) for m in current_manager]        
        
        #注意有很多基金有多个基金经理，所以关联基金列表应该有多个
        #related_funds_to_current_manager = tables[1]
        #print([m.name+'@'+m.ref_link for m in managers])

if __name__ == '__main__':
    fund_code = '110022'
    service = FundManagerService()
    result = service.fetch_manager_info(fund_code)

