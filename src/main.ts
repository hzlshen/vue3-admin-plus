import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import i18n from "./locales/index";
import moment from "moment";

const app = createApp(App);

// 将store 、 router 挂载到全局上，便于使用
import { useStore } from "vuex";
import { useRoute } from "vue-router";

// 输入框组件
import hzlInput from "@/components/template/hzlInput.vue";
// 下拉框组件
import hzlSelect from "@/components/template/hzlSelect.vue";
// 分页
import hzlPage from "@/components/template/hzlPage.vue";
// 表格组件
import hzlTable from "@/components/template/hzlTable.vue";
// 弹窗
import hzlDialog from "@/components/template/hzlDialog.vue";

app.component("hzl-input", hzlInput);
app.component("hzl-select", hzlSelect);
app.component("hzl-page", hzlPage);
app.component("hzl-table", hzlTable);
app.component("hzl-dialog", hzlDialog);

app.config.globalProperties.$store = useStore();
app.config.globalProperties.$router = useRoute();

app.use(router);
app.use(ElementPlus);
app.use(i18n);
app.use(moment);

app.use(store);
app.mount("#app");
