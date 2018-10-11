import Vue from 'vue';
import VueRouter from 'vue-router';
import Skills from './components/Skills';
import Made from './components/Made';
import Like from './components/Like';
import Social from './components/Social';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Skills
  },
  {
    path: '/made',
    component: Made
  },
  {
    path: '/like',
    component: Like
  },
  {
    path: '/social',
    component: Social
  }
];

// eslint-disable-next-line
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default new VueRouter({routes});