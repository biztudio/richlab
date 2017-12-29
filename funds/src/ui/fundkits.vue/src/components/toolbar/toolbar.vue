<template>
<!--<id :id='toolbar_id'>-->
  
   <nav class="bar bar-tab">
        <a v-for='(bi, bix) in bar_items' class="tab-item " v-bind:class="bi.active_style" v-bind:href="bi.link">
            <span class="icon" v-bind:class="bi.icon_style"></span>
            <span class="tab-label">{{bi.name}}</span>
            <span class="badge" v-if="bi.badge > 0">{{bi.badge}}</span>
        </a>
    </nav>
    <div style="display:none">{{toolbar_id}}.{{item_index}}</div>
    
<!--</id>-->    
</template>
<script src='./toolbar.js'></script>
