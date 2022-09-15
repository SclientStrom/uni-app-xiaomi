<template>
  <view class="flex flex-row flex-wrap items-center">
    <text-item
      v-for="(item, index) in textTabs"
      :key="index"
      :item="item"
      :defaultStyle="defaultStyle ?? false"
    ></text-item>
  </view>
</template>
<script lang="ts" setup>
import TextItem from "./textItem.vue";
defineProps<{ textTabs: { name: string }[]; defaultStyle?: true | false }>();
</script>
