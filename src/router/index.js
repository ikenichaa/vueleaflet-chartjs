import Vue from 'vue';
import VueRouter from 'vue-router';
import Plant from '../views/Plant.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Plant',
    component: Plant,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
