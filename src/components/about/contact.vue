<template>
	<div class="contact_bg">
		<div class="contact_img">
		    <img src="../../assets/imgs/contact.png"  class = "about_lamp" v-show = "!showSmall">
		    <img src="../../assets/imgs/contact_s.png" class = "about_lamp" v-show = "showSmall">
		    <h2>联系我们</h2>
		</div>
		<div class="contact">
			<h1>联系方式</h1>
			<div class="contact_msg">
				<el-card shadow="always">
					<img src="../../assets/imgs/contact_05.png">
					<h3>公司地址</h3>
					<div class="contact_detail">
						广州市天河区思成路 19 号宏太智慧谷7栋 301 房
					</div>
					<button style = "background: #91bb4f">Address</button>
				</el-card>
				<el-card shadow="always">
					<img src="../../assets/imgs/contact_07.png">
					<h3>联系方式</h3>
					<div class="contact_detail">
						020-85162521
					</div>
					<button style = "background: #fcb833">Contact</button>
				</el-card>
				<el-card shadow="always">
					<img src="../../assets/imgs/contact_09.png">
					<h3>邮箱地址</h3>
					<div class="contact_detail">
						contact@lychee-info.cn
					</div>
					<button style = "background: #49cdd9"><a href = "mailto: contact@lychee-info.cn">Malbox</a></button>
				</el-card>
			</div>
			<!-- <div class="contact_map">
				<img src="../../assets/imgs/contact_15.png">
				<img src="../../assets/imgs/contact_15_s.png" class = "small_map">
			</div>
			<div class="baidumap" id="allmap">
			</div> -->
			<div style="width:100%;height:550px;border:#ccc solid 1px;font-size:12px; margin: 20px 0;" id="map"></div>
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
				}
			}
		},
		methods: {
			
/*			//地图初始化；
			initMap(){
				this.createMap(map);//创建地图
				this.setMapEvent(map);//设置地图事件
				this.addMapControl(map);//向地图添加控件
				this.addMapOverlay(map);//向地图添加覆盖物
			},
			createMap(){
				var map = new BMap.Map("map"); 
				map.centerAndZoom(new BMap.Point(113.422809,23.179879),17);
			},
			setMapEvent(){
		      	map.enableKeyboard();
		      	map.enableDragging();
		      	map.enableDoubleClickZoom()
		    },
		    addClickHandler(target,window){
		      	target.addEventListener("click",function(){
		        	target.openInfoWindow(window);
		      	});
		    },
		    addMapOverlay(){
			    var markers = [
			        {content:"地址：广州市天河路思成路19号宏太智慧谷7栋301房",title:"广州立趣信息科技",imageOffset: {width:0,height:3},position:{lat:23.180194,lng:113.423393}}
			    ];
			    for(var index = 0; index < markers.length; index++ ){
			        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
			        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
			          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
			        })});
			        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
			        var opts = {
			          width: 200,
			          title: markers[index].title,
			          enableMessage: false
			        };
			        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
			        marker.setLabel(label);
			        addClickHandler(marker,infoWindow);
			        map.addOverlay(marker);
			    };
		    },
		    addMapControl(){
				var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
				scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
				map.addControl(scaleControl);
				var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
				map.addControl(navControl);
				var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
				map.addControl(overviewControl);
			}*/
		},
		created: function(){
		},
		mounted: function(){
			if(window.innerWidth <= 768) {
				this.$store.state.home.onresize = true;
			} else {
				this.$store.state.home.onresize = false;

			};
			//百度地图；
			 // this.baiduMap();

			//创建和初始化地图函数：
			//创建和初始化地图函数：
		    function initMap(){
		      createMap();//创建地图
		      setMapEvent();//设置地图事件
		      addMapControl();//向地图添加控件
		      addMapOverlay();//向地图添加覆盖物
		    }
		    function createMap(){ 
		      map = new BMap.Map("map"); 
		      map.centerAndZoom(new BMap.Point(113.422809,23.179879),17);
		    }
		    function setMapEvent(){
		      map.enableKeyboard();
		      map.enableDragging();
		      map.enableDoubleClickZoom()
		    }
		    function addClickHandler(target,window){
		      target.addEventListener("click",function(){
		        target.openInfoWindow(window);
		      });
		    }
		    function addMapOverlay(){
		      var markers = [
		        {content:"地址：广州市天河路思成路19号宏太智慧谷7栋301房",title:"广州立趣信息科技",imageOffset: {width:0,height:3},position:{lat:23.180194,lng:113.423393}}
		      ];
		      for(var index = 0; index < markers.length; index++ ){
		        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
		        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
		          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
		        })});
		        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
		        var opts = {
		          width: 200,
		          title: markers[index].title,
		          enableMessage: false
		        };
		        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
		        marker.setLabel(label);
		        addClickHandler(marker,infoWindow);
		        map.addOverlay(marker);
		      };
		    }
		    //向地图添加控件
		    function addMapControl(){
		      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
		      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
		      map.addControl(scaleControl);
		      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
		      map.addControl(navControl);
		      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
		      map.addControl(overviewControl);
		    }
		    var map;
		    initMap();
		}

	}
</script>