<template>
    <div>
        <div class="greeting">基金列表</div>   
         <el-button>查询</el-button>
    </div>
</template>

<script lang="ts">

    import Vue from "vue";
    import { Button } from 'element-ui';
    import GridModel from './grid_model';
    Vue.use(Button);

    export default Vue.extend({
        props: ['name'],

        data() {
            return {
                fund_model:new GridModel()
            }
        },

        created:function(){
            this.fund_model.list_fund();            
        }
        
    });

</script>

<style>
.greeting {
    font-size: 20px;
}
</style>