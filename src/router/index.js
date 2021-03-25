import { createWebHistory, createRouter } from "vue-router";
import Home from "./../views/Home.vue";
import Manual from "./../views/Manual.vue";
import Horns from "./../views/Horns.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/manual",
		name: "Manual",
		component: Manual,
	},
	{
		path: "/horns",
		name: "Horns",
		component: Horns,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			}
		}
	},
});

export default router;