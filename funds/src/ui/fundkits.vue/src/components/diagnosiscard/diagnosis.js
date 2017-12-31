/*jshint esversion: 6 */
import {FundPerformModel,FundPerform} from '../../data/fund_perform_model.js';

export default{
    data(){
        return {
            _perform_list:[],
            fund_perform_result:{
                code:'',
                name:'',
                category:'',
                score:0,
                percent:'',
                suggestion:'',
                conclude:'',
                style:{
                    'good_fund_text':false,
                    'good_fund_img':false,
                    'bad_fund_text':false,
                    'bad_fund_img':false,
                    'need_observe_text':false,
                    'need_observe_img':false,
                    'empty_observe_text':false,
                    'empty_observe_img':false,
                }
            }
        };
    },

    props:[
        'fund_keyword'
    ],

    created:function(){
        let perform_query_service = new FundPerformModel();
        this._perform_list = perform_query_service.load_perform_list();
        this.fetch_Perform_info();
    },

    watch:{
        fund_keyword:function(){
            this.fetch_Perform_info();
        }
    },

    methods:{
        fetch_Perform_info:function(){
            let self = this;
            self.fund_perform_result.code = '';
            self.fund_perform_result.name = '';
            self.fund_perform_result.category = '';
            self.fund_perform_result.score = 0;
            self.fund_perform_result.percent = '';
            self.fund_perform_result.suggestion = '';
            self.fund_perform_result.conclude = '';            
            if(self.fund_keyword){
                if(self.fund_keyword == 123456){

                }
                else{

                    for(let fundperform of self._perform_list){
                        if(fundperform.code == self.fund_keyword){
                            self.fund_perform_result.code = fundperform.code;
                            self.fund_perform_result.name = fundperform.name;
                            self.fund_perform_result.category = fundperform.category;
                            self.fund_perform_result.score = fundperform.score;
                            self.fund_perform_result.percent = fundperform.percent;
                            self.fund_perform_result.suggestion = fundperform.suggestion;
                            self.fund_perform_result.conclude = fundperform.conclude;

                            self.fund_perform_result.style.good_fund_text = (fundperform.suggestion == '建议增持'|| fundperform.suggestion == '建议买入');
                            self.fund_perform_result.style.good_fund_img = self.fund_perform_result.style.good_fund_text;
                            self.fund_perform_result.style.bad_fund_text = (fundperform.suggestion == '建议减持');
                            self.fund_perform_result.style.bad_fund_img = self.fund_perform_result.style.bad_fund_text;
                            self.fund_perform_result.style.need_observe_text = (fundperform.suggestion == '建议观望');
                            self.fund_perform_result.style.need_observe_img = self.fund_perform_result.style.need_observe_text;
                            self.fund_perform_result.style.empty_observe_text = (fundperform.suggestion == '' || fundperform.suggestion == null);
                            self.fund_perform_result.style.empty_observe_img = self.fund_perform_result.style.empty_observe_text;
                            break;
                        }
                    }

                    /*
                    let url = self.service_base_url+"fund_perform/"+self.fund_keyword;
                    console.log(url);
                    self.$http.get(url)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        if(response && response.data){
                            self.fund_perform_result.code = response.data.code;
                            self.fund_perform_result.name = response.data.name;
                            self.fund_perform_result.category = response.data.category;
                            self.fund_perform_result.score = response.data.score;
                            self.fund_perform_result.percent = response.data.percent;
                            self.fund_perform_result.suggestion = response.data.suggestion;
                            self.fund_perform_result.conclude = response.data.conclude;

                            self.fund_perform_result.style.good_fund_text = (response.data.suggestion == '建议增持'|| response.data.suggestion == '建议买入');
                            self.fund_perform_result.style.good_fund_img = self.fund_perform_result.style.good_fund_text;
                            self.fund_perform_result.style.bad_fund_text = (response.data.suggestion == '建议减持');
                            self.fund_perform_result.style.bad_fund_img = self.fund_perform_result.style.bad_fund_text;
                            self.fund_perform_result.style.need_observe_text = (response.data.suggestion == '建议观望');
                            self.fund_perform_result.style.need_observe_img = self.fund_perform_result.style.need_observe_text;
                            self.fund_perform_result.style.empty_observe_text = (response.data.suggestion == '' || response.data.suggestion == null);
                            self.fund_perform_result.style.empty_observe_img = self.fund_perform_result.style.empty_observe_text;
                        }
                    })
                    .catch(e => {
                        console.log(e);
                        self.fund_perform_result.score = 0;
                    });
                    */
                }
            }
            //console.log(self.fund_perform_result);
        }
    }
}