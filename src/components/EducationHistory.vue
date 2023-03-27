<script >
import data from '@/data/resume.json'

import CVSection from './layout/CVSection.vue'
import CVSubSection from './layout/CVSubSection.vue'

export default {
  data() {
    return {
        title: 'Образование',
        log: []
    }
  },
  components: {CVSection, CVSubSection},
  mounted(){
    this.log = data.education
  },
  methods: {
    getPeriodStr(record) {
      return record.period.join(' - ')
    }
  },
}
</script>

<template>
  <CVSection :title="title">
    <template v-slot:content>
      <ul>
        <li v-for="record in log" :key="record.period.join('-')">
          <CVSubSection :title="record.school" :period="getPeriodStr(record)">
            <template v-slot:content>
              {{ `${record.specialty}, ${record.degree}` }}
            </template>
          </CVSubSection>
        </li>
      </ul>
    </template>
  </CVSection>
</template>

<style scoped lang="scss">
</style>
