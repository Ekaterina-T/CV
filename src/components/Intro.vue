<script >
import data from '@/data/resume.json'

export default {
  data() {
    return {
        name: '',
        jobTitle: '',
        contactInfo: [],
        location: '',
        summary: []
    }
  },
  mounted(){
    this.name = data.name
    this.jobTitle = data.jobTitle
    this.contactInfo = data.contactInfo
    this.location = data.location
    this.summary = data.summary
  }
}
</script>

<template>
  <header class="header">
    <section class="contact-info">
        <h2 class="contact-info_title job-title">{{ jobTitle }}</h2>
        <span
          v-for="item in contactInfo"
          :key="item.key"
          class="contact-info_item">
          {{ item.value }}
        </span>
        <span class="contact-info_item contact-info_location">{{ location }}</span>
    </section>
    <section class="summary">
      <h1 class="summary_header">{{ name }}</h1>
      <Box class="summary_body" title="Характеристика">
        <span v-for="text, index in summary" :key="index">
          {{ text }}
          <br/><br/>
        </span>
      </Box>
    </section>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  column-gap: 1rem;
  padding-bottom: 1.75rem;
  border-bottom: $kSecondaryColor 1px solid;
}

.contact-info {
  width: 30%;
  padding: 0.75rem 0;
  font-size: 1rem;
}
.contact-info_title {
  font-size: 1.05rem;
  font-weight: bold;
}
.contact-info_item {
  display: block;
}
.contact-info_location {
  margin-top: 1.5rem;
}

.summary_header {
  margin-bottom: 0.5rem;
  padding-bottom: 0.75rem;
  font-size: 3.7rem;
  font-weight: bold;
  line-height: 3.7rem;
}
</style>
