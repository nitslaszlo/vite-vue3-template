import { RouteRecordRaw } from "vue-router";
import Home from "@/pages/home/index.vue";
import About from "@/pages/about/index.vue";

const NotFind = () => import("@/pages/404/index.vue");
const Index = () => import("@/pages/index/index.vue");
const Element = () => import("@/pages/element/index.vue");
const routes: RouteRecordRaw[] = [
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFind },
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      { path: "home", component: Home, name: "home" },
      { path: "about", component: About, name: "about" },
      { path: "element", component: Element, name: "element" },
    ],
  },
];

export default routes;
