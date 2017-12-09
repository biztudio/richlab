import urllib.request
import json
from bs4 import BeautifulSoup

class ResultRawDataModel():
    '''
    Model
    '''
    def __init__(self, category, growth, ref_avg_growth, ref_HS300_growth, current_range, range_update, four_division_grange):
        self.category = category
        self.growth = growth
        self.ref_avg_growth = ref_avg_growth
        self.ref_HS300_growth = ref_HS300_growth
        self.current_range = current_range
        self.range_update = range_update
        self.four_division_grange = four_division_grange

class ResultRawDataService():
    '''
    Service to fetch data and create model
    '''
    def __init__(self, *args, **kwargs):
        pass

    def parse_tagdata_to_rawdata(self, tag_bsobject):
        '''
        解析接口返回的标签数据，返回原数据列表
        '''
        if(tag_bsobject):
            li_array = tag_bsobject.find_all('li')
            category = li_array[0].text
            growth = li_array[1].text
            ref_avg_growth = li_array[2].text
            ref_HS300_growth = li_array[3].text
            current_range = li_array[4].text

            range_update_content = li_array[5]
            range_update_prefix = ''
            range_update_flag = range_update_content.find('font')
            if(range_update_flag['class'][0] == 'grn'):
                range_update_prefix = '-'
            range_update_content.font.extract()
            range_updage = range_update_prefix + range_update_content.text

            four_division_grange = '---'
            four_division_grange_content = li_array[6].find('p')
            if(four_division_grange_content):
                four_division_grange = four_division_grange_content.text

            rawdata = ResultRawDataModel(category, growth, ref_avg_growth, ref_HS300_growth, current_range, range_updage, four_division_grange)
            return rawdata
        else:
            return ResultRawDataModel('---', '---', '---', '---', '---', '---', '---')  

    def fetch_archivedata(self, code):
        '''
        fetch data via fund code from api at eastmoney site
        '''
        page = urllib.request.urlopen('http://fund.eastmoney.com/f10/FundArchivesDatas.aspx?type=jdzf&code='+code+'&rt=0.5686106265556327')
        lines = page.readlines()
        page.close()
        document = ''
        for line in lines :
            document = document + line.decode('utf-8')
        contentjson = document.replace
        contentjson = document.replace('var apidata=','').replace('};','}').replace('content:','"content":')
        acdata =  json.loads(contentjson)['content']
        soup = BeautifulSoup(acdata, "html.parser")#, "lxml"
        uls_array = soup.find_all('ul')[1:]
        return [(self.parse_tagdata_to_rawdata(d)) for d in uls_array]

    def print_rawdata_item(self, rawdata):
        print('',
        '类别：', rawdata.category, 
        ', 增幅：', rawdata.growth, 
        ', 同类平均增幅：', rawdata.ref_avg_growth, 
        ', 沪深300增幅：', rawdata.ref_HS300_growth, 
        ', 当前排名：', rawdata.current_range, 
        ', 排名变化：', rawdata.range_update, 
        ', 四分位排名：', rawdata.four_division_grange )

if __name__ == '__main__':
    code = '161725'
    service = ResultRawDataService()
    result = service.fetch_archivedata(code)
    [service.print_rawdata_item(r) for r in result]