<template>
	<div class="personal">
		<div class="personal_img">
			<img src="../../assets/imgs/method_personal.png" v-show = "!showSmall">
			<img src="../../assets/imgs/method_personal_s.png" v-show = "showSmall">
			<div class="personal_title">
				<h1>你守信我买单</h1>
				<h3>信用手机0元购</h3>
				<p>信用当钱花</p>
				<!-- <button>在线申请</button> -->
			</div>
		</div>
		<!-- 解决方案 -->
		<div class="personal_plan_bg">		
			<div class="personal_plan">
				<h2>解决方案</h2>
				<div class="plan_content">
					<el-card shadow="always">
					    <div class="loanPlan">
					    	<img src="../../assets/imgs/method_company_07.png">
					    	<div>
					    		<span></span>
					    	</div>
					    </div>
					    <h3>个人信用租机解决方案</h3>
					    <p>
					    	公众用户凭借立趣个人信用分，可在中国电信已开展信用租机业务的任意门店，直接获取金融机构给予的授信额度。用户只需向中国电信承诺连续24个月每月最低套餐消费金额，即可以0元租用授信额度相对应的手机终端。租赁期内，用户只需每月足额缴纳最低套餐消费金额，租期满可直接获得手机所有权。
					    </p>
					</el-card>
					<el-card shadow="always">
					    <div class="loanPlan">
					    	<img src="../../assets/imgs/method_company_10.png">
					    	<div>
					    		<span></span>
					    	</div>
					    </div>
					    <h3>政企信用租机解决方案</h3>
					    <p>
					    	政企客户下的员工用户也可凭借立趣个人信用分及政企客户自身的背书，参与政企渠道信用租机。目前，立趣信息科技的控股公司好机友平台已与广西电信签署政企渠道信用租机协议，在广西全省开展政企渠道信用租机业务。
					    </p>
					</el-card>
				</div>
			</div>
		</div>
		<!-- 服务覆盖 -->
		<div class="personal_map">
			<h2>让服务覆盖全国各地</h2>
			<p>目前业务已在全国多个省内开展</p>
			<img src="../../assets/imgs/method_personal_15.png">
		</div>
		<!-- 合作机构 -->
		<div class="personal_coop_bg">
			<div class="personal_coop">
				<h2>合作伙伴<span></span></h2>
				<div class="coops">
					<div class="coops_item">
						<img src="../../assets/imgs/coop-telecom.png">
					</div>
					<div class="coops_item">
						<img src="../../assets/imgs/coop-unicom.png">
					</div>
					<div class="coops_item">
						<img src="../../assets/imgs/coop-besttone.png">
					</div>
					<div class="coops_item">
						<img src="../../assets/imgs/coop-haier2.png">
					</div>
					<div class="coops_item">
						<img src="../../assets/imgs/coop-wuxi.png">
					</div>
					<div class="coops_item">
						<img src="../../assets/imgs/coop-xiaonuo.png">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import './methodPersonal.scss';

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