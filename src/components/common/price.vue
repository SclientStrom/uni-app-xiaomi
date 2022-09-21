<template>
  <view class="flex main-text-color text-35rpx leading-none pt-1rpx">
    <text class="text-20rpx self-start mr-2rpx">¥</text>
    {{ props.price }}
  </view>
</template>
<script lang="ts" setup>
const props = defineProps<{ price: string | number }>();
</script>
