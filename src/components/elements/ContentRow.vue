<script>
export default {
  props: {
    label: String,
    value: String,
    note: String
  },
  data() {
    return {}
  }
}
</script>

<template>
    <div class="content-row">
        <div class="content-row_row">
            <dt>{{ label }}</dt>
            <dd>{{ value }}</dd>
        </div>
        <dd v-if="note" class="content-row_note">{{ note }}</dd>
    </div>
</template>

<style scoped lang="scss">
.content-row {
    padding: 0.5rem 0;

    &_row {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dotted $kPrimaryColor;
        font-weight: 500;
    }
    &_note{
        margin-top: 0.5rem;
        font-size: 0.75rem;
    }
}

</style>
