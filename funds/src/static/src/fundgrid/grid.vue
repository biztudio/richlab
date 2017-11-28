<template>
    <div>
        <div class="greeting">基金列表</div>   
        
        <el-table
            :data="currentTableData"
            height="600"
            size='small'
            border='true'
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
            label="基金代码"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            sortable
            label="基金名称"
            width="500">
            </el-table-column>
            <el-table-column
            prop="fee"
            sortable
            label="费率">
            </el-table-column>
        </el-table>

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[50, 100, 200, 300, 400, 1000]"
            :page-size="50"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total_count">
        </el-pagination>

    </div>
</template>

<script lang="ts">

    import Vue from "vue";   
    import { Fund, GridModel } from './grid_model';

    export default Vue.extend({
        props: ['name'],

        data() {
            return {
                fund_model:new GridModel(),
                tableData: new Array<Fund>(),
                currentPage:1,
                pageSize:50
            }
        },

        created:function(){
            this.tableData = this.fund_model.list_fund();       
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
                return index + 1;//demo
            },

            show_current_page(pageIndex:number):Array<Fund>{
                return this.tableData.slice((this.currentPage - 1)*this.pageSize, this.currentPage*this.pageSize);
            },

            handleSizeChange(val:number) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val;
            },
            handleCurrentChange(val:number) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
            }
        }
        
    });

</script>

<style>
.greeting {
    font-size: 20px;
}
</style>