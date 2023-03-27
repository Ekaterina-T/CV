<script>
import List from './elements/List.vue'

export default {
    props:{
        title: String,
        data: Array
    },
  data() {
    return {
    }
  },
  components: { List }
}
</script>

<template>
  <section class="expirience-section">
    <header v-if="title">
        <h4 class="expirience-section_title">{{ title }}</h4>
    </header>
    <List :data="data"></List>
  </section>
</template>

<style scoped lang="scss">
.expirience-section {
  &_title {
    font-style: italic;
    text-decoration: underline;
  }
}
</style>
