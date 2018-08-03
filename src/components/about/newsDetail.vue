<template>
	<div class="newsContent_bg">
		<div class="newsContent_img">
		    <img src="../../assets/imgs/news.png"  class = "about_lamp" v-if = "!showSmall">
		    <img src="../../assets/imgs/news_s.png" class = "about_lamp" v-if = "showSmall">
		    <h2>新闻中心</h2>
		</div>
		<div class = "newsContent">
			<h3 v-html = "newsDetail.newsTitle"></h3>
			<div class="pub_time">
				<span class = "postTime" v-text = "newsDetail.postTime"></span><span class = "publisher">立趣信息科技</span>
			</div>
			<div class="content" v-html = "newsDetail.newsContent"></div>	
		</div>
	</div>
</template>
<script>
	import './newsDetail.scss';
	export default {
		data: function(){
			return {
				newsDetail: {
					newsTitle: '',
					postTime: '',
					newsContent: ''
				}
			}
		},
		computed: {
		    showSmall: {
		        get: function () {
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
				}
			}
		},
		components: {
			
		},
		methods: {
			
		},
		created: function(){
			this.newsDetail.newsTitle = this.$route.params.newsTitle;
			this.newsDetail.postTime = this.$route.params.postTime;
			this.newsDetail.newsContent = this.$route.params.newsContent;
		},
		mounted: function(){
			
		}

	}
</script>