<template>
  <div class="base-box-container">
    <span class="title">{{ title }}</span>

    <slot></slot>
  </div>
</template>

<script>
import "@/assets/css/base/BaseBoxContainer.css"

export default {
  name: "BaseBoxContainer",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
}
</script>
