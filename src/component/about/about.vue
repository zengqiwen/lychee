<template>
	<div class="about">
		<div class="about_desc">
			
		    <img :src='"src/assets/imgs/" + picture' class = "about_lamp" v-if = "!showSmall">
		    <img :src='"src/assets/imgs/" + smallPicture' class = "about_lamp" v-if = "showSmall">
		    <h2 v-text = "title"></h2>
		</div>
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
				activeName: this.$store.state.home.activeName,
				picture: 'jianjie.png',
				picItem: [
					'jianjie.png',
					'news.png',
					'contact.png',
					'join.png',
				],
				smallPicture: 'jianjie_s.png',
				smallPicItem: [
					'jianjie_s.png',
					'news_s.png',
					'contact_s.png',
					'join_s.png'
				],
				title: '立趣简介',
				titleItem: [
					'立趣简介的标题描述',
					'新闻中心的标题描述',
					'联系我们的标题描述',
					'加入我们的标题描述'
				]
			}
		},
		components: {
			Jianjie,
			News,
			Contact,
			Join
		},
		computed: {
		    showSmall: {
		        get: function () {
		        	console.log('get', this.$store.state.home.activeName);
	              	return this.$store.state.home.onresize;
	            },
	            set: function (val) {
	            }
		    }
		},
		watch:{
			showSmall: {
				deep: true,
				handler: function (newVal,oldVal){
					console.log('newValue', newVal);
					console.log('oldValue', oldVal);
				}
			}
		},
		methods: {
			handleClick(tab, event) {
		        console.log(this.activeName);
		        switch(this.activeName){
		        	case 'second':
		        		this.title = this.titleItem[1];
		        		this.picture = this.picItem[1];
		        		this.smallPicture = this.smallPicItem[1];
		        		break;
		        	case 'third':
		        		this.title = this.titleItem[2];
		        		this.picture = this.picItem[2];
		        		this.smallPicture = this.smallPicItem[2];
		        		break;
		        	case 'fourth':
		        		this.title = this.titleItem[3];
		        		this.picture = this.picItem[3];
		        		this.smallPicture = this.smallPicItem[3];
		        		break;
		        	default:
		        		this.title = this.titleItem[0];
		        		this.picture = this.picItem[0];
		        		this.smallPicture = this.smallPicItem[0];
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