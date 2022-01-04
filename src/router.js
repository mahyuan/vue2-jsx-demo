import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import HelloWorld from 'views/HelloWorld'
import HelloWorldWithJSX from 'views/HelloWorldWithJSX'
import HelloWorldWithCreateElement from 'views/HelloWorldWithCreateElement'


const routes = [{
    path: '/',
    component: HelloWorld
}, {
    path: '/h',
    component: HelloWorldWithCreateElement,
}, {
    path: '/jsx',
    component: HelloWorldWithJSX
}]

export default new VueRouter({
    mode: 'hash',
    routes
})