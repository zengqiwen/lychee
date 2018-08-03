<template>
	<div class="company">
		<div class="company_img">
			<img src="../../assets/imgs/method_company.png" v-show = "!showSmall">
			<img src="../../assets/imgs/method_company_s.png" v-show = "showSmall">
			<div class="company_title">
				<h1>成本更少</h1>
				<h3>提供在线申请信用提货的服务</h3>
				<p>减少经营成本，提高经营效率</p>
				<!-- <button>在线申请</button> -->
			</div>
		</div>
		<!-- 解决方案 -->
		<div class="company_plan_bg">		
			<div class="company_plan">
				<h2>解决方案</h2>
				<div class="plan_content">
					<el-card shadow="always">
					    <div class="loanPlan">
					    	<img src="../../assets/imgs/method_company_07.png">
					    	<div>
					    		<span></span>
					    	</div>
					    </div>
					    <h3>企业信用贷款解决方案</h3>
					    <p>
					    	立趣信息科技与宝凯道融、海尔消费金融、铭诚保理等多家金融机构合作，为中国电信代理商提供在线申请融资贷款的服务，改变了传统金融机构偏重线下业务办理的模式。只需在线填写申请资料，即可快速、便捷的申请融资贷款。
					    </p>
					</el-card>
					<el-card shadow="always">
					    <div class="loanPlan">
					    	<img src="../../assets/imgs/method_company_10.png">
					    	<div>
					    		<span></span>
					    	</div>
					    </div>
					    <h3>企业信用提货解决方案</h3>
					    <p>
					    	供应链企业凭借立趣企业信用分可转化为在广西好机友网络科技有限公司(以下简称”好机友平台”) 的信用提货额度，通过在好机友平台提交相应提货申请即可实现信用提货，先提货再在一定帐期内销售出去，然后将销售货款再兑付给好机友平台，从而极大的缓解代理商的资金压力，为代理商更好的发展电信业务提供强有力的帮助和支持，也帮助代理商减少交易成本，提高经营效率。
					    </p>
					</el-card>
				</div>
			</div>
		</div>
		<!-- 服务覆盖 -->
		<div class="company_map">
			<h2>让服务覆盖全国各地</h2>
			<p>目前业务已经覆盖全国多个地市</p>
			<img src="../../assets/imgs/method_company_15.png">
		</div>
		<!-- 合作机构 -->
		<div class="company_coop_bg ">
			<div class="company_coop">
				<h2>合作金融机构<span></span></h2>
				<div class="coops">
					<div class="coops_item">
						<img src="../../assets/imgs/coop-bok2.png">
					</div>
					<div class="coops_item">
						<img src="../../assets/imgs/coop-mingcheng.png">
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import './methodCompany.scss';

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
					console.log('newValue', newVal);
					console.log('oldValue', oldVal);
				}
			}
		},
		methods: {

		},
		created: function(){
		},
		mounted: function(){

		}

	}
</script>