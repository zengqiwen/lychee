<template>
	<div class = "sxl">
		<!-- 智能合约 -->
		<div class="sxl_contract wow slideInLeft">
			<h2>智能合约</h2>
			<div class="contract_content">
				<div class="content_pic">
					<img src="../../assets/imgs/method_sxl_05.png">
				</div>
				<div class="content">
					<p class="content_t">
						根据不同行业领域，提供多种语言合约模板，开发者只需要简单修改其中的参数即可快速安全的实现合约功能。
					</p>
					<p class="content_b">
						在线编辑及调试工具，可以帮助开发者高效率编写调试合约。底层账本具备智能合约访问链上数据的能力;全局状态、区块数据等，同时还能操作独有的数据存储区域以及发起合约交易与其他合约交互。
					</p>
				</div>
			</div>
		</div>
		<!-- 共识机制 -->
		<div class="sxl_management_bg  wow slideInRight">		
			<div class="sxl_management">
				<h2>共识机制</h2>
				<div class="management_content">
					<div class="content">
						<p class="content_t">
							支持主流Paxos、PBFT 等适用于行业区块链网络的共识算法，并开发出满足公共区块链网络的 DPos+BFT 新算法在高性能的基础上实现高交易吞吐量、可扩展和安全性。
						</p>
						<p class="content_b">
							该算法是一种动态记账人选举的新算法，不同于传统的 POS(Proof-of-Stake)与 BFT(Byzantine Fault Tolerance)。算法的优化相比于 PoW，可有效第提高交易吞吐量并避免分叉；相比于 BFT，不需要一套固定的服务器组，同时能够抵抗女巫攻击；相比于PoS，避免恶意领导者单独形成一个分支,降低恶意领导者影响； 相比于 Ripple/Stellar 共识算法,无需用户配置复杂的信任策略。
						</p>
					</div>
					<div class="content_pic">
						<img src="../../assets/imgs/method_sxl_09.png">
					</div>
				</div>
			</div>
		</div>
		<!-- 隐私保护 -->
		<div class="sxl_protect wow slideInLeft">
			<h2>隐私保护</h2>
			<div class="protect_content">
				<div class="content_pic">
					<img src="../../assets/imgs/method_sxl_12.png">
				</div>
				<div class="content">
					<p class="content_t">
						区块链虽具备一定的匿名性，但公开的账户地址及金额是可追溯的，显然不满足诸多金融业务场景。布比区块链提供多重隐私保护方法。
					</p>
					<p class="content_b">
						数据隐私保护（交易行为、数据内容）：已实现区块链底层同态加密算法，支持通过零知识证明方法来验证加密数据的有效性。多级权限控制：用于控制加密数据的隐私访问，利益关联方有权查看数据，其它参与方需获取授权查询。
					</p>
				</div>
			</div>
		</div>
		<!-- 核心业务流程 -->
		<div class="sxl_main_bg  wow slideInRight">		
			<div class="sxl_main">
				<h2>共识机制</h2>
				<div class="main_content">
					<img src="../../assets/imgs/method_sxl_15.png">
				</div>
			</div>
		</div>
		<!-- 平台概览 -->
		<div class="sxl_overview wow slideInLeft">
			<h2>平台概览</h2>
			<p>在此输入信世链的描述，在此输入信世链的描述在此输入信世链的描述</p>
			<div class="overview_content  wow slideInRight">
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
		methods: {

		},
		created: function(){
		},
		mounted: function(){

		}

	}
</script>