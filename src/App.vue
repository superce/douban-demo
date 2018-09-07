<template>
  <div id="app">
    <Nav class="app_nav"/>
    <router-view />
  </div>
</template>

<script>
import Nav from './components/nav/nav'
export default {
  components:{
    Nav
  },
  name: 'App'
}
</script>

<style>
*{
  box-sizing: border-box;
}
#app{
  width:96%;
  margin: 0 auto;
}

</style>
