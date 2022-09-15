<template>
  <uni-drawer
    :showDrawer="showDrawer && openDrawer()"
    ref="uniDrawerRef"
    :mode="mode"
    width="80%"
    :mask-click="true"
    @change="changeDrawerStatus"
  >
    <slot> </slot>
    <view
      v-if="showButton"
      class="flex flex-row fixed bottom-0 left-0 right-0 leading-100rpx text-center"
    >
      <view
        class="flex-1 bg-yellow-400 text-white"
        hover-class="bg-yellow-500"
        @tap="closeDrawer()"
      >
        确定
      </view>
      <view class="flex-1 bg-light-500 text-black" hover-class="bg-gray-400" @tap="closeDrawer()">
        取消
      </view>
    </view>
  </uni-drawer>
</template>
<script lang="ts" setup>
import UniDrawer from "@/components/uni/uni-drawer/uni-drawer.vue";
import { ref } from "vue";
defineProps({
  showDrawer: { type: Boolean, default: false },
  showButton: { type: Boolean, default: true },
  mode: { type: String, default: "right" },
});
const emits = defineEmits(["update:showDrawer", "changeDrawer"]);
const uniDrawerRef = ref();
function openDrawer() {
  uniDrawerRef.value?.open();
}
function changeDrawerStatus(open = true) {
  !open && closeDrawer();
}
function closeDrawer() {
  emits("update:showDrawer", false);
  uniDrawerRef.value?.close();
}
</script>
<style></style>
