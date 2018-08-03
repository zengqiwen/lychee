<template>
	<div class="method">
		<router-view></router-view>
	</div>
</template>
<script>

	import './method.scss';

	export default {
		data: function(){
			return {
				
			}
		},
		computed: {
		
		},
		components: {
			
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