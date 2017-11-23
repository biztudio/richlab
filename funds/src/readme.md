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

Tech 栈

* Flask 界面
* Flask Blueprint进行模块管理
* 后端数据库使用备选 Postgresql | TinyDB | SQLite
* Python 数据抓取库 (爬虫)
* Python 数据分析库
* Power BI (Desktop)
* 前端 Vue + iView + Bootstrap
* 基于 pyecharts 的数据可视化图表


数据爬取目标网站:
* [东方财富-天天基金](http://fund.eastmoney.com/data/fundranking.html#tall;c0;r;szzf;pn10000;ddesc;qsd20161123;qed20171123;qdii;zq;gg;gzbd;gzfs;bbzt;sfbb)
* [和讯基金](http://funds.hexun.com/index.html)
* [晨星基金](http://cn.morningstar.com/fundtools/fundranking/default.aspx)

API 数据来源：
* [聚合数据](https://www.juhe.cn/docs/index/extid/13)
* [聚宽数据](https://www.joinquant.com/help/data/fund)
