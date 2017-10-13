import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Header';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/tradeguide',
      name: 'Hello',
      component: Hello,
    },
  ],
});
