import { createSSRApp } from "vue";
import App from "./App.vue";
import divider from "@/components/divider/index.vue";
import price from "@/components/common/price.vue";

// import 'virtual:windi.css'
// 引入组件和工具类
import "virtual:windi-components.css";
import "virtual:windi-utilities.css";
import "@/common/uni.css";
import "@/common/icon.css";
import "@/common/common.css";
export function createApp() {
  createSSRApp.bind("divider", divider).bind("price", price);
  const app = createSSRApp(App);
  return {
    app,
  };
}
