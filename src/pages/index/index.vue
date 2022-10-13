<template>
  <view>
    <head-search @tap="jumpQueryPage()" />
    <scroll-view
      :scroll-x="true"
      class="h-80rpx w-full truncate"
      style="border-bottom: 1rpx solid #f1f1f1"
      :scroll-into-view="scrollInto"
    >
      <view
        v-for="(item, index) in tabBar.list"
        :key="index"
        @tap="changeTab(index)"
        :class="currentTabIndex === index ? 'main-text-color' : ''"
        :id="'id_' + index"
        class="px-30rpx leading-80rpx inline-block"
      >
        <text class="text-28rpx leading-80rpx">{{ item.name }}</text>
      </view>
    </scroll-view>
    <swiper
      :current="currentTabIndex"
      :style="'height:' + windShowHeight + 'px'"
      @change="swiperChange"
    >
      <swiper-item v-for="(item, sIndex) in tabBar.list" :key="sIndex">
        <scroll-view
          scroll-y
          :style="'height:' + windShowHeight + 'px'"
          @scrolltolower="loadMore()"
        >
          <carousel-image :carouselProps="carouselProps" />
          <classify-img :classifyImg="classifyImgProp" />
          <divider />
          <adv :homeAdv="threeAdv"></adv>
          <divider></divider>
          <card cardTitle="每日精选" cardImgUrl="/static/images/demo/demo4.jpg" />
          <view class="flex flex-wrap w-full justify-evenly">
            <view v-for="(item, index) in shopList" :key="index">
              <shop-item :item="item"></shop-item>
            </view>
          </view>
          <divider />
          <view class="text-center py-2 text-gray-400">
            {{ loadText }}
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>
<script setup lang="ts">
import { CarouselProps, ClassifyProp, HomeAdv, ShopItemProps } from "@/components/props";
import carouselImage from "@/components/carousel/index.vue";
import ClassifyImg from "@/components/classify/index.vue";
import Divider from "@/components/divider/index.vue";
import Adv from "@/components/adv/index.vue";
import Card from "@/components/card/index.vue";
import ShopItem from "@/components/common/shopItem.vue";
import { onLoad, onShow, onLaunch, onHide } from "@dcloudio/uni-app";
import { reactive, ref } from "vue";
import HeadSearch from "@/components/common/headSearch.vue";
const carouselProps: CarouselProps[] = [
  { src: "/static/images/demo/demo4.jpg" },
  { src: "/static/images/demo/demo8.jpg" },
];
const scrollInto = ref("id_0");
const windShowHeight = ref(0);
const currentTabIndex = ref(0);
const loadText = ref("上拉加载更多");
const tabBar = reactive({
  list: [
    { name: "关注" },
    { name: "推荐" },
    { name: "体育" },
    { name: "热点" },
    { name: "财经" },
    { name: "娱乐" },
    { name: "军事" },
  ],
});
const getWindowHeight = () => {
  const sysInfo = uni.getSystemInfoSync();
  return sysInfo.windowHeight ? sysInfo.windowHeight - uni.upx2px(182) : 500;
};
const classifyImgProp: ClassifyProp[] = [
  { src: "/static/images/indexnav/1.png", classifyName: "新品分类" },
  { src: "/static/images/indexnav/2.gif", classifyName: "小明众筹" },
  { src: "/static/images/indexnav/3.gif", classifyName: "以旧换新" },
  { src: "/static/images/indexnav/4.gif", classifyName: "1分拼团" },
  { src: "/static/images/indexnav/5.gif", classifyName: "超值特卖" },
  { src: "/static/images/indexnav/6.gif", classifyName: "小米秒杀" },
  { src: "/static/images/indexnav/7.gif", classifyName: "真心想要" },
  { src: "/static/images/indexnav/8.gif", classifyName: "电视热卖" },
  { src: "/static/images/indexnav/9.gif", classifyName: "家电热卖" },
  { src: "/static/images/indexnav/10.gif", classifyName: "米粉卡" },
];
const threeAdv: HomeAdv = {
  left: {
    src: "/static/images/demo/demo1.jpg",
  },
  right: [{ src: "/static/images/demo/demo2.jpg" }, { src: "/static/images/demo/demo3.jpg" }],
};
const shopList: ShopItemProps[] = reactive([
  {
    src: "/static/images/demo/list/1.jpg",
    name: "米家空调",
    shortDesc: "智能炫拍",
    oriPrice: "2999",
    salePrice: "1999",
  },
  {
    src: "/static/images/demo/list/2.jpg",
    name: "小米手机",
    shortDesc: "1.5匹直流变频",
    oriPrice: "3999",
    salePrice: "2599",
  },
  {
    src: "/static/images/demo/list/2.jpg",
    name: "小米手机",
    shortDesc: "1.5匹直流变频",
    oriPrice: "3999",
    salePrice: "2599",
  },
  {
    src: "/static/images/demo/list/1.jpg",
    name: "米家空调",
    shortDesc: "智能炫拍",
    oriPrice: "2999",
    salePrice: "1999",
  },
]);
function loadMore() {
  if (loadText.value !== "上拉加载更多") {
    return;
  }
  loadText.value = "正在加载中...";
  setTimeout(() => {
    shopList.push({
      src: "/static/images/demo/list/1.jpg",
      name: "米家空调",
      shortDesc: "智能炫拍",
      oriPrice: "2999",
      salePrice: "1999",
    });
    shopList.push({
      src: "/static/images/demo/list/1.jpg",
      name: "米家空调",
      shortDesc: "智能炫拍",
      oriPrice: "2999",
      salePrice: "1999",
    });
    loadText.value = "上拉加载更多";
  }, 500);
}
function swiperChange(e: any) {
  changeTab(e.detail.current);
}
function changeTab(index: number) {
  if (currentTabIndex.value === index) {
    return;
  }
  currentTabIndex.value = index;
  scrollInto.value = "id_" + index;
}
const jumpQueryPage = () => {
  uni.navigateTo({
    url: "../search/index",
  });
};

onLoad(() => {
  windShowHeight.value = getWindowHeight();
});
</script>
