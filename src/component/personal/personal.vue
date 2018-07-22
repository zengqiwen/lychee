<template>
	<div class="personal">
			<div class="personal_pic wow slideInLeft">
				<img src="../../assets/imgs/personal_02.png">
			</div>
			<!-- 贷前评分 -->
			<div class="beforeLoan wow slideInRight">
				<div class="personal_content">
					<div class="lf" style = "width: 50%;">
						<h3>贷前信用评分</h3>
						<p>立趣个人信用分是在用户授权的情况下，依据用户在运营商上的种类消费及行为数据，结合其他行业的数据源，运用云计算鳄鱼机器学习等技术，通过逻辑回归、决策树、随机森林等模型算法，对各维度数据进行综合处理和评估，在客户身份属性、消费行为、稳定性、终端、朋友圈、号码自然属性这六个维度客观呈现个人信用头部的综合分值。</p>
						<p>立趣个人信用分的分值范围为 300 至 1000，分值越高代表信用超好，相应违约率相对较低，较高的立趣个人信用分可以帮助用户获得更高效、更优质的服务。</p>
					</div>
					<div class="rf" style = "width: 50%; text-align: center;">
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
			<div class="loaning_bg wow slideInLeft">
				<div class="loaning">
					<h3>贷中监控</h3>
					<div class="loaning_content">
						<div class="lf" style = "width: 60%; ">
							<img src="../../assets/imgs/personal_29.png">
						</div>
						<div class="rf" style = "width: 40%; ">
							<p>
								通过抓取个人用户借贷后的行为数据，借助在风险模型上的先进技术建立了针对于个人的贷中监控预警，可提前识别个人可能出现的风险，通过多种方式提醒金融公司，从而降低风险，减少损失。
							</p>
						</div>
					</div>
				</div>
				<!-- <div class="loaning">
					<h3>贷中监控</h3>
					<p>通过抓取供应企业借贷后的交易数据，借助在风险模型上的先进技术建立了针对企业的贷中监控预警，可提前识别企业可能出现的风险，通过多种方式提醒金融公司，从而降价风险，减少损失。</p>
					
				</div> -->
			</div>
			<!-- 贷后跟踪 -->
			<div class="afterLoan wow slideInRight">
				<h3>贷后跟踪</h3>
				<p>贷后催收最大的难题是贷款用户失联，无法触达用户。立趣贷后跟踪模型，借助多样你给的数据源和业务规则，可建立针对个人用户的失联跟踪模型，识别个人用户可能的新的联系方式，从而降低催收成本，减少损失。</p>
				<div class="loanFlow">
					<ul class = "loaning_list">
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
						
					</ul>
				</div>
			</div>
			<!-- 应用案例 -->
			<div class="application_bg wow slideInLeft">
				<div class="application">
					<h3>应用案例</h3>
					<div class="application_item">
						<div class="lf" style = "width: 45%;">
							<h5>区块链供应链金融——产业链价值连接者</h5>
							<p>在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，在此输入供应链区块链金融的相关描述，</p>
							<button>在线申请 ></button>
						</div>
						<div class="rf application_pic" style = "width: 55%;">
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
		methods: {

		},
		created: function(){
		},
		mounted: function(){

		}

	}
</script>