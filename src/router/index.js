import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about-us',
		name: 'About-Us',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/about-us.vue')
	},
	{
		path: '/services',
		name: 'Services',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/services.vue')
	},
	{
		path: '/sectors',
		name: 'sectors',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/sectors.vue')
	},
	{
		path: '/contact-us',
		name: 'contact-us',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/contact-us.vue')
	}
]

const router = createRouter({
	scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
	history: createWebHistory(),
	routes
})

export default router
