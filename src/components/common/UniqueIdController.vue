<template>
  <div class="unique-id-controller">
    <!-- //@T Change to MODAL! -->
    <button class="load-btn" @click="reloadWithLoading()">
      불<br />러<br />오<br />기
    </button>

    <button class="save-btn" @click="saveAndCopyUrl()">저<br />장</button>
  </div>
</template>

<script>
import "@/assets/css/d_day_widget/UniqueIdController.css"

import { mapState, mapActions } from "vuex"

export default {
  name: "UniqueIdController",
  methods: {
    ...mapActions(["saveWidgetData"]),

    reloadWithLoading() {
      localStorage["requireReloadWhenLoading"] = "yes"
      this.$store.dispatch("loadWidgetData")
    },
    createUniqueId() {
      localStorage.removeItem("uniqueId")
      this.$store.dispatch("uniqueId/createUniqueId")
    },
    updateUniqueId(event) {
      this.$store.dispatch("uniqueId/updateUniqueId", event.target.value)
    },

    saveAndCopyUrl() {
      this.saveWidgetData()
      this.copyText()
    },
    copyText() {
      var copyText = document.querySelector("#copy_url")
      copyText.select()
      document.execCommand("copy")
    },
  },
  computed: mapState("uniqueId", ["uniqueId"]),
  created() {
    this.$store.dispatch("uniqueId/createUniqueId")
  },
}
</script>
