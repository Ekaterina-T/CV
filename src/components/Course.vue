<script>
export default {
  props: {
    course: String,
    institution: String,
    period: String
  },
  data() {
    return {}
  }
}
</script>

<template>
    <p class="course">
        <span class="course_label">{{ `${course}, ${institution}` }}</span>
        <br/>
        <span class="course_period">{{ period }}</span>
    </p>
</template>

<style scoped lang="scss">
.course{
    &_label{
        font-weight: 500;
    }
    &_period{
        font-size: 0.75rem;
    }
}
</style>
