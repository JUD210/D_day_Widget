<template>
  <div class="baseToggleBox">
    <div class="folder">
      <img
        class="folder_image"
        type="image"
        src="@/assets/image/down_arrow_in_circle.png"
        @click="changeIsOpen()"
      />
      <span class="folder_title" @click="changeIsOpen()"
        >&nbsp;{{ title }}</span
      >
    </div>

    <slot v-if="isOpen">DEBUG: fill the content!</slot>
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
  methods: {
    changeIsOpen() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
