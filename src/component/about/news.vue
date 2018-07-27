<template>
	<div class="news_bg">
		<ul class="news_list">
			<li v-for = "(item, index) in news" class = "news_item" v-bind:class="{ slideInLeft : (index%2) == 0 , 'slideInRight': (index%2) != 0  }" >
				<el-row>
					<el-col :span="6">
				  		<div class="grid-content bg-purple news_imgs">
				  			<img :src= "item.imgurl">
				  		</div>
					</el-col>
				 	<el-col :span="14">
				 		<div class="grid-content bg-purple-light">
				 			<h2 class="news_item_title" v-text = "item.title"></h2>
				 			<p>【公司动态】</p>
				 			<div class="news_item_desc" v-text = "item.desc"></div>
				 		</div>
				 	</el-col>
				 	<el-col :span="4">
				 		<div class="grid-content bg-purple news_date">
				 			<div class="date_month" v-text = "item.date.substring(5)"></div>
				 			<div class="date_year" v-text = "item.date.substring(0, 4)"></div>
				 			<button>查看详情</button>
				 		</div>
				 	</el-col>
				</el-row>
			</li>
		</ul>
		<el-pagination
			layout="prev, pager, next"
		    prev-text = "上一页"
		    next-text = "下一页"
		    :total="30">
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
				news: [
					{
						imgurl: 'src/assets/imgs/news_05.png',
						title: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						desc: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济区,块链技术发展进入3.0阶段 推动区块链赋能实体经济区块链技术发展进入3.0阶段 推动区块链,赋能实体经济区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						date: '2017-10-9'
					},
					{
						imgurl: 'src/assets/imgs/news_05.png',
						title: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						desc: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济区,块链技术发展进入3.0阶段 推动区块链赋能实体经济区块链技术发展进入3.0阶段 推动区块链,赋能实体经济区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						date: '2017-10-9'
					},
					{
						imgurl: 'src/assets/imgs/news_05.png',
						title: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						desc: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济区,块链技术发展进入3.0阶段 推动区块链赋能实体经济区块链技术发展进入3.0阶段 推动区块链,赋能实体经济区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						date: '2017-10-9'
					},
					{
						imgurl: 'src/assets/imgs/news_05.png',
						title: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						desc: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济区,块链技术发展进入3.0阶段 推动区块链赋能实体经济区块链技术发展进入3.0阶段 推动区块链,赋能实体经济区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						date: '2017-10-9'
					},
					{
						imgurl: 'src/assets/imgs/news_05.png',
						title: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						desc: '区块链技术发展进入3.0阶段 推动区块链赋能实体经济区,块链技术发展进入3.0阶段 推动区块链赋能实体经济区块链技术发展进入3.0阶段 推动区块链,赋能实体经济区块链技术发展进入3.0阶段 推动区块链赋能实体经济',
						date: '2017-10-9'
					}
				]
			}
		},
		computed: {

		},
		components: {
			
		},
		methods: {
			year: function(val){
				console.log(typeof val);
				var str = val.substring(0,4)
				return str;
			}
		},
		created: function(){

		},
		mounted: function(){
			// axios.post(url.global.baseurl + 'test', qs.stringify({test: 'test'})).then(res=>{
   //            	console.log(res);
              
   //          });
		}

	}
</script>