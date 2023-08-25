<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import LayouFixed from "@/views/Layout/components/LayoutFixed.vue";
</script>

<template>
  <LayouFixed></LayouFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <!-- 二级路由出口 -->
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>
