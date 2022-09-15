<template>
  <list-sort :screen="screenProps">
    <view class="flex-1 flex flex-row items-center justify-center" @tap="openDrawer = true">
      <text class="text-gray-600">{{ screenProps.screen }}</text>
    </view>
    <drawer v-model:showDrawer="openDrawer">
      <card card-title="服务" class="w-full"> </card>
    </drawer>
  </list-sort>
</template>
<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import { reactive, ref } from "vue";
import Drawer from "@/components/common/drawer.vue";
import ListSort from "@/components/common/listSort.vue";
import Card from "@/components/card/index.vue";
const openDrawer = ref(false);
const screenProps = reactive({
  sortTypes: [
    { name: "综合", status: 1 },
    { name: "销量", status: 0 },
    { name: "价格", status: 0 },
  ],
  screen: "筛选",
  currentIndex: 0,
});

const searchKey = ref("");
onLoad((e: any) => {
  searchKey.value = e.searchKey;
  console.log(searchKey.value);
});
</script>
