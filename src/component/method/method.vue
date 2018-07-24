<template>
	<div class="method">
		<div class="method_lamp">
			<img :src='"src/assets/imgs/" + picture' class = "wow slideInLeft">
			<div class="method_title wow slideInLeft">
				<h1 v-text = "title"></h1>
				<p v-text = "desc"></p>
				<button v-show = "show">在线申请</button>
			</div>
		</div>
		<div class="method_nav">
			<el-tabs v-model="activeName" @tab-click="handleClick" style = "border: none">
			    <el-tab-pane label="世信链解决方案" name="first"><Sxl></Sxl></el-tab-pane>
			    <el-tab-pane label="企业解决方案" name="second"><Company></Company></el-tab-pane>
			    <el-tab-pane label="个人解决方案" name="third"><Personal></Personal></el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<script>
	import './method.scss';
	import Sxl from './Sxl.vue';
	import Company from './Company.vue';
	import Personal from './Personal.vue';

	export default {
		data: function(){
			return {
				activeName: 'first',
				picture: 'method_sxl.png',
				title: '',
				desc: '',
				show: false,
				picItem: [
					'method_sxl.png',
					'method_company.png',
					'method_personal.png'
				]
			}
		},
		components: {
			Sxl,
			Company,
			Personal
		},
		methods: {
				handleClick(tab, event) {
			        console.log(this.activeName);
			        switch(this.activeName){
			        	case 'second':
			        		this.picture = this.picItem[1];
			        		this.title = '在此输入banner广告标题';
			        		this.desc = '在此输入企业信用解决方案的相关描述。'
			        		this.show = true;
			        		break;
			        	case 'third':
			        		this.picture = this.picItem[2];
			        		this.title = '在此输入banner广告标题';
			        		this.desc = '在此输入个人信用解决方案的相关描述。'
			        		this.show = true;
			        		break;
			        	default:
			        		this.picture = this.picItem[0];
			        		this.title = '';
			        		this.desc = ''
			        		this.show = false;
			        		break;
			        }
			    }
		},
		created: function(){
		},
		mounted: function(){

		}

	}
</script>