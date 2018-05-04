<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    // 定义html字体大小， 用于rem单位
    var html = document.documentElement;
    var hw = document.body.clientWidth;
    if(hw > 750 ){
      hw = 750;
    }
    html.style.fontSize = hw/10 + 'px';
    window.onresize = function () {
      hw = document.body.clientWidth;
      if(hw > 750 ){
        hw =750;
      }
      html.style.fontSize = hw/10 + 'px';
    }
  },
  data () {
    return {
      transitionName: 'slide-right'  // 默认动态路由变化为slide-right
    }
  },
  watch: {
    '$route' (to, from) {
      let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
      if(isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      }
  },
}
</script>

<style lang="scss">
  @import "./style/style";
</style>
