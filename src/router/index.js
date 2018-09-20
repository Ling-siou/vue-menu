import Vue from 'vue'
import VueRouter from 'vue-router'

import TryOne from '../pages/TryOne.vue'
import TryTwo from '../pages/TryTwo.vue'
import VueScroll from '../pages/VueScroll.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            name: 'TryOne',
            path: '/try-one',
            component: TryOne
        },
        {
            name: 'TryTwo',
            path: '/try-two',
            component: TryTwo
        },
        {
            name: 'VueScroll',
            path: '/vue-scroll',
            component: VueScroll
        }
    ]
});