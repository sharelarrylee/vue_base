<template>
  <div class="hello">
     {{msg}}
     <span @click="back">返回</span>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      msg: '订单模块'
    }
  },
  methods:{
      back(){
        this.$router.goBack('')
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  body{

  }
</style>
