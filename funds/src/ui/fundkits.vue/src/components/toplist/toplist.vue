<template>
<div >
  <!--<div class="content-block-title">带箭头</div>-->
  <div class="list-block">
    <ul>
      <li class="item-content item-link" v-for='(fp, fpix) in _perform_list'>
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">{{fp.name}}</div>
          <div class="item-after">{{fp.score}}</div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script src='./toplist.js'></script>
