<template>
  <div class="banner" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)">
    <!-- <div class="banner" ref="banner" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)"> -->

    <div class="wrap" :style="wrapStyle" @transitionend="transitionend()">
      <img :src="pictures[len - 1]">
      <img v-for="pic in pictures" :src="pic">
      <img :src="pictures[0]">
    </div>

    <div class="circle">
      <span v-for="cir in circles" :class="cir"></span>
    </div>

  </div>
</template>

<script>

import { getBanner } from '@/api/index.js'

export default {
  name: 'Banner',

  data() {
    return {
      pictures: [require('../assets/loading.png')],
      circles: [],
      len: 0,

      startPointX: 0,
      startLeft: 0,
      movePointX: 0,

      currentIndex: 0,
      lastIndex: 0,
      timer: null,

      imgWidth: 0,
      backWidth: 0,

      wrapStyle: {
        transition: 'null',
        transform: 'translateX(-7.5rem)'
      }
    }
  },

  mounted() {
    const that = this
    that.pictures = []
    getBanner(1).then(res => {
      res.data.banners.forEach(b => {
        that.pictures.push(b.pic)
        that.circles.push('basic')
      })
    })

    // this.imgWidth = this.$refs.banner.offsetWidth
    this.imgWidth = document.querySelector('.banner').offsetWidth
    this.backWidth = this.imgWidth / 5

    this.timer = setInterval(this.move, 3000)
  },

  watch: {
    'pictures.length': {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.len = newValue
        }
      }
    }
  },

  methods: {

    touchstart(event) {

      clearInterval(this.timer)

      if (this.currentIndex === -1) this.currentIndex = this.len - 1
      else if (this.currentIndex === this.len) this.currentIndex = 0

      // this.circles[this.currentIndex] = 'active'

      this.wrapStyle.transition = 'null'
      this.wrapStyle.transform = `translateX(${-this.currentIndex * this.imgWidth - this.imgWidth}px)`

      this.startPointX = event.changedTouches[0].pageX
      this.startLeft = parseFloat(this.wrapStyle.transform.split('(')[1])
    },

    touchmove(event) {
      this.movePointX = event.changedTouches[0].pageX - this.startPointX
      this.wrapStyle.transform = `translateX(${this.startLeft + this.movePointX}px)`
    },

    touchend(event) {
      this.movePointX = event.changedTouches[0].pageX - this.startPointX
      if (Math.abs(this.movePointX) > this.backWidth)
        this.currentIndex -= this.movePointX / Math.abs(this.movePointX)
      this.wrapStyle.transition = '300ms'
      this.wrapStyle.transform = `translateX(${-this.currentIndex * this.imgWidth - this.imgWidth}px)`

      let temp = this.currentIndex
      if (temp === -1) temp = this.len - 1
      else if (temp === this.len) temp = 0
      this.circles[this.lastIndex] = 'basic'
      this.circles[temp] = 'active'
      this.lastIndex = temp

      this.timer = setInterval(this.move, 3000)
    },

    transitionend() {
      if (this.currentIndex === -1) this.currentIndex = this.len - 1
      else if (this.currentIndex === this.len) this.currentIndex = 0
      this.wrapStyle.transition = 'null'
      this.wrapStyle.transform = `translateX(${-this.currentIndex * this.imgWidth - this.imgWidth}px)`
    },

    move() {
      this.currentIndex++
      this.wrapStyle.transition = '300ms'
      this.wrapStyle.transform = `translateX(${-this.currentIndex * this.imgWidth - this.imgWidth}px)`
      let temp = this.currentIndex
      if (temp === -1) temp = this.len - 1
      else if (temp === this.len) temp = 0
      this.circles[this.lastIndex] = 'basic'
      this.circles[temp] = 'active'
      this.lastIndex = temp
    }

  }

}

</script>

<style scoped>
.banner {
  /* width: 7rem; */
  height: 2.7rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  /* border-radius: 0.3rem; */

  width: 7.5rem;
}

.banner .wrap {
  display: flex;
  flex-wrap: nowrap;
  /* 去除 img 元素的默认间隙 */
  font-size: 0px;
}

.banner .wrap img {
  /* width: 100%; */
  vertical-align: middle;

  width: 7rem;
  border-radius: 0.3rem;
  margin: 0 0.25rem;
}

.banner .circle {
  position: absolute;
  bottom: 0.2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner .circle span {
  width: 10px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 3px;
  border-radius: 2px;
}

.banner .circle span.active {
  background-color: rgba(255, 255, 255, 1);
}
</style>
