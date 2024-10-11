import { createRouter, createWebHistory } from 'vue-router'

const Users = () => import("@/views/Users.vue");
const User = () => import("@/views/User.vue");
const About = () => import("@/views/About.vue");

const routes = [
  { path: "/", name: "index", component: Users },
  { path: "/user/:id",  component: User },
  { path: "/about", name: "page2", component: About },
];

const router = createRouter({
  history: createWebHistory( "/sub-vue"),
  routes,
});

export { router };
