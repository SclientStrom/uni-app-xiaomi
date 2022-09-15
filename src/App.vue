<script setup lang="ts">
import { onLaunch, onShow, onHide, onLoad } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onLoad(() => {
  console.log("App onLoad");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
