<template>
   <nav class="bar bar-tab">
        <a  v-for='(bi, bix) in bar_items' class="tab-item" href="#">
            <span class="icon" v-bind:class="bi.icon_style"></span>
            <span class="tab-label">{{bi.name}}</span>
            <span class="badge" v-if="bi.badge > 0">{{bi.badge}}</span>
        </a>
    </nav>
</template>
<script src='./toolbar.js'>
</script>
<!-- refer example: -->
<!--
 <a class="tab-item external active" href="#">
            <span class="icon icon-home"></span>
            <span class="tab-label">文案</span>
        </a>
        <a class="tab-item external" href="#">
            <span class="icon icon-me"></span>
            <span class="tab-label">文案</span>
            <span class="badge">2</span>
        </a>
        <a class="tab-item external" href="#">
            <span class="icon icon-star"></span>
            <span class="tab-label">文案</span>
        </a>
        <a class="tab-item external" href="#">
            <span class="icon icon-cart"></span>
            <span class="tab-label">文案</span>
        </a>
        <a class="tab-item external" href="#">
            <span class="icon icon-settings"></span>
            <span class="tab-label">文案</span>
        </a>
-->
