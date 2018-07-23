<template>
	<div class="about">
	    <img :src='"src/assets/imgs/" + picture' class = "about_lamp wow slideInLeft">
		<div class="about_nav">
			<el-tabs v-model="activeName" @tab-click="handleClick" style = "border: none">
			    <el-tab-pane label="立趣简介" name="first"><Jianjie></Jianjie></el-tab-pane>
			    <el-tab-pane label="新闻中心" name="second"><News></News></el-tab-pane>
			    <el-tab-pane label="联系我们" name="third"><Contact></Contact></el-tab-pane>
			    <el-tab-pane label="加入我们" name="fourth"><Join></Join></el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<script>
	import Bscroll from 'better-scroll';
	import './about.scss';
	import Jianjie from './jianjie.vue';
	import News from './news.vue';
	import Contact from './contact.vue';
	import Join from './join.vue';
	export default {
		data: function(){
			return {
				activeName: 'first',
				picture: 'jianjie.png',
				picItem: [
					'jianjie.png',
					'news.png',
					'contact.png',
					'join.png',
				]
			}
		},
		components: {
			Jianjie,
			News,
			Contact,
			Join
		},
		methods: {
			handleClick(tab, event) {
		        console.log(this.activeName);
		        switch(this.activeName){
		        	case 'second':
		        		this.picture = this.picItem[1];
		        		break;
		        	case 'third':
		        		this.picture = this.picItem[2];
		        		break;
		        	case 'fourth':
		        		this.picture = this.picItem[3];
		        		break;
		        	default:
		        		this.picture = this.picItem[0];
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