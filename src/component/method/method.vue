<template>
	<div class="method">
		<div class="method_lamp">
			<img :src='"src/assets/imgs/" + picture' v-show = "!showSmall">
			<img :src='"src/assets/imgs/" + smallPicture' v-show = "showSmall">
			<div class="method_title">
				<h1 v-text = "title">1</h1>
				<p v-text = "desc"></p>
				<!-- <button v-show = "show">在线申请</button> -->
				<button v-show = "activeName == 'second'">在线申请2</button>
				<button v-show = "activeName == 'third'">在线申请3</button>
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
	import Company from './methodCompany.vue';
	import Personal from './methodPersonal.vue';

	export default {
		data: function(){
			return {
				activeName: 'first',
				picture: 'method_sxl.png',
				smallPicture: 'method_sxl_s.png',
				title: '',
				desc: '',
				picItem: [
					'method_sxl.png',
					'method_company.png',
					'method_personal.png'
				],
				smallPicItem: [
					'method_sxl_s.png',
					'method_company_s.png',
					'method_personal_s.png'
				]
			}
		},
		computed: {
			showSmall: {
				get: function(){
					return this.$store.state.home.onresize;
				},
				set: function(val){

				}
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
			        		console.log(this.activeName)
			        		this.picture = this.picItem[1];
			        		this.smallPicture = this.smallPicItem[1];
			        		this.title = '在此输入banner广告标题';
			        		this.desc = '在此输入企业信用解决方案的相关描述。'
			        		break;
			        	case 'third':
			        		this.picture = this.picItem[2];
			        		this.smallPicture = this.smallPicItem[2];
			        		this.title = '在此输入banner广告标题';
			        		this.desc = '在此输入个人信用解决方案的相关描述。'
			        		break;
			        	default:
			        		this.picture = this.picItem[0];
			        		this.smallPicture = this.smallPicItem[0];
			        		this.title = '';
			        		this.desc = ''
			        		break;
			        }
			    }
		},
		created: function(){
		},
		mounted: function(){
			if(window.innerWidth <= 768) {
				this.$store.state.home.onresize = true;
			} else {
				this.$store.state.home.onresize = false;

			}
		}

	}
</script>