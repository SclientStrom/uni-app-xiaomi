<template>
  <head-search :disabled="false" :search="true" />
  <card card-title="热门搜索" card-img-url="/static/images/demo/search-banner.png" />
  <text-tab :text-tabs="hotSearch"></text-tab>
  <card card-title="常用分类">
    <text-tab :text-tabs="classifyProps" :default-style="true"></text-tab>
  </card>
  <divider />
  <card card-title="搜索记录">
    <text
      class="block pl-30rpx py-10rpx text-28rpx border-solid border-2rpx border-transparent border-t-gray-100"
      v-for="(item, index) in searchHistory"
      :key="index"
      >{{ item.name }}</text
    >
  </card>
</template>
<script lang="ts" setup>
import HeadSearch from "@/components/common/headSearch.vue";
import Card from "@/components/card/index.vue";
import TextTab from "@/components/textTab/index.vue";
import Divider from "@/components/divider/index.vue";
const searchHistory = [{ name: "手机" }, { name: "台灯" }, { name: "电话卡" }];
const hotSearch = [
  { name: "领券中心" },
  { name: "RedMi K20" },
  { name: "RedMiBook 14" },
  { name: "智能积木 越野四驱车" },
  { name: "手环 腕带" },
  { name: "台灯" },
  { name: "电话卡" },
];
const classifyProps = [
  { name: "耳机" },
  { name: "手机" },
  { name: "音响" },
  { name: "手表" },
  { name: "配件" },
  { name: "网关/传感器" },
  { name: "健康" },
  { name: "酷玩" },
];
</script>
