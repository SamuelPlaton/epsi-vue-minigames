import Vue from "vue";
import VueRouter from "vue-router";
import { Home, Detail, List, Quiz, Hangman } from "../views";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
    path: "/quiz",
    name: "Quiz",
    component: Quiz
  },
  {
    path: "/hangman",
    name: "Hangman",
    component: Hangman
  }
];

const router = new VueRouter({
  routes
});

export default router;
