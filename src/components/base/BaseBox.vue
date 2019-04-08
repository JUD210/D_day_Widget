<template>
  <div class="baseBox">
    <div v-if="title !== 'exam'" class="folder">
      <span class="folder-title">{{ title }}</span>
    </div>

    <slot v-if="isOpen">DEBUG: fill the content!</slot>
  </div>
</template>

<script>
import "@/assets/css/base/BaseBox.css"

export default {
  name: "BaseBox",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpen: true,
    }
  },
}
</script>
