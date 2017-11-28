<template>
    <div>
        <div class="greeting">基金列表</div>   
        
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="code"
            label="基金代码"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="基金名称"
            width="500">
            </el-table-column>
            <el-table-column
            prop="fee"
            label="费率">
            </el-table-column>
        </el-table>

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
                tableData: new Array<Fund>()
            }
        },

        created:function(){
            this.tableData = this.fund_model.list_fund();       
        }
        
    });

</script>

<style>
.greeting {
    font-size: 20px;
}
</style>