import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Flags from "../views/Flags.vue";
import { Detail, List } from "../views";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/flags",
    name: "Flags",
    component: Flags
  },
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: "/detail/:country",
    name: "Detail",
    component: Detail
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
