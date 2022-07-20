<template>
  <div class="listviewTop">

    <img class="bg" :src="playlist.coverImgUrl">

    <div class="listViewTopNav">
      <div class="left">
        <span class="iconfont icon-back"></span>
        <span class="title">歌单</span>
      </div>
      <div class="right">
        <span class="iconfont icon-search"></span>
        <span class="iconfont icon-moreandroid"></span>
      </div>
    </div>


    <div class="content">

      <div class="cover">
        <span class="iconfont icon-bofang4">
          {{ changeValue(playlist.playCount) }}
        </span>
        <img :src="playlist.coverImgUrl">
      </div>

      <div class="info">
        <h3>{{ playlist.name }}</h3>
        <div class="creator">
          <img :src="playlist.creator.avatarUrl">
          <span>{{ playlist.creator.nickname }}</span>
        </div>
        <div class="description">{{ playlist.description }}</div>
      </div>

    </div>


  </div>
</template>


<script>

export default {

  name: 'ListviewTop',

  data() {
    return {
    }
  },

  props: {
    playlist: {
      type: Object,
      default() {
        return {
          coverImgUrl: require('@/assets/loading.png')
        }
      }
    }
  },

  mounted() {
    // console.log(this.props)
  },

  methods: {
    changeValue(num) {
      if (num > 100000000) num = (num / 100000000).toFixed(1) + '亿'
      else if (num > 10000) num = (num / 10000).toFixed(1) + '万'
      return num
    }
  }

}
</script>


<style scoped>
.listviewTop {
  width: 7.5rem;
  height: 5rem;
  padding: 0 0.25rem;
  color: white;
}

.bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 7.5rem;
  height: auto;
  z-index: -1;
  filter: blur(40px);
}

.listViewTopNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.2rem;
  font-size: 0.4rem;
  line-height: 0.8rem;
  margin: 0.2rem 0;
}

.listViewTopNav .iconfont {
  font-size: 0.5rem;
}

.listViewTopNav .left,
.listViewTopNav .right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.listViewTopNav .left .title,
.listViewTopNav .right .icon-moreandroid {
  margin-left: 0.4rem;
}

.content {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 2.5rem;
}

.content .cover {
  position: relative;
  width: 2.7rem;
  font-size: 0px;
}

.content .cover span {
  position: absolute;
  z-index: 1;
  right: 0.1rem;
}

.content .cover img {
  width: 100%;
  border-radius: 0.1rem;
}

.content .info {
  margin-left: 0.3rem;
  width: 4.5rem;
}

.content .info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}

.content .cover span,
.content .info .creator,
.content .info .description {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.648);
}

.content .info .creator {
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 14px;
}

.content .info .creator img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.1rem;
}

.content .info .description {
  /* 多行文本溢出显示省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
