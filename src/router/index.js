import { createRouter, createWebHashHistory } from "vue-router";
import AboutViewVue from "../views/AboutView.vue";
const routes = [
  {
    path: "/",
    name: "about",
    component: AboutViewVue,
  },
  {
    path: "/project",
    name: "project",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SkillsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
