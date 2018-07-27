<template>
	<div class="company">
		<div class="company_pic">
			<img src="src/assets/imgs/company_02.png" v-if = "!show">
			<img src="src/assets/imgs/company_02_s.png" v-if = "show">
		</div>
		<div class="beforeLoan">
			<h3>贷前信用评分</h3>
			<p>企业信用评分是根据您的企业资质、经营情况、信用历史、企业关联关系、企业履约能力、佣金质量等信息，对企业的信用进行评价，这个分数将综合评估企业在生和经营领域的信用情况。</p>
			<ul class = "loan_list">
				<li>
					<img src="src/assets/imgs/company_05.png">
					<span>企业资质</span>
				</li>
				<li>
					<img src="src/assets/imgs/company_07.png">
					<span>经营情况</span>
				</li>
				<li>
					<img src="src/assets/imgs/company_09.png">
					<span>信用历史</span>
				</li>
				<li>
					<img src="src/assets/imgs/company_11.png">
					<span>企业关联关系</span>
				</li>
				<li>
					<img src="src/assets/imgs/company_05.png">
					<span>企业履约能力</span>
				</li>
				<li>
					<img src="src/assets/imgs/company_15.png">
					<span>佣金质量</span>
				</li>
			</ul>
		</div>
		<!-- 贷中监控 -->
		<div class="loaning_bg">
			
			<div class="loaning">
				<h3>贷中监控</h3>
				<p>通过抓取供应企业借贷后的交易数据，借助在风险模型上的先进技术建立了针对企业的贷中监控预警，可提前识别企业可能出现的风险，通过多种方式提醒金融公司，从而降价风险，减少损失。</p>
				<ul class = "loaning_list">
					<li>
						<div class = "creditIcon icon1"></div>
						<h4>易集成</h4>
						<span>不改变自有的风险预警流程，增加立趣异动预警流程，包括监测流程和预警结果获取步骤。</span>
					</li>
					<li>
						<div class = "creditIcon icon2"></div>
						<h4>遵守全面性原则</h4>
						<span>立趣引入互联网预警、通信自动行为预警等信号，与金融机构自有的预警信号互相补充，扩展风险预警的全面性。</span>
					</li>
					<li>
						<div class = "creditIcon icon3"></div>
						<h4>遵守及时性原则</h4>
						<span>基于互联网大数据更新高频率，立趣引入准实时的异动预警，使金融机构的预警及时性得到跨越性的提高。</span>
					</li>
					
				</ul>
			</div>
		</div>
		<!-- 贷后跟踪 -->
		<div class="afterLoan">
			<h3>贷后跟踪</h3>
			<p>大量数据表明，中小企业一旦出现风险，最大的可能是企业主已经失联。借助多样化的数据源和业务规则，可建立针对企业主的失联跟踪模型，识别企业主可能的亲的联系方式，从而降低催收成本，减少损失。</p>
			<div class="loanFlow">
				<img src="src/assets/imgs/company_36.png">
			</div>
		</div>
		<!-- 应用案例 -->
		<div class="application_bg">
			<div class="application">
				<h3>应用案例</h3>
				<div class="application_item">
					<div class="application_desc">
						<h5>区块链供应链金融——产业链价值连接者</h5>
						<p>在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，</p>
						<button>在线申请 ></button>
					</div>
					<div class="application_pic">
						<img src="src/assets/imgs/company_40.png">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>	
<script>
	import Bscroll from 'better-scroll';
	import './company.scss';
	export default {
		data: function(){
			return {
				
			}
		},
		components: {
		
		},
		computed: {
			show: {
				get: function(){
					return this.$store.state.home.onresize;
				},
				set: function(val){

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