<template>
  <div class="iconList">

    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-dianzan-"></use>
      </svg>
      <span>每日推荐</span>
    </div>

    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xinhao-"></use>
      </svg>
      <span>私人FM</span>
    </div>

    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinlegedan-"></use>
      </svg>
      <span>歌单</span>
    </div>

    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang-"></use>
      </svg>
      <span>排行榜</span>
    </div>

  </div>
</template>

<script>

export default {
  name: 'IconList',
}

</script>

<style scoped>
.iconList {
  width: 7.5rem;
  display: flex;
  justify-content: space-around;
  padding: 0.25rem 0.2rem;
  margin: 0 auto;
}

.iconList .iconItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1.2rem;
}

.iconList .iconItem .icon {
  width: 0.7rem;
  height: 0.7rem;
}

.iconList .iconItem span {
  font-size: 0.28rem;
}
</style>
