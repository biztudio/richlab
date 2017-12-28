import { fail } from "assert";

/*jshint esversion: 6 */
export default{
    data(){
        return {
            bar_items:[
                {'name':'基金诊断', 'link':'#diagnosis','badge':0,
                 'icon_style':{'icon-home':true},
                 'active_style':{'active':true}},
                {'name':'自选基金', 'link':'#myfund','badge':0,
                'icon_style':{'icon-cart':true},
                'active_style':{'active':false}},
                {'name':'业绩Top100', 'link':'#top100','badge':0,
                'icon_style':{'icon-star':true},
                'active_style':{'active':false}},
                {'name':'关于我', 'link':'#about','badge':0,
                'icon_style':{'icon-me':true},
                'active_style':{'active':false}}
            ]
        }
    }
}