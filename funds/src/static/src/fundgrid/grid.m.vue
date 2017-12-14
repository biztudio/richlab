<template>
    <div id = 'fundlist_container' class="container_fl">
        <el-table
            v-loading="loading"
            element-loading-text="数据拼命加载中"
            element-loading-spinner="el-icon-loading"
            :data="currentTableData"
            height="520"
            size='big'
            border
            stripe
            :default-sort = "{prop: 'code', order: 'ascending'}"
            style="width:99%">

            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="fund-table-expand">
                        <el-form-item label="基金分析">
                            <!--<a v-bind:herf='props.row.diagnosis' target="blank">查看报告</a> -->
                            <el-button size="small" type="primary" @click='openpage(props.row.diagnosis)' >详细报告</el-button>
                        </el-form-item>     
                        <el-form-item label="基金详情">
                            <el-button size="small" type="primary" @click='openpage(props.row.detaillink)'>基金档案</el-button>
                        </el-form-item>  
                        <el-form-item label="基金经理">
                            <el-button size="small" type="primary" @click='openpage(props.row.managers)'>历任经理</el-button>
                        </el-form-item>                       
                                         
                    </el-form>
                </template>
            </el-table-column>

            <el-table-column
             type="index"
             width="80"
             :index="indexMethod">
            </el-table-column>
            <el-table-column
            prop="code"
            sortable
            label="代码"           
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            sortable
            label="名称">
            </el-table-column>           
        </el-table>

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="pageSizeRange"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total_count">
        </el-pagination>

    </div>
</template>

<script lang="ts">

    import Vue from "vue";   
    import { Fund, GridModel } from './grid_model';

    class FundExtendedInfo extends Fund{
        constructor(public code:string, public name:string, public fee:string, 
        public detaillink:string = '...', public diagnosis:string = '...', public managers:string = '...'){
            super(code, name, fee);
        }
    }

    export default Vue.extend({
        props: ['filter'],

        data() {
            return {
                fund_model:new GridModel(),
                tableData: new Array<FundExtendedInfo>(),
                currentPage:1,
                pageSize:50,
                pageSizeRange:[50, 100, 200, 300, 400, 1000],
                loading: true,
                loading_message: '数据拼命加载中'
            }
        },

        created:async function(){
            //this.tableData = await this.fund_model.list_fund();
            this.tableData = this.ExtendFundBasicList(await this.fund_model.list_fund());            
            this.loading = false;
        },

        watch:{
            filter:function(){
                this.tableData =  this.ExtendFundBasicList(this.fund_model.filter_fund(this.filter));                
                this.currentPage = 1;
            }
        },

        computed:{
            currentTableData(): Array<Fund>{
                return this.show_current_page(this.currentPage);
            },

            total_count():number{
                return this.tableData.length;
            }
        },

        methods:{
            ExtendFundBasicList(funds:Array<Fund>):Array<FundExtendedInfo>{
                let fundsExt = new Array<FundExtendedInfo>();
                for(let fund of funds){
                    let fundExt = new FundExtendedInfo(fund.code, fund.name, fund.fee);
                    fundExt.detaillink = 'http://fund.eastmoney.com/f10/jbgk_' + fund.code + '.html';
                    fundExt.diagnosis = 'https://www.dkhs.com/symbols/funds/diagnosis/detail/FP'+ fund.code +'/';
                    fundExt.managers = 'http://fund.eastmoney.com/f10/jjjl_'+fund.code+'.html'
                    fundsExt.push(fundExt);
                }
                return fundsExt;
            },

            openpage(url:string):void{
                window.open(url);
            },

            indexMethod(index:number):number {
                return index + 1 + (this.currentPage - 1)*this.pageSize;//demo
            },

            show_current_page(pageIndex:number):Array<Fund>{
                return this.tableData.slice((this.currentPage - 1)*this.pageSize, this.currentPage*this.pageSize);
            },

            handleSizeChange(val:number) {
                this.pageSize = val;
            },

            handleCurrentChange(val:number) {
                this.currentPage = val;
            }
        }
        
    });

</script>

 <style>
    .container_fl {
        height: 530px;
    }

     .fund-table-expand {
        font-size: 0;
    }
    .fund-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .fund-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>

