<template>
  <div class="home">

    <top-nav></top-nav>
    <swiper></swiper>

  </div>
</template>


<script>

import TopNav from '@/components/TopNav.vue'
import Swiper from '@/components/Swiper.vue'

export default {
  name: 'Home',
  components: {
    TopNav,
    Swiper
  },
  data() {
    return {

    }
  },
}
</script>


<style lang="less" scoped>
</style>
