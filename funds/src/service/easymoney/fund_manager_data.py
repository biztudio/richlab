import urllib.request
from bs4 import BeautifulSoup

class ManagerOnFund():
    '''

    '''
    def __init__(self, name, fund_code, ref_link, growth_on_fund, begin_date_on_fund, end_date_on_fund):
        self.name = name
        self.ref_link = ref_link
        self.growth_on_fund = growth_on_fund
        self.begin_date_on_fund = begin_date_on_fund
        self.end_date_on_fund = end_date_on_fund if end_date_on_fund != '至今' else ''
        self.fund_code = fund_code
        self.code = ref_link.split('/')[-1][:-5]

class FundManagerService():
    '''
    基金经理的数据服务
    由于基金经理与基金的对应关系可能变动，所以这个数据需要定期同步并关联同步时间 
    指定基金与基金经理对应的举例 http://fund.eastmoney.com/f10/jjjl_110022.html

    具体基金经理的信息参考举例:  http://fund.eastmoney.com/manager/30283641.html
    '''
    def __init__(self, *args, **kwargs):
        #List some bad managers who are needed to be avoided.
        self.bad_managers = {'30334244'}#,'30357094'}
        pass

    def parse_manager_rowtag(self, managers_rowtag, fund_code):
        manager_inf_tags = managers_rowtag.find_all('td')
        managers_person_tags = manager_inf_tags[2].find_all('a')
        growth_on_fund = manager_inf_tags[4].text
        begin_date_on_fund = manager_inf_tags[0].text
        end_date_on_fund = manager_inf_tags[1].text
        managers_list_per_tag = []
        [managers_list_per_tag.append(ManagerOnFund(manager.text, fund_code, manager['href'], growth_on_fund, begin_date_on_fund, end_date_on_fund)) 
        for manager in managers_person_tags]
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
        managers_tag = managers_table.find_all('tr')
        managers_list = []
        tags = managers_tag[1:]
        if(tags):
            for manager_tag in tags:
                manager = self.parse_manager_rowtag(manager_tag, fund_code)
                #[print(m.fund_code, m.name,m.growth_on_fund,m.ref_link,m.begin_date_on_fund,m.end_date_on_fund) for m in manager]
                [managers_list.append(m) for m in manager]
        return managers_list
        #注意有很多基金有多个基金经理，所以关联基金列表应该有多个

if __name__ == '__main__':
    #fund_code = '110022'
    fund_code = '002229'
    service = FundManagerService()
    result = service.fetch_manager_info(fund_code)
    [print(m.fund_code, m.name,m.code,m.growth_on_fund,m.ref_link,m.begin_date_on_fund,m.end_date_on_fund) for m in result]

    '''
    from result_rawdata import ResultRawDataService
    fund_service = ResultRawDataService()
    fund_result = fund_service.fetch_archivedata(fund_code)
    [fund_service.print_rawdata_item(r) for r in fund_result]
    '''

