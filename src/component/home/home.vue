<template>
	<div class="mx-home">
		<div class="mx-header" id = "fixed">
			<el-row class = "header_bg">
				<el-col :span = "8" class = "logo">
					<img src="../../assets/imgs/logo.png">
				</el-col>
				<el-col :span="16">
					<el-menu default-active="0" class="el-menu-demo" mode="horizontal" @select="handleSelect" style = "border: none" text-color="#666">
						<el-menu-item  
							v-for="(item,index) in $router.options.routes[0].children" 
							:index="index.toString()"
							:key = "index" 
							@click="$router.push(item.path)">
								<el-row>
									<el-col :span="24">
										{{item.name}}
									</el-col>
								</el-row>
						</el-menu-item>
		  			</el-menu>
				</el-col>
			</el-row>
		</div>
		<router-view class="section"></router-view>
		<Foot></Foot>
	</div>
</template>
<script>
	import './home.scss';
	import Foot from '../foot/foot.vue';
	import Bscroll from 'better-scroll';

	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();

	export default {
		data: function(){
			return {
				show: false
			}
		},
		components: {
		
			Foot
		},
		methods: {
			handleSelect(key, keyPath) {
			    console.log(key, keyPath);
			},
			isShow: function(){
				console.log(123);
				this.$store.state.home.show = true;
			},
			back: function(){
				// this.$router.go(-1);
				window.history.go(-1);

			}
		},
		created: function(){
			console.log()
		},
		mounted: function(){
			

		}

	}
</script>