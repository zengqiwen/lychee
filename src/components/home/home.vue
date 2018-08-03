<template>
	<div class="mx-home" ref = "wrapper">
		<div class="mx-header" id = "fixed">
			<el-row class = "header_bg">
				<el-col :span = "8" class = "logo">
					<img src="../../assets/imgs/logo.png">
				</el-col>
				<el-col :span="16">
					<el-menu :default-active="active" class="el-menu-demo navlist" mode="horizontal" @select="handleSelect" style = "border: none;" text-color="#666" v-if = "screenWidth > 769" onmouseover="this.style.backgroundColor='#ffffff'" onmouseleave="this.style.backgroundColor='#ffffff'">
						<div class="menu_list" v-for="(item,index) in $router.options.routes[0].children" >
							<el-menu-item  
								v-if = "!item.children"
								:index="index.toString()"
								:key = "index" 
								@click="$router.push(item.path)">
									<el-row>
										<el-col :span="24">
											{{item.name}}
										</el-col>
									</el-row>
							</el-menu-item>

							<el-submenu :index="index.toString()" v-if = "item.children" style = "width: 120px;height: 56px;">
							    <template slot="title">{{item.name}}</template>
							    <el-menu-item class = "subnav" 
							    	v-for = "(item2, index2) in item.children" 
							    	:key = "index2" :index = 'index.toString() + "-" + index2.toString()' 
							    	v-if = "!item2.hidden"
							    	@click.native="$router.push(item2.path)" 
							    	style = "borderTop: 1px solid #ccc; margin: 0; height: 50px;line-height:50px;textAlign:center" 
							    	onmouseover="this.style.backgroundColor='#ecf5ff'" 
							    	onmouseleave="this.style.backgroundColor='#ffffff'">
							    	{{item2.name}}
							    </el-menu-item>
							</el-submenu>
						</div>
		  			</el-menu>
		  			<!-- <el-dropdown trigger="click" v-if = "screenWidth <= 768" class = "navIcon">
	  			      	<span class="el-dropdown-link">
	  			        	MENU<i class="el-icon-arrow-down el-icon--right"></i>
	  			      	</span>
	  			      	<el-dropdown-menu slot="dropdown">
		  			        <el-dropdown-item 
		  			        :divided = 'true'
		  			        v-for="(item,index) in $router.options.routes[0].children" 
							:key = "index"
							:data-path = "item.path" 
							@click.native="$router.push(item.path)">
							{{item.name}}
						</el-dropdown-item>
		  			        
	  			      	</el-dropdown-menu>
	  			    </el-dropdown> -->
	  			    <div class = "menu_m">
	  			    	<span @click = "showMenu">MENU</span>
		  			    <el-menu v-if = "screenWidth <= 768" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :unique-opened="true" style = "borderLeft: 1px solid #ccc;" >
		  			    	<div class="menu_list_m" 
		  			    		v-for="(item,index) in $router.options.routes[0].children" 
		  			      		:key = "index"
		  			      		>
		  			    		
			  			      	<el-menu-item v-if = "!item.children" :index="index.toString()" @click.native="goto(item.path)"> 
			  			        	<span slot="title">{{item.name}}</span>
			  			      	</el-menu-item>
		  	  			      	<el-submenu 
		  	  			      		:index="index.toString()" 
		  	  			      		v-if = "item.children" 
		  	  			      		style = "borderBottom: 1px solid #ccc; ">
		  	  			        	<template slot="title">
		  	  			          		<span>{{item.name}}</span>
		  	  			        	</template>
		  	  			        	<el-menu-item 
		  	  			        		v-for = "(item2, index2) in item.children" 
		  	  			        		v-show = "!item2.hidden"
		  	  			        		:key = "index2" :index = 'index.toString() + "-" + index2.toString()'
		  	  			        		@click.native="goto(item2.path)"
		  	  			        		>
		  	  			        		{{item2.name}}
		  	  			        	</el-menu-item>
		  	  			      	</el-submenu>
		  			    	</div>
		  			     
		  			    </el-menu>
	  			    </div>
				</el-col>
			</el-row>
		</div>
		<router-view class="section"></router-view>
		<div class = "toTop" @click = "toTop" v-if = "up">
			<img src="../../assets/imgs/toTop.png" alt = "">
		</div>
		<Foot></Foot>

	</div>
</template>
<script>
	import './home.scss';
	import Foot from '../foot/foot.vue';

/*	var wow = new WOW(
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
	wow.init();*/ 
	export default {
		data: function(){
			return {
				show: false,
				navIcon: false,
				screenWidth: window.innerWidth,
				// scrollTop: 0,
				up: false,
				options: [
					{
						value: 'zhinan',
						label: '指南',
						children: [
							{
								value: 'shejiyuanze',
								label: '设计原则',
							}, 
							{
								value: 'daohang',
								label: '导航',
								el: '顶部导航'
							}
						]
					}
				]
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
			goto: function(e){
				this.$router.push(e);
				$('.el-menu-vertical-demo').hide(300);
			},
			showMenu: function(e){
				$(e.target).next().toggle();
			},
			handleOpen(key, keyPath) {
		    },
		    handleClose(key, keyPath) {
		    },
			aaa: function(e){
				this.$router.push('/news');

			},
			mobileSelect: function(key, keypath){
			},
			handleSelect(key, keyPath) {
			},
			isShow: function(){
				this.$store.state.home.show = true;
			},
			back: function(){
				// this.$router.go(-1);
				window.history.go(-1);
			},
			toPath: function(e){
			},
			toTop: function(e){
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
			//监听滚动；
			window.addEventListener('scroll', this.menu);

			//菜单隐藏；
			$(document).click(function(){
				$('.el-menu-vertical-demo').hide();
			});

			$('.el-menu-vertical-demo').click(function(event){
				event.stopPropagation();
			});
			$('.menu_m').click(function(event){
				event.stopPropagation();
			});

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