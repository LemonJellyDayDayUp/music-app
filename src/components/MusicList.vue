<template>
  <div class="musicList">

    <sub-title>
      <div slot="title">发现好歌单</div>
      <div slot="more">查看更多</div>
    </sub-title>

    <div class="list">
      <div v-for="list in musicList" class="listItem">
        <img :src="list.picUrl">
        <div class="listName">{{ list.name }}</div>
      </div>
    </div>


  </div>
</template>

<script>

import SubTitle from './SubTitle.vue'
import { getMusicList } from '@/api/index.js'

export default {

  name: 'MusicList',

  components: {
    SubTitle
  },

  data() {
    return {
      musicList: []
    }
  },

  mounted() {
    getMusicList(10).then(res => {
      // console.log(res);
      res.data.result.forEach(l => {
        this.musicList.push({ name: l.name, picUrl: l.picUrl })
      })
    })
  }

}

</script>

<style scoped>
.musicList {
  /* width: 7.2rem; */
  height: 5rem;
  margin: 0 auto;
  overflow: hidden;
}

.musicList .list {
  width: 7.5rem;
  display: flex;
  flex-wrap: nowrap;
  padding: 0.2rem;
}

.musicList .list .listItem {
  padding: 0 0.1rem;
}

.musicList .list .listItem img {
  width: 2rem;
  border-radius: 0.15rem;
}

.musicList .list .listItem .listName {
  font-size: 0.25rem;
}
</style>
