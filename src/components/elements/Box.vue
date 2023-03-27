<script>
export default {
    props: {
    title: String,
  },
  data() {
    return {}
  }
}
</script>

<template>
  <div class="box">
    <header class="box_title">{{ title }}</header>
    <p class="box_content">
        <slot></slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
.box {
    border-radius: 10px;
    padding: 0rem 2.5rem 0.5rem 1rem;
    background-color: $kSecondaryColor;
}

.box_title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.box_content {
    line-height: 1rem;
}
</style>
