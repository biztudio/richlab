Richlab 基金板块
---

通过抓取分析基金业绩数据辅助对基金的选择投资

指标：
* 6个月排行
* 1年排行
* 3年排行
* 5年排行
* 重仓股分析
* 星级( 1年 / 3年 / 5年 )

通过看基金各个阶段性涨幅及排名，同时对应到基金经理看看有没有变动

Tech 栈

* Flask 界面
* Flask Blueprint进行模块管理
* 后端数据库使用备选 Postgresql | TinyDB | SQLite
* Python 数据抓取库 (爬虫)
* Python 数据分析库
* Power BI (Desktop)
* 前端 Vue + elememt-ui stack + Bootstrap
* 基于 pyecharts 的数据可视化图表


数据爬取目标网站:
* [东方财富-天天基金](http://fund.eastmoney.com/data/fundranking.html#tall;c0;r;szzf;pn10000;ddesc;qsd20161123;qed20171123;qdii;zq;gg;gzbd;gzfs;bbzt;sfbb)
* [通过浏览器调试得到东方财富的数据](http://fund.eastmoney.com/data/rankhandler.aspx?op=ph&dt=kf&ft=all&rs=&gs=0&sc=zzf&st=desc&sd=2016-11-23&ed=2017-11-23&qdii=&tabSubtype=,,,,,&pi=1&pn=10000&dx=1&v=0.35518329794488435)
* [同花顺基金数据举例: 华宝兴业服务](http://fund.10jqka.com.cn/000124/)
* [和讯基金](http://funds.hexun.com/index.html)
* [晨星基金](http://cn.morningstar.com/fundtools/fundranking/default.aspx)

API 数据来源：
* [聚合数据](https://www.juhe.cn/docs/index/extid/13)
* [聚宽数据](https://www.joinquant.com/help/data/fund)


[排名数据参考举例1: 招商白酒指数](http://fund.eastmoney.com/f10/jdzf_161725.html)
[排名数据接口举例1: 招商白酒指数](http://fund.eastmoney.com/f10/FundArchivesDatas.aspx?type=jdzf&code=161725&rt=0.5686106265556327)

东方财富的数据前端调用参考:

```javascript
var defaults = { src: "rankhandler.aspx", op: "ph", dt: "kf", ft: "all", rs: "", gs: "0", sd: document.getElementById("sDate").value, ed: document.getElementById("eDate").value, sc: "zzf", st: "desc", pi: 1, pn: 50, scc: "zzf", qdii: "", dx: "1", zq: "", gg: "", gzbd: "", gzfs: "", bbzt: "", sfbb: "" };
```

接口举例(含日期):

* [股票](http://fund.eastmoney.com/data/rankhandler.aspx?op=ph&dt=kf&ft=gp&rs=&gs=0&sc=1nzf&st=desc&sd=2016-12-01&ed=2017-12-01&qdii=&tabSubtype=,,,,,&pi=1&pn=10000&dx=1&v=0.5307475721848409)
* [混合](http://fund.eastmoney.com/data/rankhandler.aspx?op=ph&dt=kf&ft=hh&rs=&gs=0&sc=1nzf&st=desc&sd=2016-12-01&ed=2017-12-01&qdii=&tabSubtype=,,,,,&pi=1&pn=10000&dx=1&v=0.09760755253371622)
* [债券](http://fund.eastmoney.com/data/rankhandler.aspx?op=ph&dt=kf&ft=zq&rs=&gs=0&sc=1nzf&st=desc&sd=2016-12-01&ed=2017-12-01&qdii=|&tabSubtype=,,,,,&pi=1&pn=10000&dx=1&v=0.37294940755246886)
* [指数](http://fund.eastmoney.com/data/rankhandler.aspx?op=ph&dt=kf&ft=zs&rs=&gs=0&sc=1nzf&st=desc&sd=2016-12-01&ed=2017-12-01&qdii=|&tabSubtype=,,,,,&pi=1&pn=10000&dx=1&v=0.7946668558692445)
* [QDII](http://fund.eastmoney.com/data/rankhandler.aspx?op=ph&dt=kf&ft=qdii&rs=&gs=0&sc=1nzf&st=desc&sd=2016-12-01&ed=2017-12-01&qdii=&tabSubtype=,,,,,&pi=1&pn=10000&dx=1&v=0.04531257243784825)
