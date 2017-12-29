<template>
 <div>

  <div class="content-block-title">诊断报告</div>
  <div class="card demo-card-header-pic">
   <!--
    <div style='position:relative; left:50%;top:10px;' class="card-header color-white no-border no-padding">
      <img class='facebook-avatar' src="./smiley/case_good.png" alt="">
     </div>
   -->
    <div class="card-content">
      <div class="card-content-inner">
        <p class="color-gray">{{fund_perform_result.name}}</p>
        <p class="color-gray">{{fund_perform_result.code}} - {{fund_perform_result.category}}</p>
        <p v-bind:class='fund_perform_result.style'>{{fund_perform_result.suggestion}}</p>
        <p v-bind:class='fund_perform_result.style'>业绩好于 {{fund_perform_result.percent}} 同类基金, 综合得分: {{fund_perform_result.score}}</p>
        <p>{{fund_perform_result.conclude}}</p>
      </div>
    </div>
    <div class="card-footer">
      <a href="#myfund" class="link">加自选</a>
      <a href="#" class="link">业绩数据</a>
    </div>
  </div>

 </div>  

</template>
<script src='./diagnosis.js'></script>
<style>
.good_fund_text{
  color:red
}
.good_fund_img{

}

.bad_fund_text{
  color:green
}

.bad_fund_img{

}

.need_observe_text{
  color:blue
}

.need_observe_img{

}

.empty_observe_text{
  color:gray
}

.empty_observe_img{

}

</style>

