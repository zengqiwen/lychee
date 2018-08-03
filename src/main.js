// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import store from './vuex/store.js';
//Element UI;
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//VueAwesomeSwiper滑块插件；
import VueAwesomeSwiper from 'vue-awesome-swiper';
import '../node_modules/swiper/dist/css/swiper.min.css';
Vue.use(VueAwesomeSwiper);

//字体图标；
import './assets/font-awesome/css/font-awesome.css';

//兼容ie及手机端；
import 'babel-polyfill';

import $ from 'jquery';

//bootstrap;
import './assets/bootstrap/css/bootstrap.min.css';

//固定定位水平滚动。
window.onscroll=function(){
	var sl=-Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
	document.getElementById('fixed').style.left=sl+'px';
};

//切换路由回到顶部；
router.afterEach((to,from,next) => {
  if (to.meta.title) {
      document.title = to.meta.title
    }
	// store.state.home.active = '2';
  	window.scrollTo(0,0);
});

////第一次刷新进入时，beforeEach不会被调用，手动调用
router.beforeEach((to, from, next) => {
  	window.scrollTo(0,0);
    var path = router.options.routes[0].children;
    path.map((item, idx)=>{
    	if(item.children){
    		item.children.map((item2, idx2)=>{
    			if(item2.path == to.path){
    				var num = String(idx);

    				if(num == 4){
              $('.el-submenu__title').map((idx, item)=>{
                if(idx == 1) {
                  
                }
                
              })
            }
    			}
    		})
    		
    	} else {
    		if(item.path == to.path){
    			var num = String(idx);
    			store.state.home.active = num;
    		}
    	}
    	
    })
    next();
});


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
