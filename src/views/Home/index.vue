<script setup>
import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeNew from "@/views/Home/components/HomeNew.vue";
import HomeHot from "@/views/Home/components/HomeHot.vue";
import HomeProduct from "@/views/Home/components/HomeProduct.vue";
import HomePanel from "@/views/Home/components/HomePanel.vue";
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();
onMounted(() => {
  return categoryStore.getCategory();
});
</script>
<template>
  <div class="container">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>
  <HomeNew></HomeNew>
  <HomeHot></HomeHot>
  <HomeProduct></HomeProduct>
  <!-- 测试 -->
  <HomePanel title="新鲜好物" sub-title="新鲜好物 好多商品">
    <div>我是插槽1</div>
  </HomePanel>
  <HomePanel title="人气推荐" sub-title="人气推荐 好多商品">
    <div>我是插槽2</div>
  </HomePanel>
</template>
