<template>
  <div class="home">

    <top-nav></top-nav>
    <banner></banner>
    <icon-list></icon-list>
    <music-list></music-list>

  </div>
</template>


<script>

import TopNav from '@/components/home/TopNav.vue'
import Banner from '@/components/home/Banner.vue'
import IconList from '@/components/home/IconList.vue'
import MusicList from '@/components/home/MusicList.vue'

export default {
  name: 'Home',
  components: {
    TopNav,
    Banner,
    IconList,
    MusicList
  },
  data() {
    return {

    }
  },
}
</script>


<style scoped>
</style>
