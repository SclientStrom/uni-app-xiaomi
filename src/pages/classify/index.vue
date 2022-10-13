<template>
  <view>
    <HeadSearch>
      <view class="iconfont icon-xiaoxi pl-20rpx text-gray-500" style="flex: 2; font-size: 45rpx" />
    </HeadSearch>
    <view class="flex flex-row border-solid border-0 border-t-gray-100 border-t-6rpx">
      <scroll-view
        class="flex-1 border-solid border-r-gray-100 border-0 border-r-6rpx text-gray-600"
        :style="'height:' + scrollHeight + 'px'"
        scroll-y
      >
        <view
          v-for="(item, index) in classifyData.name"
          :key="index"
          class="border-solid border-0 border-b-gray-100 border-b-2 py-12rpx text-center"
          :class="classifyData.selectIndex === index ? 'main-text-color classSelect' : ''"
          @tap="changeClassify(index)"
        >
          {{ item }}
        </view>
      </scroll-view>
      <scroll-view style="flex: 3.5" :style="'height:' + scrollHeight + 'px'" scroll-y>
        <view class="flex flex-wrap w-full justify-start mt-2">
          <view
            v-for="(item, index) in rightClassifyData"
            :key="index"
            class="flex flex-col w-25vw box-border items-center my-2"
          >
            <image class="w-160rpx h-160rpx" :src="item.src"> </image>
            <text class="text-center">{{ item.name }}</text>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import HeadSearch from "@/components/common/headSearch.vue";
import { onLoad } from "@dcloudio/uni-app";
import { reactive, ref } from "vue";
const scrollHeight = ref(500);
const classifyData = reactive({
  selectIndex: 0,
  name: ["分类一", "分类二", "分类三", "分类四", "分类五", "分类六", "分类七", "分类八"],
});
const rightClassifyData: any[] = [];
onLoad(() => {
  const sysInfo = uni.getSystemInfoSync();
  scrollHeight.value = (sysInfo.windowHeight as number) - uni.upx2px(120);
  initData();
});
const changeClassify = (val: number) => {
  classifyData.selectIndex = val;
  initData(val);
};
const initData = (val = 0) => {
  rightClassifyData.length = 0;
  let randomInt: any = Math.floor(Math.random() * 20);
  randomInt == 0 && (randomInt = 1);
  for (let index = 0; index < randomInt; index++) {
    rightClassifyData.push({
      src: "/static/images/demo/cate_03.png",
      name: classifyData.name[val],
    });
  }
};
</script>
<style>
.classSelect {
  border-left: 9rpx solid #fd6801;
}
</style>
