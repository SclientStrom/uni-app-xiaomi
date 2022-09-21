<template>
  <view
    v-for="(item, index) in shopList"
    :key="index"
    class="flex flex-row pt-25rpx border-solid border-transparent border-5rpx border-t-gray-100"
  >
    <image
      class="flex-1 px-20rpx pb-20rpx"
      src="../../static/images/demo/demo6.jpg"
      mode="widthFix"
    ></image>
    <view style="flex: 2" class="leading-50rpx flex flex-col">
      <view class="text-black text-35rpx font-medium leading-60rpx">{{ item.name }}</view>
      <text class="text-gray-400 mb-auto">{{ item.desc }}</text>
      <Price :price="item.price"></Price>
      <text class="text-gray-400">{{ item.comments }}条评论{{ item.percent }}满意</text>
    </view>
  </view>
</template>
<script lang="ts" setup>
import Price from "./price.vue";
defineProps<{ shopList: any[] }>();
</script>
<style></style>
