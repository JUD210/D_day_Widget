<template>
  <div>
    <div @click="isOpen = !isOpen">
      <h2>{{ title }}</h2>
    </div>
    <div v-if="isOpen">
      <slot>none</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseToggleBox',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: true,
    }
  },
}
</script>

<style scoped></style>
