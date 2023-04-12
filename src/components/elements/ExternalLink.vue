<script>
export default {
  props: {
    label: String,
    href: String
  },
  data() {
    return {}
  }
}
</script>

<template>
    <a :href="href" target="_blank" class="link">
        <span class="link__web">{{ label }}</span>
        <span class="link__print">{{ href }}</span>
    </a>
</template>

<style scoped lang="scss">
.link {
    display: block;
    cursor: pointer;
    word-break: break-all;

    &:visited {
        color: rgb(0, 183, 255);
    }

    &__print {
        display: none;
    }
}

@media print {
    .link {
        &__web {
            display: none;
        }

        &__print {
            display: inline;
        }
    }
}
</style>
