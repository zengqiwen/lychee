<template>
	<div>
		<div class="jianjie_bg">
			<div class="jianjie_img">
			    <img src="../../assets/imgs/jianjie.png"  class = "about_lamp" v-if = "!showSmall">
			    <img src="../../assets/imgs/jianjie_s.png" class = "about_lamp" v-if = "showSmall">
			    <h2>国家级高新科技企业</h2>
			</div>
			<div class="jianjie">
				<h5>立趣企业介绍</h5>
				<p>
					广州立趣信息科技有限公司，成立于2014年，是一家正处于高速成长中的高新科技创业企业。立趣是国内领先的挖掘运营商供应链数据价值的数据服务提供商，以数据连接运营商供应链和金融，为金融机构提供基于供应链中的交易数据的风险定价能力，助推金融机构创新金融产品设计。同时，帮助供应链中的中小企业和个人获取简单、快捷的普惠金融服务，提升供应链价值。
				</p>
				<h5>立趣企业文化</h5>
				<p>价值观：诚信为本，追求卓越，成就每个人。</p>
				<p>愿景：通过立趣信用分，让普通大众乐享信用生活。</p>
				<p>使命：用大数据助理惠普金融健康发展，为传统金融插上互联网的翅膀，让每个人每个微小企业拥有自己的信用评分，帮助普通大众乐享金融服务。</p>
				<h5>立趣团队</h5>
				<p>其核心成员来自于前微软、HP、ORACLE等国际知名IT公司的高管和优秀员工；</p>
				<p>来自知名传统金融行业、顶级外企、互联网金融行业的专家组成；</p>
				<p>拥有多年运营商数据分析经验，涉及大数据处理及分析、P2P欺诈分析、风险控制、征信、实时运算等技术领域。</p>

				<!-- <div class="certificate">
					<img src="src/assets/imgs/jianjie_05.png">
				</div> -->
			</div>
		</div>
		<div class="ly_event_bg">
			<div class="ly_event">
				<h1>立趣大事件</h1>
				<div class="event_container">
					<ul class = "event_list">
						<li class = "event_years">2018年</li>
						<li>
							<div class="event_months">6月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item">电信供应链金融<span class = "keyword">区块链平台</span>上线</div>
						</li>
						<li>
							<div class="event_months">3月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item">与IBM/号百/君庸区块链签订合作</div>
						</li>
						<li>
							<div class="event_months">2月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item">个人信用分业务放款<span class = "keyword">超1亿</span></div>
						</li>
						<li class = "event_years">2017年</li>
						<li>
							<div class="event_months">8月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item">个人信用分评分资产超1亿</div>
						</li>
						<li>
							<div class="event_months">3月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item">信用中心平台2.0上线</div>
						</li>
						<li class = "event_years">2016年</li>
						<li>
							<div class="event_months">12月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item"><span class = "keyword">完成 Pre-A 轮融资</span>;企业信用分业务正式上线;荣获高新技术企业的称号;</div>
						</li>
						<li>
							<div class="event_months">11月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item">企业信用分产品上线</div>
						</li>
						<li>
							<div class="event_months">1月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item">荣获国家互联网信息办公室、中国计算机协议主办的大数据竞赛一等奖</div>
						</li>
						<li class = "event_years">2015年</li>
						<li>
							<div class="event_months">12月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item">获得“铭诚征信”企业征信资质</div>
						</li>
						<li>
							<div class="event_months">9月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item">电信集团数据战略合作协议和信用中主平台 1.0 上线;个人信用分产品上线;</div>
						</li>
						<li>
							<div class="event_months">7月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item">运营商大数据挖掘团队扩充</div>
						</li>
						<li class = "event_years">2014年</li>
						<li>
							<div class="event_months">10月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item">与中国电信集团开展集团战略合作</div>
						</li>
						<li>
							<div class="event_months">3月</div>
							<div class="event_circle"><span class = "event_circle_color"></span></div>
							<div class="event_item"><span class = "keyword">广州立趣科技信息有限公司成立</span></div>
						</li>
						
					</ul>
				</div>
			</div>
		</div>
	</div>
	
</template>
<script>
	
	import './jianjie.scss';

	export default {
		data: function(){
			return {
				
			}
		},
		components: {
			
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
		methods: {
			
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