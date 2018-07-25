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
				<li class = "job_item "  v-for = "(item, index) in 4" :key = "index" v-bind:class="{ slideInLeft : (index%2) == 0 , 'slideInRight': (index%2) != 0  }">
					<h3 class = "job_name">高级Java软件工程师<span class = "job_date">发布时间：2017-10-01</span></h3>
					<div class="openAndClose" >
						<span class = "job_open" v-show = "index == 0?show : !show" @click = "openAndClose">展开</span>
						<span class = "job_close" v-show = "index == 0?!show : show" @click = "openAndClose">折叠</span>
						<i class="el-icon-arrow-up" ref = "rotate"></i>
					</div>
					<el-collapse-transition>

						<div class="job transition-box" v-show = "index == 0?show : !show">
							<h4>职责</h4>
							<ul class = "job_desc_one">
								<li>担任BI项目经理，负责BI项目全周期的管理工作;</li>
							</ul>
						</div>
					</el-collapse-transition>
					<el-collapse-transition>
						<div class="job transition-box" v-show = "index == 0?!show : show">
							<h4>职责</h4>
							<ol class = "job_desc">
								<li>担任BI项目经理，负责BI项目全周期的管理工作;</li>
								<li>研究数据分析模型、商业应用模型，分析客户需求;</li>
								<li>撰写产品需求文档，并带领项目组实施;</li>
							</ol>
							<h4>要求</h4>
							<ol class = "job_desc">
								<li>Java基础扎实，熟悉IO、集合、多线程，我解JVM、ClassLoader;</li>
								<li>熟悉spring, ibatis等常用技术框架;</li>
								<li>熟悉分布式、缓存、消息等机制，有分布式系统的设计和应用经验者优先;</li>
							</ol>
							<h4>工作地点</h4>
							<ul class = "job_desc_one">
								<li class = "list_style_none">广州、南宁</li>
							</ul>
							<button>职位申请</button>
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
				r: 0
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
				if(this.show){
					this.r += 180;
					$(this.$refs.rotate).css('transform', 'rotate('+ this.r +'deg)');
				} else {
					this.r -= 180;
					$(this.$refs.rotate).css('transform', 'rotate('+ this.r +'deg)');
				}
				

			}
		},
		created: function(){
		},
		mounted: function(){

		}

	}
</script>