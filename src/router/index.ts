import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE as string),
  routes,
});


export default router;
