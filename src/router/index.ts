import { createRouter,createWebHistory,type RouteRecordRaw } from "vue-router";

import Index from "../views/index.vue";
const routes :Array<RouteRecordRaw> = [
    {
        path:"/",
        component:Index,
        meta:{ title : 'Index'}
    }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
