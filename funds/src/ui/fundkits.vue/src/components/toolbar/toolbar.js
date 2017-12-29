/*jshint esversion: 6 */
export default{
    data(){
        return {
            bar_items:[
                {'name':'基金诊断', 'link':'#diagnosis','badge':0,
                 'icon_style':{'icon-home':true},
                 'active_style':{'active':true}},

                {'name':'业绩排行', 'link':'#top100','badge':0,
                'icon_style':{'icon-star':true},
                'active_style':{'active':false}},

                {'name':'自选基金', 'link':'#myfund','badge':0,
                'icon_style':{'icon-cart':true},
                'active_style':{'active':false}},

                {'name':'一看就懂', 'link':'#about','badge':0,
                'icon_style':{'icon-me':true},
                'active_style':{'active':false}}
            ]
        }
    }
}