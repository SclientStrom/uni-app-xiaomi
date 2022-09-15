<template>
  <view class="w-full flex flex-wrap text-center items-center justify-center mt-4 mb-6">
    <view class="w-19vw mt-1" v-for="(item, index) in props.classifyImg" :key="index">
      <view>
        <image :src="item.src" class="flex-1 w-10 h-10"></image>
      </view>
      <text class="flex-1">{{ item.classifyName }}</text>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { ClassifyProp } from "../props";
const props = defineProps<{ classifyImg: ClassifyProp[] }>();
</script>
