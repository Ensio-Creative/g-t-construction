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
			import(/* webpackChunkName: "services" */ '../views/services.vue')
	},
	{
		path: '/sectors',
		name: 'sectors',
		component: () =>
			import(/* webpackChunkName: "sectors" */ '../views/sectors.vue')
	},
	{
		path: '/contact-us',
		name: 'contact-us',
		component: () =>
			import(/* webpackChunkName: "contact" */ '../views/contact-us.vue')
	},
	{
		path: '/privacy',
		name: 'privacy',
		component: () =>
			import(/* webpackChunkName: "privacy" */ '../views/privacy.vue')
	}
	// {
  //   path: '*',
  //   alias: '*',
  //   name: 'Not-found',
  //   component: () => import(/* webpackChunkName: 'not found' */ '../views/NotFound.vue')
  // }
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
