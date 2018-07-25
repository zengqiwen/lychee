<template>
	<div class="index">
<!-- 		<el-carousel :interval="3000" arrow="always" :autoplay = false>
		    <el-carousel-item v-for="(item, index) in items" :key="item" class = "wow slideInLeft">
		    	<img :src="item">
		    	<button v-if = "index == 0" class = "btn_detail">了解详情</button>
		    	<button v-if = "index == 1" class = "btn_more">了解更多</button>
		    </el-carousel-item>
		</el-carousel> -->
		<swiper :options="swiperOption">
			<swiper-slide v-for="(item, index) in items" :key="index">
			<img :src="item" alt="">
			<button v-if = "index == 0" class = "btn_detail">了解详情</button>
			<button v-if = "index == 1" class = "btn_more">了解更多</button>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- 翼购平台 -->
		<div class = "index_ygpt_bg">
			<div class="index_ygpt">
				<div class="lf" style = "width: 30%; height: 100%">
					<div class="lf_title">
						<h2>翼购平台</h2>
						<p>PLATFORM INTRODUTION</p>
					</div>
					<div class="lf_title">
						<h3>输入标题</h3>
						<p>输入描述性文字</p>
					</div>
					<div class="lf_title">
						<h3>输入标题</h3>
						<p>输入描述性文字</p>
					</div>
					<div class="lf_title">
						<p>输入描述性文字</p> 
					</div>

					<div class="lf_title">
						<button>了解更多 ></button>
						<!-- <el-button type="primary">了解更多 ></el-button> -->
					</div>

					
				</div>
				<div class="rf rf_picture" style = "width: 70%; height: 100%;">
					<img src="src/assets/imgs/index_ygpt.png">
				</div>
			</div>
		</div>
		
		<!-- 翼企贷 -->
		<div class="index_yqd">
			<div class="lf lf_picture" style = "width: 60%; height: 100%;">
				<img src="src/assets/imgs/index_yqd.png">
			</div>
			<div class="rf" style = "width: 40%; height: 100%">
				<div class="rf_title">
					<h2>翼企贷</h2>
					<p>PLATFORM INTRODUTION</p>
				</div>
				<div class="rf_title">
					<h3>输入标题</h3>
					<p>输入描述性文字</p>
				</div>
				
				<div class="rf_title">
					<button>前往商城 ></button>
				</div>

			</div>
		</div>

		<!-- 区块链 -->
		<div class="index_qkl_bg">
			<div class="index_qkl">
				<h2>重磅推出区块链金融系统，打造区块链平台</h2>
				<p>让区块链融资更简单一些</p>
				<div class="index_qkl_content">
					<div class="lf" style = "width: 40%; height: 100%;">
						<ul class = "content_list">
							<li>输入供应链金融特点</li>
							<li>输入供应链金融特点</li>
							<li>输入供应链金融特点</li>
							<li>输入供应链金融特点</li>
							<li>输入供应链金融特点</li>
						</ul>
						<button>了解更多 ></button>
					</div>
					<div class="rf" style = "width: 60%; height: 100%;">
						<img src="src/assets/imgs/index_finance.png">
						<p class = "content_desc">在此输入供应链平台的描述特点在此输入供应链平台的描述特点在此输入供应链平台的描述特点在此输入供应链平台的描述特点在此输入供应链平台的描述特点在此输入供应链平台的描述特点</p>
					</div>
				</div>
			</div>

		</div>
		<!-- 信用租机 -->
		<div class="index_yqd">
			<div class="lf lf_picture" style = "width: 60%; height: 100%;">
				<img src="src/assets/imgs/index_xyzj.png">
			</div>
			<div class="rf" style = "width: 40%; height: 100%">
				<div class="rf_title">
					<h2>信用租机</h2>
					<p>PLATFORM INTRODUTION</p>
				</div>
				<div class="rf_title">
					<h3>特点一</h3>
					<p>输入描述性文字</p>
				</div>
				<div class="rf_title">
					<h3>特点二</h3>
					<p>输入描述性文字</p>
				</div>
				<div class="rf_title">
					<h3>特点三</h3>
					<p>输入描述性文字</p>
				</div>				
			</div>
		</div>

		<!-- 合作伙伴" -->
		<div class="index_cooperate_bg">
			<div class="index_cooperate">
				<h2>合作伙伴</h2>

				<el-row class = "cooperate_list" :gutter="20">
				  <el-col :span="6"><div><img src="src/assets/imgs/coop-telecom.png"></div></el-col>
				  <el-col :span="6"><div><img src="src/assets/imgs/coop-bok.png"></div></el-col>
				  <el-col :span="6"><div><img src="src/assets/imgs/coop-jingdong.png"></div></el-col>
				  <el-col :span="6"><div><img src="src/assets/imgs/coop-haier.png"></div></el-col>
				</el-row>
				<el-row class = "cooperate_list" :gutter="20">
				  <el-col :span="6"><div><img src="src/assets/imgs/coop-wuxi.png"></div></el-col>
				  <el-col :span="6"><div><img src="src/assets/imgs/coop-xiaonuo.png"></div></el-col>
				  <el-col :span="6"><div><img src="src/assets/imgs/coop-ecloud.png"></div></el-col>
				  <el-col :span="6"><div><img src="src/assets/imgs/coop-mingcheng.png"></div></el-col>
				</el-row>

			</div>
		</div>
	</div>
	
</template>
<script>
	import Bscroll from 'better-scroll';
	import './index.scss';
	import Swiper from 'swiper'; 
	export default {
		data: function(){
			return {
				items: [
					'src/assets/imgs/banner1.jpg',
					'src/assets/imgs/banner2.jpg',
					'src/assets/imgs/banner3.jpg',
					'src/assets/imgs/banner4.jpg'
				],
				swiperOption: {
					pagination: {
				      	el: ".swiper-pagination",
				      	clickable: true
				    },
					autoplay: 2500,
					loop: true,
					coverflow: {
					　　rotate: 30,
					　　stretch: 10,
					　　depth: 60,
					　　modifier: 2,
					　　slideShadows : true
					}
				}
			}
		},
		components: {
		
		},
		methods: {

		},
		created: function(){
		},
		mounted: function(){
			// var mySwiper = new Swiper('.swiper-container', {
			// 	autoplay:true,
			// 	loop:true,
			// 	paginationClickable: true,
			// 	// 如果需要分页器
			//     pagination: '.swiper-pagination',
			//     observer: true,

			//     // 如果需要前进后退按钮
			//     nextButton: '.swiper-button-next',
			//     prevButton: '.swiper-button-prev'
			// })
/*			var aaaa = this.$scrollreveal();

			aaaa.reveal('.reveal-top', {
				//进入方向；
				enter: 'right',
				//移动距离 ;
				move: '500px',
			  	// 动画的时长
			  	duration: 1000,
			  	// 延迟时间
			  	delay: 500,
			  	// 动画开始的位置，'bottom', 'left', 'top', 'right'
			  	origin: 'right',
			  	// 回滚的时候是否再次触发动画
			  	reset: true,
			  	// 在移动端是否使用动画
			  	mobile: false,
			  	// 滚动的距离，单位可以用%，rem等
			  	distance: '200px',
			  	// 其他可用的动画效果
			  	opacity: 0.001,
			  	easing: 'ease-in-out',
			  	scale: 0.9,
			});*/
		}

	}
</script>