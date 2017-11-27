<template>
    <div>
        <div class="greeting">基金列表</div>
    </div>
</template>

<script lang="ts">

    import Vue from "vue";
    import GridModel from './grid_model';

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