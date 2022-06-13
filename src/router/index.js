import { createRouter, createWebHistory } from "vue-router";
import BodyPart from './../components/BodyPart.vue';
import LoginPart from './../components/LoginPart.vue';
import ProductiesPart from './../components/ProductiesPart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BodyPart,
  },
  {
    path: '/producties',
    name: 'Producties',
    component: ProductiesPart,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPart,
  },
];

const router = createRouter({history: createWebHistory(), routes});
export default router;