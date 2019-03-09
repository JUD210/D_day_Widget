<template>
  <div class="baseToggleBox">
    <div class="folder" @click="isOpen = !isOpen">
      <img
        class="folder_image"
        type="image"
        src="@/assets/down_arrow_in_circle.png"
      />
      <span class="folder_title">&nbsp;{{ title }}</span>
    </div>

    <div v-if="isOpen">
      <slot>DEBUG: fill the content!</slot>
    </div>
  </div>
</template>

<script>
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
}
</script>

<style scoped>
.folder {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.folder_image {
  width: 33px;
  height: 33px;
}

.folder_title {
  font-size: 30px;
  font-weight: bold;
}

.baseToggleBox {
  padding: 10px;
}
</style>
