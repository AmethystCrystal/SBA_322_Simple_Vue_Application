import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'src/App.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: App },

];

const router = new VueRouter({
  routes,
});

export default router;
