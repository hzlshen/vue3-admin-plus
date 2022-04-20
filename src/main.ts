import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

const app = createApp(App);

// 将store 、 router 挂载到全局上，便于使用
import { useStore } from "vuex";
import { useRoute } from "vue-router";

app.config.globalProperties.$store = useStore();
app.config.globalProperties.$router = useRoute();

app.use(router);
import { format } from "url";
app.use(store);
app.mount("#app");
