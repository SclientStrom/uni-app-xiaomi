<template>
  <view class="border-solid border-0 border-b-gray-100 border-b-6rpx">
    <view v-show="showTitle" class="p-3">
      <slot name="title">
        <text v-if="props.cardTitle"> {{ props.cardTitle }}</text>
      </slot>
    </view>
    <slot>
      <image v-if="props.cardImgUrl" :src="props.cardImgUrl" mode="widthFix"></image>
    </slot>
  </view>
</template>
<script lang="ts" setup>
import { computed } from "@vue/runtime-core";

const props = defineProps<{
  cardTitle?: string;
  cardImgUrl?: string;
  showTitle?: Boolean;
}>();
const showTitle = computed(() => props.showTitle ?? true);
</script>
