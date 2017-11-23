import urllib.request

file=urllib.request.urlopen('http://fund.eastmoney.com/data/fundranking.html#tall;c0;r;szzf;pn10000;ddesc;qsd20161123;qed20171123;qdii;zq;gg;gzbd;gzfs;bbzt;sfbb')
data=file.read()

#print(data)
fhandle=open('./p.txt', 'wb')
fhandle.write(data)
fhandle.close()

#函数直接将对应信息写入本地文件，
urllib.request.urlcleanup()
filename= urllib.request.urlretrieve(" http://edu.51cto.com", filename="./2.html")

'''
有的时候， 我们无法爬取一些 网页， 会出现403 错误， 因为这些网页为了别人恶意采集其信息所以进行了一些反爬虫的设置。
这时需要设置Headers信息来模拟浏览器去访问网页。 
'''