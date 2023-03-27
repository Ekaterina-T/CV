<script>
import moment from 'moment'
import Duration from '@/tools/Duration'

import CVSubSection from './layout/CVSubSection.vue'
import ExpirienceItemSection from './ExpirienceItemSection.vue'

export default {
  props:{
      jobTitle: String,
      employer: String,
      period: Array,
      city: String,
      description: Object
  },
  data() {
    return {
    }
  },
  components: { CVSubSection, ExpirienceItemSection },
  computed: {
    title() {
        const title = [this.jobTitle, this.employer]
        this.city && title.push(this.city)
        return title.join(', ')
    },
    workPeriod() {
      const format = 'DD/MM/YYYY HH:mm:ss'
      const [start, end] = this.period.map(el => moment(`01/${el} 00:00:00`, format, true))
      const duration  = new Duration(start, end.add(1, 'M'))
      return `${this.period.join(' - ')}, ${duration.getHumanReadInterval()}`
    },
    hasAchievements() {
      return this.description?.achievments.length > 0
    }
  }
}
</script>

<template>
  <CVSubSection :title="title" :period="workPeriod">
    <template v-slot:content>
      <ExpirienceItemSection
        :data="description.main"
        class="record_subsection"
      />
      <ExpirienceItemSection
        v-if="hasAchievements"
        title="Достижения"
        :data="description.achievments"
        class="record_subsection"
      />
    </template>
  </CVSubSection>
</template>

<style scoped lang="scss">
.record {
    &_subsection{
      margin: 1.5rem 0 0.75rem 0;
    }
}
</style>
