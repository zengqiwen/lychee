<template>
	<div class="contact">
		<h1>联系方式</h1>
		<div class="contact_msg">
			<el-card shadow="always">
				<img src="src/assets/imgs/contact_05.png">
				<h3>公司地址</h3>
				<div class="contact_detail">
					广州市天河区思成路 19 号宏太智慧谷7栋 301 房
				</div>
				<button style = "background: #91bb4f">Address</button>
			</el-card>
			<el-card shadow="always">
				<img src="src/assets/imgs/contact_07.png">
				<h3>联系方式</h3>
				<div class="contact_detail">
					020-85162521
				</div>
				<button style = "background: #fcb833">Contact</button>
			</el-card>
			<el-card shadow="always">
				<img src="src/assets/imgs/contact_09.png">
				<h3>邮箱地址</h3>
				<div class="contact_detail">
					contact@lychee-info.cn
				</div>
				<button style = "background: #49cdd9">Malbox</button>
			</el-card>
		</div>
		<div class="contact_map">
			<img class = "wow slideInUp" src="src/assets/imgs/contact_15.png">
		</div>
	</div>
</template>
<script>
	
	import './contact.scss';

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