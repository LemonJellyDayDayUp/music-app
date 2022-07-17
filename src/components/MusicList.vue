<template>
  <div class="musicList">

    <sub-title>
      <div slot="title">发现好歌单</div>
      <div slot="more">查看更多</div>
    </sub-title>

    <div class="list" :style="{ transform: `translateX(${listTranslateX}px)` }" @touchstart="touchstart($event)" @touchmove="touchmove($event)">
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
      musicList: [],

      startPointX: 0,
      startLeft: 0,
      movePointX: 0,

      listTranslateX: 0,

      musicListWidth: 0,
      musicListPadding: 0,
      listItemWidth: 0,
      maxTranslateX: 0,

      num: 10
    }
  },

  mounted() {
    getMusicList(this.num).then(res => {
      // console.log(res);
      res.data.result.forEach(l => {
        this.musicList.push({ name: l.name, picUrl: l.picUrl })
      })
    })
  },

  updated() {
    if (this.musicListWidth === 0)
      this.musicListWidth = document.querySelector('.musicList').offsetWidth
    if (this.musicListPadding === 0)
      this.musicListPadding = parseFloat(getComputedStyle(document.querySelector('.list'), null).paddingLeft)
    if (this.listItemWidth === 0)
      this.listItemWidth = document.querySelector('.listItem').offsetWidth
    if (this.maxTranslateX === 0)
      this.maxTranslateX = this.listItemWidth * this.num - this.musicListWidth + this.musicListPadding * 2
  },

  methods: {
    touchstart(event) {
      this.startPointX = event.changedTouches[0].pageX
      this.startLeft = parseFloat(this.listTranslateX)
    },

    touchmove(event) {
      this.movePointX = event.changedTouches[0].pageX - this.startPointX
      this.listTranslateX = this.startLeft + this.movePointX
      if (this.listTranslateX > 0) this.listTranslateX = 0
      else if (Math.abs(this.listTranslateX) > this.maxTranslateX) this.listTranslateX = 0 - this.maxTranslateX
    },
  }

}

</script>

<style scoped>
.musicList {
  width: 7.5rem;
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
