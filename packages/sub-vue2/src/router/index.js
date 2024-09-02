import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from "@/pages/Page1"
import Page2 from "@/pages/Page2"

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/page1" },
  { path: "/page1", component: Page1 },
  { path: "/page2", component: Page2 },
]

const router = new VueRouter({
  mode: "history",
  base: "/vue2",
  routes
})

export default router
