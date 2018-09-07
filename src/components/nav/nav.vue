<template>
  <div class="nav">
    <div class="home">
      <router-link to='/'><h1>豆瓣</h1></router-link>
    </div>
     <div class="nav_list">
       <ul>
         <li><router-link to="/" style="color:#2384E8">电影</router-link></li>
         <li><router-link to="/" style="color:#9F7860">图书</router-link></li>
         <li><router-link to="/" style="color:#E4A813">广播</router-link></li>
         <li><router-link to="/" style="color:#2AB8CC">小组</router-link></li>
       </ul>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  display: flex;
  border-bottom: 1px solid #f3f3f3;
}
.nav .home{
  flex-grow: 1;
}
.nav .nav_list ul{
  overflow: hidden;
}
.nav .nav_list ul li{
  float: left;
  line-height: 3.5rem;
}
.nav .nav_list ul li a{
  font-size: 1.6rem;
  margin: 0 .5rem;
}
.nav .home h1{
  color:#00b600;
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 3.5rem;
}

</style>
