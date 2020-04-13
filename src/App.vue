<template>
<div>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <footer-bar class="footer"></footer-bar>
</div>
 
</template>

<script>
 import footerBar from './components/footer'
 import navBar from './components/nav-bar'


export default {
  name: 'app',
  components:{
     footerBar,
     navBar, 
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.footer{
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
}
</style>
