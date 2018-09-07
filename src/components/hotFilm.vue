<template>
  <div class='movie'>
    <div class="title">
      <h2>热门电影</h2>
    </div>
    <div class="movie_list">
      <ul>
        <li v-for="movie in movie_list">
          <router-link :to="{
            name:'movieDetail',
            params:{
              title:movie.title, //标题
              img:movie.images.large, // 图片
              year:movie.year, //年份
              //stars:movie.rating.stars,
              average:movie.rating.average
              }
            }">
            <div class="pohoto">
              <img :src="movie.images.small" :title='movie.title'>
            </div>
            <p>
              {{ movie.title }}
            </p>
            <span>
              {{ movie.rating.stars}}
            </span>
            <span> 
              {{ movie.rating.average }}
            </span>
          </router-link>      
        </li>
      </ul>
    </div>  
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'hotFilm',
    data(){
      return{
        movie_list:[]
      }
    },
    created (){
      let that = this
      axios.get('/movie/in_theaters')
      .then(res => {
        that.movie_list = res.data.subjects
        // console.log(res.data.subjects)
      })
      .catch(e => alert(e))
    }
  }
</script>
<style scoped>
  .movie .title h2 {
    font-size: 2.4rem;
    line-height: 6rem;
    color: #494949;
  }

  .movie_list ul {
    display: flex;
    flex-wrap: wrap;
  }

  .movie_list ul li {
    /* flex-basis: 33.33%; */
    /* flex-basis: calc(33.33% - 1rem); */
    width: 33.33%;
    padding: 0 4%;
    text-align: center;
    margin-bottom: 1rem;
  }
  .movie_list ul li .pohoto{
    overflow: hidden;
  }
  .movie_list ul li img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .movie_list ul li p {
    font-size: 1.4rem;
    color: #494949;
    margin: .3rem 0;
    font-family: "Microsoft Yahei";
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>