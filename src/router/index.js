import { createWebHistory, createRouter } from "vue-router";
import Home from "./../views/Home.vue";
import About from "./../views/Manual.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/manual",
    name: "Manual",
    component: About,
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
});

export default router;