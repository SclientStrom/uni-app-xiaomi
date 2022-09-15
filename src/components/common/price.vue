<template>
  <view class="flex main-text-color text-xl leading-none pt-1rpx">
    <text class="text-xs self-start mr-2rpx">¥</text>
    {{ props.price }}
  </view>
</template>
<script lang="ts" setup>
const props = defineProps<{ price: string | number }>();
</script>
