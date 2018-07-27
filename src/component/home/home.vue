<template>
	<div class="mx-home" ref = "wrapper">
		<div class="mx-header" id = "fixed">
			<el-row class = "header_bg">
				<el-col :span = "8" class = "logo">
					<img src="src/assets/imgs/logo.png">
				</el-col>
				<el-col :span="16">
					<el-menu :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect" style = "border: none" text-color="#666" v-if = "screenWidth > 769">
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
		  			<el-dropdown trigger="click" v-if = "screenWidth <= 768" class = "navIcon">
	  			      	<span class="el-dropdown-link">
	  			        	MENU<i class="el-icon-arrow-down el-icon--right"></i>
	  			      	</span>
	  			      	<el-dropdown-menu slot="dropdown">
		  			        <el-dropdown-item 
		  			        :divided = 'true'
		  			        v-for="(item,index) in $router.options.routes[0].children" 
							:key = "index"
							:data-path = "item.path" 
							@click.native="$router.push(item.path)">{{item.name}}</el-dropdown-item>
		  			        
	  			      	</el-dropdown-menu>
	  			    </el-dropdown>
				</el-col>
			</el-row>
		</div>
		<router-view class="section"></router-view>
		<div class = "toTop" @click = "toTop" v-if = "up">
			<img src="src/assets/imgs/toTop.png" alt = "">
		</div>
		<Foot></Foot>
	</div>
</template>
<script>
	import './home.scss';
	import Foot from '../foot/foot.vue';

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
				show: false,
				navIcon: false,
				screenWidth: window.innerWidth,
				// scrollTop: 0,
				up: false
			}
		},
		components: {
		
			Foot
		},
		watch: { 
		   screenWidth (val) { 
		    	this.screenWidth = val
		    }
		}, 
		computed: {
			active: {
				get: function(){
					return this.$store.state.home.active;
				},
				set: function(val){

				}
			},
			getScreenWidth: {
				get: function(){
					return this.screenWidth;
				},
				set: function(){

				}
			}
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
			},
			toPath: function(e){
				console.log(1,e.target.dataset.path);
			},
			toTop: function(e){
				console.log(this.scrollTop);
				$('html, body').animate({scrollTop:0}, 400);
            	// document.documentElement.scrollTop = 0
			},
			menu: function() {
			    this.scrollTop =  document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			    if(this.scrollTop > 500) {
			    	this.up = true;
			    } else {
			    	this.up = false;
			    }
			}
		},
		created: function(){
			
		},
		mounted: function(){
			window.addEventListener('scroll', this.menu);

			// console.log( window.document.body.offsetWidth, window.screen.availWidth, window.innerWidth)		
			const that = this;
	        window.onresize = () => {
	        	if(window.innerWidth <= 768) {
	        		that.$store.state.home.onresize = true;
	        	} else {
	        		that.$store.state.home.onresize = false;

	        	}
	            return (() => {
	                window.screenWidth = window.innerWidth
	                that.screenWidth = window.screenWidth
	            })()
	        };
		}

	}
</script>