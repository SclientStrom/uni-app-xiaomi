<template>
  <view class="flex justify-between m-0 p-0" style="height: 530rpx">
    <view>
      <image :src="props.homeAdv.left.src" class="w-374rpx h-530rpx rounded-lg"></image>
    </view>
    <view class="flex flex-col justify-between" style="height: 530rpx">
      <image
        class="w-372rpx h-264rpx rounded-lg"
        :src="item.src"
        v-for="(item, index) in props.homeAdv.right"
        :key="index"
      ></image>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { HomeAdv } from "../props";

const props = defineProps<{ homeAdv: HomeAdv }>();
</script>
