<template>
  <div class="baseToggleBox">
    <div class="folder">
      <span class="folder_title">&nbsp;{{ title }}</span>
    </div>

    <div v-if="isOpen">
      <slot>DEBUG: fill the content!</slot>
    </div>
  </div>
</template>

<script>
import "@/assets/css/base/BaseToggleBox.css"

export default {
  name: "BaseToggleBox",
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
  methods: {},
}
</script>
