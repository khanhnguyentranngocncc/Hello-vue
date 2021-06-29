import { createRouter, createWebHistory } from "vue-router";

import GameScreen from "./pages/GameScreen.vue";
import Home from "./pages/home.vue";
import FormInput from "./pages/formInput.vue";
const routes = [
  {
    path: "/game",
    component: GameScreen,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/form-input",
    component: FormInput,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
