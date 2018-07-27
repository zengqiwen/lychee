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
		<!-- 区块链 -->
		<div class="index_qkl_bg">
			<div class="index_qkl">
				<h2>重磅推出基于区块链的供应链金融平台</h2>
				<p>让企业融资更简单一些</p>
				<div class="index_qkl_content">
					<div class="content_l">
						<ul class = "content_list">
							<li>分布式监管</li>
							<li>背书身份认证</li>
							<li>隐私保护</li>
							<li>智能撮合</li>
							<li>数据存证</li>
						</ul>
						<button>了解更多 ></button>
					</div>
					<div class="content_r">
						<img src="src/assets/imgs/index_finance.png">
						<ul class = "content_desc">
							<li>融资企业申请融资额度，同时进行供应链上下游经营数据的授权，由核心企业进行背书确认</li>
							<li>立趣基于大数据以及人工智能算法就融资企业进行风险的识别以及授信额度的建议。</li>
							<li>金融机构基于立趣的授信建议进行确认和放款。</li>
							<li>贷款记录相关信息写入区块链，可作为存证，用于日后的违约纠纷处理。</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
		<!-- 翼企贷 -->
		<div class="index_yqd">
			
			<div class="rf_desc">
				<div class="rf_title">
					<h2>翼企贷</h2>
					<p>PLATFORM INTRODUTION</p>
				</div>
				<div class="rf_title">
					<h3>数据流就是现金流</h3>
					<p>	
						帮助企业将数据转化为资产提供简单快捷的线上融资平台实时对接多元化的金融机构提升供应链市场竞争力和规模
					</p>
				</div>
				
				<div class="rf_title">
					<button>前往商城 ></button>
				</div>

			</div>
			<div class="lf_picture">
				<img src="src/assets/imgs/index_yqd.png">
			</div>
		</div>
		<!-- 翼购平台 -->
		<!-- <div class = "index_ygpt_bg">
			<div class="index_ygpt">
				<div class="lf lf_content">
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
					</div>	
				</div>
				<div class="rf rf_picture">
					<img src="src/assets/imgs/index_ygpt.png">
				</div>
			</div>
		</div> -->
		
		<!-- 信用租机 -->
		<div class="index_xyzj_bg">
			<div class="index_xyzj">
				<div class="lf_picture">
					<img src="src/assets/imgs/index_xyzj.png">
				</div>
				<div class="rf_desc">
					<div class="rf_title">
						<h2>信用租机</h2>
						<p>PLATFORM INTRODUTION</p>
					</div>
					<div class="rf_title">
						<h3>你守信，我买单</h3>
						<p>引领分期消费潮流，将实惠给到用户。</p>
					</div>
					<div class="rf_title">
						<h3>0元拿机</h3>
						<p>根据信用等级，支持0首付。</p>
					</div>
					<div class="rf_title">
						<h3>按月付费</h3>
						<p>0负担年年换新机。</p>
					</div>				
				</div>
			</div>
		</div>

		<!-- 合作伙伴" -->
		<div class="index_cooperate_bg">
			<div class="index_cooperate">
				<h3>合作伙伴</h3>

			<!-- 	<el-row class = "cooperate_list" :gutter="20">
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
				</el-row> -->
				<ul class = "cooperate_list">
					  <li><img src="src/assets/imgs/coop-telecom.png"></li>
					  <li><img src="src/assets/imgs/coop-bok.png"></li>
					  <li><img src="src/assets/imgs/coop-jingdong.png"></li>
					  <li><img src="src/assets/imgs/coop-haier.png"></li>
					  <li><img src="src/assets/imgs/coop-wuxi.png"></li>
					  <li><img src="src/assets/imgs/coop-xiaonuo.png"></li>
					  <li><img src="src/assets/imgs/coop-ecloud.png"></li>
					  <li><img src="src/assets/imgs/coop-mingcheng.png"></li>
				</ul>

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
					// 'src/assets/imgs/banner3.jpg',
					// 'src/assets/imgs/banner4.jpg'
				],
				swiperOption: {
					pagination: {
				      	el: ".swiper-pagination",
				      	clickable: true
				    },
					autoplay: true,
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