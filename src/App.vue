<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <spinner v-show="false"></spinner>
  </div>
</template>
<script type="text/javascript">
  import spinner from './components/spinner/spinner.vue';
  export default {
    name: "app",
    components: {
      spinner
    },
    created: function(){
      window.scrollTo(0,0);
      this.$router.push('/');
    },
    mounted: function(){
  
    }
  }

</script>

<style lang="scss">
  *{margin:0;padding:0;}
  html, body{
    font-family: SourceHanSansCN-Normal, Helvetica Neue,Helvetica,Arial,sans-serif !important;
    width: 100%;
    font-size: 14px;
  }
  #app {
    position: relative;
    width: 100%;
  }
</style>

