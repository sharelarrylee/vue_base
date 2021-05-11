<template>
  <div class="index-page">
     {{msg}}
     <router-link to="/order">订单</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return { 
      msg: 'this is Index page...'
    }
  },
  mounted(){
    this.$http.get(
          'testServer/order/borrowOrder/queryApplyOrderDetailById?token=9682996366387399&osVersion=v1.1.2&reqApplicationType=ios&reqApplicationVersion=2.1&osName=ios&mobileModel=ios&appDownChannel=appStore',
          {}
        ).then((res) => {
          console.log(res);
        },(err)=>{
          console.log(err,'请求失败');
        });   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
body{
  background-color: #ababab;
}
.hello{
  
  
}
a {
  color: #42b983;
}
</style>
