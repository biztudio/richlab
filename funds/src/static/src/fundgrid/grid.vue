<template>
    <div>
        <el-table
            :data="currentTableData"
            height="520"
            size='small'
            border
            stripe
            :default-sort = "{prop: 'name', order: 'ascending'}"
            style="width: 100%">
            <el-table-column
             type="index"
             width="50"
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
            <el-table-column
            prop="fee"
            sortable
            label="费率"
            width="100">
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

    export default Vue.extend({
        props: ['filter'],

        data() {
            return {
                fund_model:new GridModel(),
                tableData: new Array<Fund>(),
                currentPage:1,
                pageSize:50,
                pageSizeRange:[50, 100, 200, 300, 400, 1000]
            }
        },

        created:function(){
            this.tableData = this.fund_model.list_fund();       
        },

        watch:{
            filter:function(){
                this.tableData =  this.fund_model.filter_fund(this.filter);
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

