<template>
  <div class="list">

    <listview-top :playlist="playlist" v-if="playlist !== null"></listview-top>

  </div>
</template>


<script>

import ListviewTop from '@/components/list/ListviewTop.vue'

import { getListDetail } from '@/api/index.js'

export default {
  name: 'List',
  components: {
    ListviewTop
  },
  data() {
    return {
      list: [],
      playlist: null
    }
  },
  mounted() {
    getListDetail(this.$route.query.id).then(res => {
      console.log(res.data.playlist)
      this.playlist = res.data.playlist
    })
  }
}
</script>


<style scoped>
</style>
