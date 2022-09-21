<template>
  <view class="flex flex-row flex-wrap h-100rpx w-full items-center justify-center">
    <view
      class="flex-1 flex flex-row items-center justify-center"
      v-for="(item, index) in screen.sortTypes"
      :key="index"
      @tap="screenChange(index)"
    >
      <text :class="item.status === 1 ? 'main-text-color' : 'text-gray-600'">{{ item.name }}</text>
      <view class="leading-15rpx pl-5rpx" v-if="isNumber(item.status)">
        <view
          class="iconfont icon-xiangshang"
          :class="item.status === 1 ? 'main-text-color' : 'text-gray-400'"
          style="font-size: 28rpx"
        ></view>
        <view
          class="iconfont icon-xiangxia"
          :class="item.status === 2 ? 'main-text-color' : 'text-gray-400'"
          style="font-size: 28rpx"
        ></view>
      </view>
    </view>
    <slot></slot>
  </view>
</template>
<script lang="ts" setup>
import { ScreenProps } from "../props";
const props = defineProps<{ screen: ScreenProps }>();
const isNumber = (status: number | undefined) => {
  return typeof status === "number" && status >= 0;
};

const screenChange = (index: number) => {
  const currentIndex = props.screen.currentIndex ?? 0;
  const oldItem = props.screen.sortTypes[currentIndex];
  const newItem = props.screen.sortTypes[index];
  if (currentIndex === index) {
    oldItem.status = oldItem.status == 1 ? 2 : 1;
  } else {
    oldItem.status = 0;
    newItem.status = 1;
    props.screen.currentIndex = index;
  }
};
</script>
<style></style>
