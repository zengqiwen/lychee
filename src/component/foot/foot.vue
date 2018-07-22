<template>
	<div class="foot-bg">
		<div class="foot">
			<div class="foot-left">
				<img src="../../assets/imgs/logo_ly.png">
			</div>
			<div class="foot-right">
				<ul class = "foot-list">
					<li class = "foot-list-title">业务</li>
					
					<li><router-link to="/company">企业信用</router-link></li>
					<li>个人信用</li>
				</ul>
				<ul class = "foot-list">
					<li class = "foot-list-title">关于我们</li>
					<li>立趣简介</li>
					<li>加入我们</li>
					<li>服务条款</li>
					<li>隐私条约</li>
				</ul>
				<ul class = "foot-list">
					<li class = "foot-list-title">联系我们</li>
					<li><i class="fa fa-phone" aria-hidden="true"></i>020-85162521</li>
					<li><i class="fa fa-envelope-o" aria-hidden="true"></i>contact@lychee-info.cn</li>
					<li><i class="fa fa-map-marker" aria-hidden="true"></i>广州市天河路思成路19号宏太智慧谷7栋301房</li>
				</ul>
				<ul class = "foot-list">
					<li class = "foot-list-title">官网微信</li>
					<li><img src="../../assets/imgs/index_ewm.png"></li>
					
				</ul>
			</div>
		</div>
		<el-row class = "copyRight">
			<el-col :span="24">
		  		<div class="">
		  			版权所有 ©2015-2017 广州立趣信息科技有限公司 粤 ICP 备 15068962 号
		  		</div>
			</el-col>
		</el-row>

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
		methods: {

		},
		created: function(){
		},
		mounted: function(){

		}

	}
</script>