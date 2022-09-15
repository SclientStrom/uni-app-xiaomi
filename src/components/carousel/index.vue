<template>
  <view>
    <swiper class="h-293rpx" circular indicator-dots autoplay :interval="2000" :duration="500">
      <view v-for="(item, index) in props.carouselProps" :key="index">
        <swiper-item>
          <image
            class="w-750rpx h-293rpx"
            :src="item.src"
            lazy-load
            @tap="jumpOtherPage(item)"
          ></image>
        </swiper-item>
      </view>
    </swiper>
  </view>
</template>
<script lang="ts" setup>
import { CarouselProps } from "../props";
const props = defineProps<{ carouselProps: CarouselProps[] }>();
function jumpOtherPage(item: CarouselProps) {
  console.log(item);
}
</script>
