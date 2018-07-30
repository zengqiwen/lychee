<template>
	<div class="company">
		<div class="company_pic">
			<img src="src/assets/imgs/company_02.png" v-if = "!show">
			<img src="src/assets/imgs/company_02_s.png" v-if = "show">
			<div class="title">
				<h3>企业信用</h3>
				<p>企业信用分是基于代理商与中国电信之间海量的供应链真实交易数据，依托在大数据、云计算、数据挖掘、机器学习方面的前沿技术，进行信用数据智能分析、信用价值挖掘、信用风险模型构建，客观地呈现代理商的信用状况、真实经营状况、真实业务发展状况。</p>
			</div>
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
				<!-- <img src="src/assets/imgs/company_36.png"> -->
			</div>
			<el-table
			    :data="tableData"
			    border
			    :show-header='false'
			    align="center"
			    :highlight-current-row="true"
			    style="width: 100%">
			    <el-table-column
			      prop="name"
			      align = "center"
			      :width="show?50 : 200">
			    </el-table-column>
			    <el-table-column
			      prop="desc"
			      >
			    </el-table-column>
			  </el-table>
		</div>
		<!-- 应用案例 -->
		<div class="application_bg">
			<div class="application">
				<h3>应用案例</h3>
				<div class="application_item">
					<div class="application_desc">
						<h5>区块链供应链金融——产业链价值连接者</h5>
						<p>帮助企业将数据转化为资产</p>
						<p>提供简单快捷的线上融资平台 </p>
						<p>实时对接多元化的金融机构 </p>
						<p>提升供应链市场竞争力和规模</p>
						<button>
							<a target="_blank" href="https://sfs.lychee-info.cn/chainfinance/login/signin.jsp" >在线申请 ></a>
						</button>
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
				tableData: [
					{
						name: '委外催收',
						desc: '传统的委外催收如果丢失用户的联系方式，则无法触达客户，联系不上客户自然就无法完成催收的操作。'
					},
					{
						name: '立趣失联跟踪',
						desc: '利用大数据技术，通过分析用户历史痕迹，包括身份、终端、朋友圈以及互联网等数据，全面修复失联用户新的联系方式。'
					},
					{
						name: '新触达方式',
						desc: '立趣除了能提供一般的联系方式（电话号码），立趣还能提供更多的联系方式，如：微信、微博、QQ等等。'
					}
				],
				width: 200
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