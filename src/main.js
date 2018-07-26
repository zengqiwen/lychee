import $ from 'jquery'
import baseurl from './assets/common/common.js'

//icon-font;
import './assets/icon-font/iconfont.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './vuex/store.js';

//axios请求
import axios from 'axios';

//动画;
import animate from 'animate.css';

//Element UI;
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import './assets/font-awesome/css/font-awesome.css';

//VueAwesomeSwiper滑块插件；
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';

Vue.use(VueAwesomeSwiper);

// import 'swiper/dist/css/swiper.css';

// 轮播图，在入口文件中引入(暂时不支持单组件引入的方式):
import wcSwiper from 'wc-swiper';
import 'wc-swiper/style.css';
Vue.use(wcSwiper);

//滚动动画插件scrollreveal;
//import scrollReveal from 'scrollreveal';  //引入第三方插件，最后.js后缀可以不写
//Vue.prototype.$scrollreveal = scrollReveal;  //注册到Vue原型上，名字可以自己命名一个，;

//图片懒加载； 
// import VueLazyload from 'vue-lazyload';
// Vue.use(VueLazyload);

Vue.prototype.$ajax = axios;

Vue.use(ElementUI);
Vue.use(animate);

//固定定位水平滚动。
window.onscroll=function(){
	var sl=-Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
	document.getElementById('fixed').style.left=sl+'px';
}
//切换路由回到顶部；
router.afterEach((to,from,next) => {
  	window.scrollTo(0,0);
});

////第一次刷新进入时，beforeEach不会被调用，手动调用
router.beforeEach((to, from, next) => {
  	window.scrollTo(0,0);
    var path = router.options.routes[0].children;
    path.map((item, idx)=>{
    	if(item.path == to.path){
    		var num = String(idx);
    		store.state.home.active = num;
    		// router.push(to.path);
    	}
    })
    next();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
