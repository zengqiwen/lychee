<template>
	<div class="foot-bg">
		<div class="foot">
			<div class="foot-left">
				<img src="src/assets/imgs/logo_ly.png">
			</div>
			<div class="ewm" v-if = "onresize">
				<img src="src/assets/imgs/index_ewm.png">
				<p>官网微信</p>
			</div>
			<div class="foot-right">
				<ul class = "foot-list">
					<li class = "foot-list-title">业务</li>
					
					<li @click = "toCompany">企业信用</li>
					<li @click = "toPersonal">个人信用</li>
				</ul>
				<ul class = "foot-list">
					<li class = "foot-list-title">关于我们</li>
					<li @click = "toAbout" data-index = 1>立趣简介</li>
					<li @click = "toAbout" data-index = 2>加入我们</li>
					<li data-index = 3>服务条款</li>
					<li data-index = 4>隐私条约</li>
				</ul>
				<ul class = "foot-list">
					<li class = "foot-list-title">联系我们</li>
					<li><i class="fa fa-phone" aria-hidden="true"></i>020-85162521</li>
					<li><i class="fa fa-envelope-o" aria-hidden="true"></i>contact@lychee-info.cn</li>
					<li><i class="fa fa-map-marker" aria-hidden="true"></i>广州市天河路思成路19号宏太智慧谷7栋301房</li>
				</ul>
				<ul class = "foot-list">
					<li class = "foot-list-title">官网微信</li>
					<li><img src="src/assets/imgs/index_ewm.png"></li>
					
				</ul>
			</div>
		</div>
		<div class = "copyRight">
	  		<p class="">
	  			版权所有 ©2015-2017 广州立趣信息科技有限公司 粤 ICP 备 15068962 号
	  		</p>
		</div>

	</div>
</template>
<script>
	import Bscroll from 'better-scroll';
	import './foot.scss';

	export default {
		data: function(){
			return {
				
			}
		},
		components: {
		
		},
		computed: {
			onresize: {
				get: function(){
					return this.$store.state.home.onresize;
				},
				set: function(val){

				}
			}
		},
		methods: {
			toCompany: function(){
				this.$router.push('/company');
			},
			toPersonal: function(){
				this.$router.push('/personal');
			},
			toAbout: function(e){
				if(e.target.dataset.index == 2){
					this.$store.state.home.activeName = "fourth";
				}
				window.scrollTo(0,0);
				this.$router.push('/about');
			}
		},
		created: function(){
		},
		mounted: function(){
			console.log(this.$store.state.home.onresize)
		}

	}
</script>