import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: "/",
  linkActiveClass: "link--active",
  linkExactActiveClass: "link--active",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/collaborators",
      name: "collaborators",
      component: () => import("../views/CollaboratorsView.vue"),
    },
  ],
});

export default router;
