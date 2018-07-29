<template>
	<div class="join_bg">
		<!-- <el-collapse @change="handleChange">
		  <el-collapse-item>
		    <template slot="title">
		      一致性 Consistency
		      <span class = "close" v-show = "show">折叠</span>
		      <span class = "open" v-show = "!show">展开</span>
		      <p>123</p>
		    </template>
		    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
		    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
		  </el-collapse-item>
		</el-collapse> -->
		<div class="join">
			<ul class="job_list">
				<li class = "job_item "  v-for = "(item, index) in jobList" :key = "index" v-bind:class="{ slideInLeft : (index%2) == 0 , 'slideInRight': (index%2) != 0  }">
					<h3 class = "job_name">{{item.jobName}}<span class = "job_date">发布时间：{{getDate}}</span></h3>
					<div class="openAndClose">
						<span class = "job_open" v-show = "index == 0?show : !show"  @click = "openAndClose">展开</span>
						<span class = "job_close" v-show = "index == 0?!show : show"  @click = "openAndClose">折叠</span>
						<i class="el-icon-arrow-down" ref = "rotate" v-show = "index == 0?show : !show"></i>
						<i class="el-icon-arrow-up" ref = "rotate" v-show = "index == 0?!show : show"></i>
						<!-- <i class="el-icon-arrow-down" ref = "rotate"></i> -->
					</div>
					<el-collapse-transition>

						<div class="job transition-box" v-show = "index == 0?show : !show">
							<h4>职责</h4>
							<ul class = "job_desc_one">
								<li v-text = "item.duty[0]"></li>
							</ul>
						</div>
					</el-collapse-transition>
					<el-collapse-transition>
						<div class="job transition-box" v-show = "index == 0?!show : show">
							<h4>职责</h4>
							<ol class = "job_desc">
								<li v-for = "(dutyItem, idx) in item.duty" :key = "idx" v-text = "dutyItem"></li>
								
							</ol>
							<h4>要求</h4>
							<ol class = "job_desc">
								<li v-for = "(requestItem, idx2) in item.request" :key = "idx2" v-text = "requestItem"></li>
							</ol>
							<h4>工作地点</h4>
							<ul class = "job_desc_one">
								<li class = "list_style_none" v-text = "item.workingPlace"></li>
							</ul>
							<button><a target = "_blank" :href = "item.link">职位申请</a></button>
						</div>
					</el-collapse-transition>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	
	import './join.scss';

	export default {
		data: function(){
			return {
				show: false,
				r: 0,
				jobList: [
					{
						jobName: 'Java软件工程师',
						time: '2018-07-01',
						duty: [
							'参与公司产品的详细设计工作；',
							'负责按照公司的软件开发规范编写相应的项目技术文档',
							'对现有系统的不足进行分析，对系统提出优化方案并进行落实；'
						],
						request: [
							'计算机软件、计算机应用或相关专业，2年以上Java开发经验；',
							'熟悉web开发流程，精通Java编程开发；精通基于J2EE下的WEB的开发技术，熟悉JAVA语言与常用开发框架的应用，如Spring、Spring Boot、MyBatis；',
							'熟悉微服务框架，Dubbo、SpringCloud其中的一个',
							'熟练html5、css、javascript、ajax、xml、dom、jquery等技术，精通页面架构和布局；',
							'熟练使用Mysql/Oracle/Sqlserver数据库中的任意一种，了解sql性能优化，有数据库设计经验，能够指导数据库程序的开发及测试工作，熟悉数据库设计规范；',
							'有电商项目经验、支付行业、金融行业或互联网金融相关项目经验优先；',
							'学习能力强，适应能力好，有潜力，有激情，自我要求高；'
						],
						workingPlace: '广州、南宁',
						link: 'https://jobs.51job.com/guangzhou-thq/84281907.html?s=01&t=0'
					},
					{
						jobName: 'Go语言开发工程师',
						time: '2018-07-01',
						duty: [
							'负责不同业务模块和数据平台的系统设计和开发(基于Golang)；',
							'负责区块链技术层代码研发;',
							'负责直接参与公司区块链底层核心模块的开发。'
						],
						request: [
							'本科及以上学历，计算机、软件工程、信息技术等其他相关专业，有良好的英语阅读能力者优先；',
							'熟练掌握Go语言，对代码基本规范有清晰的认识，3年以上Go语言项目开发经验，熟悉C/C++/Python优先；',
							'具有区块链应用的相关设计开发经验，了解区块链系统的核心思想和基础架构者优先',
							'熟悉docker工具，熟悉区块链平台(Fabric优先)；',
							'熟悉mangoDB等nosql数据库的使用和性能调优等工作；',
							'熟悉常用的数据库原理，如Oracle、MySql、Postgresql等',
							'具有丰富的linux下高性能程序的调试工作，熟悉性能提升的技巧',
							'熟悉服务端平台逻辑层开发，服务端后台逻辑开发和平台api ；',
							'对计算机网络系统有深刻理解，有分布式、点对点网络协议或应用开发经验者优先。'
						],
						workingPlace: '广州、南宁',
						link: 'https://jobs.51job.com/guangzhou-thq/102913637.html?s=01&t=0'
					},
					{
						jobName: '运维兼测试工程师',
						time: '2018-07-01',
						duty: [
							'负责数据库的日常监控、管理和调优工作；(基于Golang)；',
							'负责对应用系统和主机设备进行安全扫描、漏洞防护、攻击防护的日常操作、演练和规范建立；',
							'负责系统部署，应用发布，系统监控、维护以及服务器环境的安全保障；',
							'对需求进行分析，编写测试文档与测试用例；',
							'对前端、后台、接口等进行测试，对bug进行跟踪；',
							'支撑售后分析问题，整理问题；',
							'协助开发人员定位问题。'
						],
						request: [
							'本科，计算机专业；',
							'有责任心，勤奋好学，积极向上',
							'熟悉Linux操作系统、Mysql数据库高可用配置、性能调优技术；',
							'掌握Shell或Python脚本编写，熟悉puppet、zabbix等工具，能开发自动化运维脚本；',
							'熟悉软件测试流程及编写相关测试文档和测试用例；',
							'有mysql经验优先，有熟悉java语言优先，熟悉loadrunner以及性能监控工具优先；',
							'熟悉AWVS或Appscan等工具优先；',
							'有供应链、金融、银行支付系统测试经验者优先。'
						],
						workingPlace: '广州、南宁',
						link: 'https://jobs.51job.com/guangzhou-thq/98057785.html?s=01&t=0'
					},
					{
						jobName: '算法工程师 ',
						time: '2018-07-01',
						duty: [
							'从海量数据中，利用数据挖掘和机器学习算法技术，完成特征工程，挖掘用户偏好特征、行为规律、用户画像等；',
							'使用机器学习算法解决企业实际的业务问题；',
							'探索业界和学术界前沿的数据挖掘、机器学习的理论和实践。'
						],
						request: [
							'具有良好的数据挖掘和机器学习背景知识，熟悉算法数据结构，熟练应用相关算法进行建模；',
							'精通数据挖掘的脚本语言，R、Python中的一种，熟练使用scikit-learn等相关库；',
							'对大数据技术有深入的了解，能够使用Hadoop、spark相关技术；',
							'踏实勤奋，自我驱动，善于沟通，能适应出差',
							'具有大数据建模/机器学习算法实现经验优先；',
							'了解通信行业业务和通信数据优先；',
							'有金融风险量化分析建模经验优先。'
						],
						workingPlace: '广州、南宁',
						link: 'https://jobs.51job.com/guangzhou-thq/87592555.html?s=01&t=0'
					},
					{
						jobName: 'UI设计师 ',
						time: '2018-07-01',
						duty: [
							'负责公司门户网站、微信公众号、小程序、平台门户（产品）的视觉效果设计；',
							'负责公司产品宣传推广的物料设计，包括宣传册、宣传海报、PPT等；',
							'完成界面交互行为和功能的改良，提高产品的易用性，持续优化用户体验；',
							'参与产品的可用性测试和评估，提出改进方案，持续优化产品的用户体验。'
						],
						request: [
							'本科以上学历，美术相关专业；',
							'精通Photoshop、AE、Sketch、Illustrator、Dreamweaver、Axure等图形设计工具中两种以上；',
							'熟悉Web设计规范、制作流程，拥有自己的视觉设计理念，能够提出独到的见解；',
							'具备良好的沟通、书面表达、团队协作能力；',
							'熟悉HTML者优先；',
							'应聘时请附带自己的作品。'
						],
						workingPlace: '广州、南宁',
						link: 'https://jobs.51job.com/guangzhou-thq/104601449.html?s=01&t=0'
					}
				]
			}
		},
		computed: {
			getDate: {
				get: function(){
					var date = new Date();
					var date = new Date();
					var seperator1 = "-";
					var year = date.getFullYear();
					var month = date.getMonth() + 1;
					var strDate = date.getDate();
					if (month >= 1 && month <= 9) {
					    month = "0" + month;
					}
					if (strDate >= 0 && strDate <= 9) {
					    strDate = "0" + strDate;
					}
					var currentdate = year + seperator1 + month + seperator1 + strDate;
					return currentdate;
				},
				set: function(newValue){

				}
			}
		},
		components: {
			
		},
		methods: {
			handleChange: function(val){
				console.log(val);
				this.show = !this.show;
			},
			openAndClose: function(e){
				console.log(e.target);
				$(e.target).toggle();
				$(e.target).siblings('span').toggle();
				console.log($(e.target).parents('.job_item').find('.job'));
				$(e.target).parents('.job_item').find('.job').toggle();
				$(e.target).siblings('i').toggle();
			}
		},
		created: function(){
		},
		mounted: function(){

		}

	}
</script>