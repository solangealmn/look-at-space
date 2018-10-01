import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import curiosity from '@/components/curiosity';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/curiosity',
      name: 'curiosity',
      component: curiosity,
    },
  ],
});
