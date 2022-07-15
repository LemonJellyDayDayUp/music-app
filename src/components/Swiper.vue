<template>
  <div class="swiper">

  </div>
</template>

<script>

import { getBanner } from '@/api/index.js'

export default {
  name: 'Swiper',
  data() {
    return {

    }
  },
  mounted() {
    getBanner(1).then(res => {
      console.log(res);
    })
  }
}

</script>

<style lang="less" scoped>
.swiper {
  width: 7rem;
  height: 3rem;
  border-radius: 0.3rem;
  background-color: tomato;
  margin: 0 auto;
}
</style>
