/*jshint esversion: 6 */
export default{
    props:[
        'toolbar_id',
        'item_index'
    ],

    created:function(){
        this.activate_item();
    },

    watch:{
        item_index:function(){
            this.activate_item();
        }
    },

    methods:{
        activate_item:function(){
            let self = this;
            let active_item_index = 1;
            if(self.item_index && self.bar_items.indexOf(self.item_index)){//self.item_index <= self.bar_items.length){
                active_item_index = self.item_index;
            }
            for(let i in self.bar_items){
                self.bar_items[i].active_style.active = (self.bar_items[i]._item_index == active_item_index);
            }
        }
    },

    data(){
        return {
            bar_items:[
                {'name':'基金诊断', 'link':'#diagnosis','badge':0, _item_index:1,
                 'description':'现场坐诊立等可取',
                 'icon_style':{'icon-star':true},
                 'active_style':{'active':false}},

                {'name':'业绩推选', 'link':'#top100','badge':0, _item_index:2,
                'description':'比业绩而知差距',
                'icon_style':{'icon-menu':true},
                'active_style':{'active':false}},
/*
                {'name':'自选基金', 'link':'#myfund','badge':10, _item_index:3,
                'description':'弱水三千只取几瓢',
                'icon_style':{'icon-cart':true},
                'active_style':{'active':false}},
*/
                {'name':'点点看呐', 'link':'#about','badge':0, _item_index:4,
                'description':'说说那些事儿',
                'icon_style':{'icon-me':true},
                'active_style':{'active':false}}
            ]
        }
    }
}