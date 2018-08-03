<template>
	<div class="news_bg">
		<div class="news_img">
		    <img src="../../assets/imgs/news.png"  class = "about_lamp" v-if = "!showSmall">
		    <img src="../../assets/imgs/news_s.png" class = "about_lamp" v-if = "showSmall">
		    <h2>新闻中心</h2>
		</div>
		<ul class="news_list">
			<li v-for = "(item, index) in showList" class = "news_item" v-bind:class="{ slideInLeft : (index%2) == 0 , 'slideInRight': (index%2) != 0  }" >
				<el-row>
					<el-col :span="6">
				  		<div class="grid-content bg-purple news_imgs">
				  			<img :src= "item.coverPath">
				  		</div>
					</el-col>
				 	<el-col :span="14">
				 		<div class="grid-content bg-purple-light">
				 			<h2 class="news_item_title" v-text = "item.newsTitle"></h2>
				 			<p v-if = "item.newsType == 1000">【公司动态】</p>
				 			<p v-if = "item.newsType == 2000">【行业新闻】</p>
				 			<div class="news_item_desc" v-text = "item.newsSubTitle"></div>
				 		</div>
				 	</el-col>
				 	<el-col :span="4">
				 		<div class="grid-content bg-purple news_date">
				 			<div class="date_month" v-text = "item.postTime.substring(5)"></div>
				 			<div class="date_year" v-text = "item.postTime.substring(0, 4)"></div>
				 			<button @click = "toDetail(item.newsContent, item.newsTitle, item.postTime)">查看详情</button>
				 		</div>
				 	</el-col>
				</el-row>
			</li>
		</ul>
		<el-pagination
			layout="prev, pager, next"
		    prev-text = "上一页"
		    next-text = "下一页"
		    @current-change = "pageChange"
		    :total="total">
		</el-pagination>
	</div>
</template>
<script>
	
	import './news.scss';
	import url from '../../assets/common/common.js';
	import axios from 'axios';
	import qs from 'qs';

	export default {
		data: function(){
			return {
			/*	news: [
					{
						imgurl: require('../../assets/imgs/news_05.png'),
						title: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						desc: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济区,块链技术发展进入3.0阶段 推动区块链赋能实体经济区块链技术发展进入3.0阶段 推动区块链,赋能实体经济区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						date: '2017-10-9'
					},
					{
						imgurl: require('../../assets/imgs/news_05.png'),
						
						title: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						desc: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济区,块链技术发展进入3.0阶段 推动区块链赋能实体经济区块链技术发展进入3.0阶段 推动区块链,赋能实体经济区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						date: '2017-10-9'
					},
					{
						imgurl: require('../../assets/imgs/news_05.png'),
						title: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						desc: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济区,块链技术发展进入3.0阶段 推动区块链赋能实体经济区块链技术发展进入3.0阶段 推动区块链,赋能实体经济区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						date: '2017-10-9'
					},
					{
						imgurl: require('../../assets/imgs/news_05.png'),
						title: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						desc: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济区,块链技术发展进入3.0阶段 推动区块链赋能实体经济区块链技术发展进入3.0阶段 推动区块链,赋能实体经济区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						date: '2017-10-9'
					},
					{
						imgurl: require('../../assets/imgs/news_05.png'),
						title: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						desc: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济区,块链技术发展进入3.0阶段 推动区块链赋能实体经济区块链技术发展进入3.0阶段 推动区块链,赋能实体经济区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						date: '2017-10-9'
					}
				],*/
				newsList: [],
				showList: [],
				qty: 10,
				pageNo: 1,
				total: 0
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
			pageChange: function(e){
				this.pageNo = e;
				
				this.showList = this.newsList.slice((this.pageNo - 1) * this.qty, this.pageNo * this.qty);
			},
			toDetail: function(newsContent, newsTitle, postTime){
				this.$router.push({
					name: 'newsDetail',
					params: {
			        	newsContent,
			        	newsTitle,
			        	postTime
			        }
				})
			},
			getNewsList: function(){

				var IS_DEBUG = true; //如果是测试环境就是true，如果是生产环境就是false
				if(process.env.NODE_ENV == 'development') {
					IS_DEBUG = true;
				} else {
					IS_DEBUG = false;
				}

			    var commonUrl = IS_DEBUG ? '/api' : 'https://www.lychee-info.cn';

			　　axios.get(commonUrl + '/api/getNewsList').then(response => {
			     	this.newsList = response.data.dataList;
			     	this.total = response.data.dataList.length;
			     	this.$store.state.home.newsList = response.data.dataList;

			     	this.showList = response.data.dataList.slice((this.pageNo - 1) * this.qty, this.pageNo * this.qty);


			    }, response => {
			    });
			}
		},
		created: function(){

			if(this.$store.state.home.newsList.length > 0 ) {
				this.newsList = this.$store.state.home.newsList;
				this.total = this.$store.state.home.newsList.length;
				this.showList = this.$store.state.home.newsList.slice((this.pageNo - 1) * this.qty, this.pageNo * this.qty);
				return false;
			}
			this.getNewsList();

			if(window.innerWidth <= 768) {
				this.$store.state.home.onresize = true;
			} else {
				this.$store.state.home.onresize = false;

			}
		},
		mounted: function(){

		}

	}
</script>