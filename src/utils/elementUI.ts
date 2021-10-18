import { App } from "@vue/runtime-core";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "dayjs/locale/hu";
import locale from "element-plus/lib/locale/lang/hu";

export default function mountElementUI(app: App<Element>) {
  app.use(ElementPlus, { locale });
}
