<template>
	<div class="personal">
			<div class="personal_pic">
				<img src="../../assets/imgs/personal_02.png" v-if = "!show">
				<img src="../../assets/imgs/personal_02_s.png" v-if = "show">
				<div class="title">
					<h3>个人信用</h3>
					<p>立趣个人信用分是在用户授权的情况下，依据用户留存在运营商的各类消费及行为数据，结合传统金融收支数据、借贷数据、信用数据，运用大数据及机器学习等技术，通过逻辑回归、决策树、随机森林等模型算法，对各维度数据进行综合处理和评估。</p>
				</div>
			</div>
			<!-- 贷前评分 -->
			<div class="beforeLoan">
				<div class="personal_content">
					<div class="content_desc">
						<h3>贷前信用评分</h3>
						<p>立趣个人信用分是在用户授权的情况下，依据用户在运营商上的种类消费及行为数据，结合其他行业的数据源，运用云计算鳄鱼机器学习等技术，通过逻辑回归、决策树、随机森林等模型算法，对各维度数据进行综合处理和评估，在客户身份属性、消费行为、稳定性、终端、朋友圈、号码自然属性这六个维度客观呈现个人信用头部的综合分值。</p>
						<p>立趣个人信用分的分值范围为 300 至 1000，分值越高代表信用超好，相应违约率相对较低，较高的立趣个人信用分可以帮助用户获得更高效、更优质的服务。</p>
					</div>
					<div class="score">
						<img src="../../assets/imgs/personal_05.png">
					</div>
				</div>
				<ul class = "loan_list">
					<li>
						<img src="../../assets/imgs/personal_12.png">
						<span>身份属性</span>
					</li>
					<li>
						<img src="../../assets/imgs/personal_14.png">
						<span>消费行为</span>
					</li>
					<li>
						<img src="../../assets/imgs/personal_16.png">
						<span>稳定性</span>
					</li>
					<li>
						<img src="../../assets/imgs/personal_18.png">
						<span>终端属性</span>
					</li>
					<li>
						<img src="../../assets/imgs/personal_20.png">
						<span>朋友圈</span>
					</li>
					<li>
						<img src="../../assets/imgs/personal_09.png">
						<span>号码属性</span>
					</li>
				</ul>
			</div>
			<!-- 贷中监控 -->
			<div class="loaning_bg">
				<div class="loaning">
					<h3>贷中监控</h3>
					<div class = "loaning_pic">
						<!-- <img src="../../assets/imgs/personal_loaning.png" alt = ""> -->
					</div>
					<ul class = "loaning_content">
						<li class = "loaning_desc">
							通过抓取供应企业借贷后的交易数据，借助在风险模型上的先进技术建立了针对企业的贷中监控预警，可提前识别企业可能出现的风险，通过多种方式提醒金融公司，从而降价风险，减少损失。
						</li>
						<li>
							<ul class = "sub_content">
								<li>
									<h4>实时授信</h4>
									<p>依托强大的算法模型能力，对用户进行全方位的信用评估，当信用评估分值达到一定水平后，可对其进行信用授信，并将信用分值转化为信贷额度。</p>
								</li>
								<li>
									<h4>监控预警</h4>
									<p>通过离网预警模型和失联修复模型识别有违约风险的用户，准确识别高危用户，并针对违约用户提供失联修复参考。</p>
								</li>
								<li>
									<h4>征信上报</h4>
									<p>已与人民银行征信中心展开深入合作，对授信人的履约情况，进行跟踪，定时定期进行上报，形成征信记录。</p>
								</li>
								<li>
									<h4>全流程服务</h4>
									<p>金融风控大数据平台，具有完善的系统支撑能力，可提供业务预约、业务受理、业务校验审核，业务统计、结算对账、业务监控预警等服务。</p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<!-- 贷后跟踪 -->
			<div class="afterLoan">
				<h3>贷后跟踪</h3>
				<p>贷后催收最大的难题是贷款用户失联，无法触达用户。立趣贷后跟踪模型，借助多样你给的数据源和业务规则，可建立针对个人用户的失联跟踪模型，识别个人用户可能的新的联系方式，从而降低催收成本，减少损失。</p>
				<div class="loanFlow">
					<!-- <ul class = "loaning_list">
						<li>
							<img src="../../assets/imgs/company_30.png">
							<h4>易集成</h4>
							<span>不改变原有流程，增加立趣模块</span>
						</li>
						<li>
							<img src="../../assets/imgs/company_24.png">
							<h4>遵守全面性原则</h4>
							<span>触达客户是催收的最基本前提</span>
						</li>
						<li>
							<img src="../../assets/imgs/company_27.png">
							<h4>遵守及时性原则</h4>
							<span>发现挖掘新的触达方式</span>
						</li>
					</ul> -->
					<el-row :gutter="12" class = "loaned_list">
						<el-col :span="8">
						    <el-card shadow="always">
						    	<div class = "creditIcon icon1"></div>
						    	<h4>易集成</h4>
								<span>不改变原有流程，增加立趣模块</span>
						    </el-card>
						</el-col>
						<el-col :span="8">
						    <el-card shadow="always">
						    	<div class = "creditIcon icon2"></div>
						    	<h4>修复触达方式</h4>
								<span>触达客户是催收的最基本前提</span>
						    </el-card>
						</el-col>
						<el-col :span="8">
						    <el-card shadow="always">
						    	<div class = "creditIcon icon3"></div>
						    	<h4>丰富触达方式</h4>
								<span>发现挖掘新的触达方式</span>
						    </el-card>
						</el-col>
					</el-row>
				</div>
			</div>
			<!-- 应用案例 -->
			<div class="application_bg">
				<div class="application">
					<h3>应用案例</h3>
					<div class="application_item">
						<div class="application_desc">
							<h5>立趣信用购平台</h5>
							<p>立趣信用购平台以立趣个人信用分为依托，结合运营商智能生态，为用户提供智能硬件分期消费的服务。</p>
							<!-- <button>在线申请 ></button> -->
							<img src="../../assets/imgs/xyg_ewm.png">
						</div>
						<div class="application_pic">
							<img src="../../assets/imgs/personal_33.png">
						</div>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
	import Bscroll from 'better-scroll';
	import './personal.scss';
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