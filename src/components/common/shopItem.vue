<template>
  <view class="w-48vw flex-col">
    <view>
      <image :src="props.item.src" class="w-48vw h-456rpx rounded-xl"></image>
    </view>
    <view class="mt-4rpx ml-20rpx mb-8rpx">
      <view class="text-xl">{{ props.item.name }}</view>
      <view class="text-gray-400 text-base">{{ props.item.shortDesc }}</view>
      <view class="flex flex-row">
        <price :price="props.item.salePrice"></price>
        <view class="flex text-sm line-through items-end ml-1">¥{{ props.item.oriPrice }}</view>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import Price from "@/components/common/price.vue";
import { ShopItemProps } from "../props";
const props = defineProps<{ item: ShopItemProps }>();
</script>
