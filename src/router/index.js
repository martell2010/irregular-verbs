import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: MainLayout,
      content: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    },
  },
  {
    path: '/study',
    name: 'Study',
    components: {
      default: MainLayout,
      content: () => import(/* webpackChunkName: "study" */ '@/views/Study.vue'),
    },
  },
  {
    path: '/results',
    name: 'Results',
    components: {
      default: MainLayout,
      content: () => import(/* webpackChunkName: "results" */ '@/views/Results.vue'),
    },
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
