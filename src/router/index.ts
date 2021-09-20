import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Swap from "../views/Swap.vue";
import Pool from "../views/Pool.vue";
import Vote from "../views/Vote.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/swap",
  },
  {
    path: "/swap",
    name: "Swap",
    component: Swap,
  },
  {
    path: "/pool",
    name: "Pool",
    component: Pool,
  },
  {
    path: "/vote",
    name: "Vote",
    component: Vote,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
