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
* [好买基金数据举例:景顺长城能源基建](https://www.howbuy.com/fund/260112/)
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


理论参考：
---
为什么要以基金经理为核心？

> 智能诊断不是通过基金经理在某一只基金上的表现对基金来打分，而是综合考虑了基金经理历史上管理的所有同类基金在他任内的表现后，对基金做出评价。
> 公募基金经理存在较高离职率，如果只是通过基金的历史业绩来判断基金优劣，一旦基金经理变更，虽然基金的历史业绩不变，但由于前后两位基金经理在管理能力，投资风格等方面可能存在诸多差异，基金的历史业绩就会失去参考价值。基于此，如果只看历史业绩，就容易被误导。
> 采用基金经理作为评分的核心，好处在于可以解决基金经理变更的问题，不管基金经理如何变更，诊断工具都只会追踪现任基金经理的能力表现。
