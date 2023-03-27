<script >

export default {
  props: {
    title: String
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <section class="history">
    <h2 class="history_title">{{ title }}</h2>
    <slot name="content"/>
  </section>
</template>

<style scoped lang="scss">

.history {
  break-before: auto;
  break-after: auto;

  &_title{
    margin-bottom: 1rem;
    font-size: 1.75rem;
    font-weight: bold;
  }
}
</style>
