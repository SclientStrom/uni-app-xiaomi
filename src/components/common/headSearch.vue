<template>
  <view class="flex h-100rpx leading-100rpx items-center justify-center text-base">
    <view style="font-size: 50rpx; flex: 1.2"></view>
    <view style="flex: 16" class="flex-row flex items-center rounded h-70rpx bg-gray-100">
      <view
        v-if="showIcon"
        style="flex: 0; font-size: 28rpx"
        class="iconfont icon-chaxun pl-25rpx text-gray-400"
      ></view>
      <input
        style="flex: 16"
        placeholder="智能积木,越野四驱车"
        :disabled="disabled"
        :value="inputValue"
        placeholder-class="text-gray-400"
        class="pl-15rpx text-gray-400 h-70rpx"
        placeholder-style="font-size:28rpx"
        @input="getValue"
      />
    </view>
    <view class="text-gray-400 pl-15rpx text-28rpx" style="flex: 2" @tap="search && searchList()"
      ><text>搜索</text></view
    >
  </view>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const showIcon = ref(true);
const inputValue = ref("");
defineProps({
  disabled: { type: Boolean, default: true },
  search: { type: Boolean, default: false },
});
const getValue = (e: any) => {
  inputValue.value = e.detail.value;
};
const searchList = () => {
  console.log("searchList");
  uni.navigateTo({
    url: "/pages/searchResult/index?searchKey=" + inputValue.value,
  });
};
</script>
