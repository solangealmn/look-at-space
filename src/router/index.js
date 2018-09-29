import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import curiosity from '@/components/curiosity';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/curiosity',
      name: 'curiosity',
      component: curiosity,
    },
  ],
});
