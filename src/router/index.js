import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/HomePage.vue'
import Exit from "../components/ExitPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/exit",
    name: "Exit",
    component: Exit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router