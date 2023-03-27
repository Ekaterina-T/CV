<script>
export default {
  props:{
    title: String,
    period: String
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <article class="record">
    <header>
        <h3 class="record_title">{{ title }}</h3>
        <span class="record_dates">{{ period }}</span>
    </header>
    <slot name="content"/>
  </article>
</template>

<style scoped lang="scss">
.record {
    font-size: 1rem;
    break-before: auto;
    break-inside: avoid;
    break-after: auto;

    &_title {
        display: inline-block;
        padding: 0 3px;
        background-color: $kPrimaryColor;
        color: $kContrastColor;
        font-weight: bold;
    }
    &_dates {
        display: block;
        margin-top: 0.2rem;
        font-size: 1.2rem;
        font-family: "IBM Plex Mono", "Times New Roman", monospace;
    }
    &_subsection{
      margin: 1.5rem 0 0.75rem 0;
    }
}
</style>
