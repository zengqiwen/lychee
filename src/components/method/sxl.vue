<template>
	<div class = "sxl">
		<div class="sxl_img">
			<img src="../../assets/imgs/method_sxl.png" v-show = "!showSmall">
			<img src="../../assets/imgs/method_sxl_s.png" v-show = "showSmall">
		</div>
		<!-- 智能合约 -->
		<div class="sxl_contract">
			<h2>智能合约</h2>
			<div class="contract_content">
				<div class="content_pic">
					<img src="../../assets/imgs/method_sxl_05.png">
				</div>
				<div class="content">
					<p class="content_t">
						基于Hyperledger联盟链的二次封装，提供便捷的API接入。
					</p>
					<p class="content_b">
						通过智能合约控制供应链流程，减少人为交互，业务流程多机构进行背书，提升产业效率，智能合约减少操作失误，提供强有力的流程操作保障。
					</p>
				</div>
			</div>
		</div>
		<!-- 共识机制 -->
		<div class="sxl_management_bg ">		
			<div class="sxl_management">
				<h2>共识机制</h2>
				<div class="management_content">
					<div class="content">
						<p class="content_t">
							交易只有经过根据背书策略的背书才会宣布有效，满足多种交易的背书策略。 
						</p>
						<p class="content_b">
							为了保证交易的安全性，需要预先确定交易的背书策略，它被安装特定链码的部署交易引用，背书策略支持参数化，这些参数能被部署交易指定。背书策略组应该是一组验证过的策略，具有有限功能，为了保证有限的执行时间、决定、性能和安全做保障。
						</p>
					</div>
					<div class="content_pic">
						<img src="../../assets/imgs/method_sxl_09.png">
					</div>
				</div>
			</div>
		</div>
		<!-- 隐私保护 -->
		<div class="sxl_protect">
			<h2>隐私保护</h2>
			<div class="protect_content">
				<div class="content_pic">
					<img src="../../assets/imgs/method_sxl_12.png">
				</div>
				<div class="content">
					<p class="content_t">
						区块链具有一定的防篡改和隐私保护机制，但无细粒度节点数据隔离和基于不同角色的数据权限问题依然存在，显然不满足诸多金融业务场景，立趣提供多重隐私保护方法。
					</p>
					<p class="content_b">
						数据隐私保护（交易行为、数据内容）：已实现区块链底层同态加密算法，支持通过零知识证明方法来验证加密数据的有效性。多级权限控制：用于控制加密数据的隐私访问，利益关联方有权查看数据，其它参与方需获取授权查询。
					</p>
				</div>
			</div>
		</div>
		<!-- 核心业务流程 -->
<!-- 		<div class="sxl_main_bg ">		
			<div class="sxl_main">
				<h2>交易流程</h2>
				<div class="main_content">
					<img src="../../assets/imgs/method_sxl_15.png">
				</div>
			</div>
		</div> -->
		<!-- 方案优势  -->
		<div class="sxl_plan_bg ">		
			<div class="sxl_plan">
				<h2>方案优势</h2>
				<div class="plan_content">
					<ul class = "loaning_list">
						<li>
							<div class = "creditIcon icon1"></div>
							<h4>盘活主体资产</h4>
							<span>基于未来可预测、稳定、权属清晰的现金流进行融资，企业能快速盘活资产，获得维持和扩大经营所需的现金流。</span>
						</li>
						<li>
							<div class = "creditIcon icon2"></div>
							<h4>降低风控成本</h4>
							<span>区块链可溯源、共识和去中心化的特性，提供高度可行的环境，解决信息被篡改的问题，减少资金端的风控成本。</span>
						</li>
						<li>
							<div class = "creditIcon icon3"></div>
							<h4>提升交易透明度</h4>
							<span>区块链提供交易状态实时、可靠的视图，有效提升交易透明度，有助于建立一个更稳定可靠的供应链金融生态系统。</span>
						</li>
						
					</ul>
				</div>
			</div>
		</div>
		<!-- 平台概览 -->
		<div class="sxl_overview">
			<h2>区块链 + 供应链金融</h2>
			<p>基于不可篡改、可溯源的特性，实现供应链金融体系的信用穿透，极大提高了资金的流转，为金融机构和实体经济全产业链上下游提供一站式融资管理服务。</p>
			<div class="overview_content ">
				<img src="../../assets/imgs/method_sxl_19.png">
			</div>
		</div>
	</div>
</template>
<script>
	import './sxl.scss';

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