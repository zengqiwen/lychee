import Vue from 'vue';
import Router from 'vue-router';

import home from '../components/home/home.vue';
import index from '../components/index/index.vue';
import company from '../components/company/company.vue';
import personal from '../components/personal/personal.vue';
import method from '../components/method/method.vue';
import about from '../components/about/about.vue';

import jianjie from '../components/about/jianjie.vue';
import news from '../components/about/news.vue';
import contact from '../components/about/contact.vue';
import join from '../components/about/join.vue';
import newsDetail from '../components/about/newsDetail.vue';


import methodSxl from '../components/method/sxl.vue';
import methodCompany from '../components/method/methodCompany.vue';
import methodPersonal from '../components/method/methodPersonal.vue';


Vue.use(Router)

export default new Router({
	routes:[
		{path:'/',component:home,redirect: '/',
			children: [
				{path: '/', component: index, name: '首页', meta: { title: '立趣信息科技' }},
				{path: '/company', component: company, name: '企业信用', meta: { title: '企业信用' }},
				{path: '/personal', component: personal, name: '个人信用', meta: { title: '个人信用' }},
				{path: '/method', component: method, name: '解决方案', 
					children: [
						{path: '/methodSxl', component: methodSxl, name: '世信链解决方案', index: '4-1', meta: { title: '世信链解决方案' }},
						{path: '/methodCompany', component: methodCompany, name: '企业解决方案', index: '4-2', meta: { title: '企业解决方案' }},
						{path: '/methodPersonal', component: methodPersonal, name: '个人解决方案', index: '4-3', meta: { title: '个人解决方案' }}
					]
				},
				{path: '/about', component: about, name: '关于我们',
					children: [
						{path: '/jianjie', component: jianjie, name: '立趣简介', index: '5-1', meta: { title: '立趣简介' }},
						{path: '/news', component: news, name: '新闻中心', index: '5-2', meta: { title: '新闻中心' }},
						{path: '/contact', component: contact, name: '联系我们', index: '5-3', meta: { title: '联系我们' }},
						{path: '/join', component: join, name: '加入我们', index: '5-4', meta: { title: '加入我们' }},
						{path: '/newsDetail', component: newsDetail, name: 'newsDetail', index: '5-5', hidden: true, meta: { title: '新闻详情' }}
					]
				}
			]
		},
		{
			path: '*',
			redirect:{ path: '/' }
		}
	]
})
