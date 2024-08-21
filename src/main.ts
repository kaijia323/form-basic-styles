import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/index.css";
import pinia from "./pinia";
import {
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElInputNumber,
  ElCheckbox,
  ElRadioGroup,
  ElRadio,
  ElColorPicker,
} from "element-plus";
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");

app.component("ElForm", ElForm);
app.component("ElFormItem", ElFormItem);
app.component("ElSelect", ElSelect);
app.component("ElOption", ElOption);
app.component("ElInputNumber", ElInputNumber);
app.component("ElCheckbox", ElCheckbox);
app.component("ElRadio", ElRadio);
app.component("ElRadioGroup", ElRadioGroup);
app.component("ElColorPicker", ElColorPicker);
