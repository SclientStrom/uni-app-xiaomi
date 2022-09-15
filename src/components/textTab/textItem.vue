<template>
  <text
    :style="defaultStyle ? 'border:none;background-color:#e6e6e6' : searchStyles()"
    class="px-20rpx py-10rpx my-15rpx ml-30rpx mr-10rpx block text-black"
  >
    {{ item.name }}
  </text>
</template>
<script lang="ts" setup>
defineProps<{ item: { name: string }; defaultStyle: boolean }>();
const hotSearchStyle = [
  { borderColor: "#f2e710", bgColor: "#faf8d7" },
  { borderColor: "#01a3f8", bgColor: "#bfe5f8" },
  { borderColor: "#f52308", bgColor: "#f6c6c0" },
  { borderColor: "#2bf806", bgColor: "#d2f8cb" },
];
const searchStyles = () => {
  const cIndex = Math.floor(Math.random() * hotSearchStyle.length);
  return `border: 1rpx solid ${hotSearchStyle[cIndex].borderColor}; background-color: ${hotSearchStyle[cIndex].bgColor}`;
};
</script>

m1Bl3s?V!p.
