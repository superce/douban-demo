<template>
  <div class="tab">
    <ul>
      <li><router-link to='/hot-film'>影院热映</router-link></li>
      <li><router-link to='/'>欧美新碟</router-link></li>
      <li><router-link to='/'>豆瓣时间</router-link></li>
      <li><router-link to='/'>使用豆瓣App</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'Tabs'
  }
</script>

<style scoped>
.tab{
  margin-top: 1rem;
}
  .tab ul{
    display: flex;
    flex-wrap: wrap;
  }
  .tab ul li{
    width:48%;
    background: #f6f6f6;
    margin: 1rem 1% 0 1%;
    text-align: center;
  }
  .tab ul li a{
    font-size: 1.4rem;
    color:#494949;
    padding: 1rem 2rem;
    line-height: 4rem;
  }
</style>
