<script>
import Intro from '@/components/Intro.vue'
import EmploymentHistory from '@/components/EmploymentHistory.vue';
import EducationHistory from './components/EducationHistory.vue';
import Box from './components/elements/Box.vue';
import ExternalLink from './components/elements/ExternalLink.vue';
import Course from './components/Course.vue';
import ContentRow from './components/elements/ContentRow.vue';

import data from '@/data/resume.json'

export default {
  data() {
    return {
        title: 'Образование',
        skills: [],
        links: [],
        courses: [],
        languages: []
    }
  },
  components: {Intro, EmploymentHistory, EducationHistory, Box, ExternalLink, Course, ContentRow},
  mounted(){
    this.skills = data.skills
    this.links = data.links
    this.courses = data.courses.map(el => ({...el, period: el.period.join(' - ')}))
    this.languages = data.languages
  },
  methods: {
    getPeriodStr(record) {
      return record.period.join(' - ')
    }
  },
}
</script>

<template>
  <main>
    <Intro />
    <div class="main">
      <div class="column__right">
        <EmploymentHistory />
        <EducationHistory />
      </div>
      <aside class="column__left">
        <Box title="Ссылки" class="list">
          <ExternalLink
            v-for="link in links"
            :key="link.label"
            v-bind="link"
            class="list_item"
          />
        </Box>
        <Box title="Навыки">
          <ul class="list">
            <li v-for="skill in skills" :key="skill" class="list_item">{{ skill }}</li>
          </ul>
        </Box>
        <Box title="Языки">
          <dl>
            <ContentRow
            v-for="lang in languages"
            :key="lang.label"
            :label="lang.label"
            :value="lang.level"
            :note="lang.note"
            />
          </dl>
        </Box>
        <Box title="Курсы">
          <Course
            v-for="course,i in courses"
            :key="i"
            v-bind="course"
          />
        </Box>
      </aside>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  column-gap: 1rem;
  padding-top: 2rem;
}

.column__right {
  min-width: 65%;
  width: 65%;
}

.column__left {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}

.list {
  &_item{
    padding: 3px;
  }
}

@media print {
  .main {
    column-gap: 0.5rem;
    padding-top: 1rem;
  }
}
</style>
