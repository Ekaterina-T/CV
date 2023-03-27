<script >
import data from '@/data/resume.json'
import ExpirienceItem from '@/components/ExpirienceItem.vue'
import CVSection from './layout/CVSection.vue'

export default {
  data() {
    return {
        title: 'Трудовая деятельность',
        log: []
    }
  },
  components: {CVSection, ExpirienceItem},
  mounted(){
    this.log = data.history
  }
}
</script>

<template>
  <CVSection :title="title">
    <template v-slot:content>
      <ul>
        <li v-for="record in log" :key="record.period.join('-')">
          <ExpirienceItem v-bind="record"/>
        </li>
      </ul>
    </template>
  </CVSection>
</template>

<style scoped lang="scss">
</style>
