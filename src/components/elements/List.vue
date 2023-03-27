<script>
export default {
    name: "List",
    props:{
        data: Array
    },
  data() {
    return {
    }
  },
  computed: {
    hasMultipleItems() {
        return this.data.length > 1
    }
  },
  methods: {
    isString(item) {
        return typeof item === "string"
    }
  }
}
</script>

<template>
    <ul class="list" :class="{ list__multiple: hasMultipleItems }">
        <li v-for="item, i in data" :key="i">
            <template v-if="isString(item)">{{ item }}</template>
            <template v-else>
                {{ item.text }}
                <List :data="item.subitems"/>
            </template>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.list {
    &__multiple {
        padding-left: 1.5rem;
        list-style-type: disc;
    }
}
</style>
