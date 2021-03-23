import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.APP_URL,
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "area_cliente" */ '../pages/unauthenticated/Home.vue'),
            name: 'unauthenticated.home'
        }
    ]
})

export default  router
