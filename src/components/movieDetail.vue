<template>
  <div class="movieDetail">
    {{ $route.params.title }}
    <!-- {{ $route.params.rating.stars }} -->
    <!-- {{ $route.params.rating.average }} -->

    {{ $route.params.year }}

    <img :src="$route.params.img"/>
  </div>
</template>

<script>
  export default {
    name:'movieDetail',
  }
</script>

