import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../component/home/home.vue';
import index from '../component/index/index.vue';
import company from '../component/company/company.vue';
import personal from '../component/personal/personal.vue';

import method from '../component/method/method.vue';
import about from '../component/about/about.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{path:'/',component:home,redirect: '/',
			children: [
				{path: '/', component: index, name: '首页'},
				{path: '/company', component: company, name: '企业信用'},
				{path: '/personal', component: personal, name: '个人信用'},
				{path: '/method', component: method, name: '解决方案'},
				{path: '/about', component: about, name: '关于我们'}
			]
		}
	]
})

export default router ;