<template>
  <div class="home">
    <Tabs />
    <router-view/>
  </div>
</template>

<script>

import Tabs from './nav/tabs'
export default {
  components:{
    Tabs
  },
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
