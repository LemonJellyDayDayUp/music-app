<template>
  <div class="subTitle">

    <div class="subLeft">
      <slot name="title"></slot>
    </div>

    <div class="subRight">
      <slot name="more"></slot>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'SubTitle',
}

</script>

<style scoped>

.subTitle {
  width: 7.2rem;
  height: 0.6rem;
  margin: 0 auto;
  padding: 0 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.subTitle .subLeft {
  font-size: 0.425rem;
  font-weight: 900;
}

.subTitle .subRight {
  font-size: 0.24rem;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
  padding: 0.04rem 0.08rem;
}
</style>
