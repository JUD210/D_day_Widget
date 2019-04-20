<template>
  <div class="unique-id-controller">
    <div
      class="temp-before-modalization
    "
      v-if="this.getCurrentPage.split('-')[0] === 'Intro'"
    >
      <input
        class="unique-id-input"
        type="text"
        :value="uniqueId"
        @change="updateUniqueId"
      />
      <br />
      <button class="create-unique-id-btn" @click="createUniqueId">
        클릭 시 새로운 위젯 생성<br />
      </button>
    </div>

    <!-- //@T Change to MODAL! -->
    <button class="load-btn" @click="reloadWithLoading()">
      불러오기
    </button>

    <button class="save-btn" @click="saveAndCopyUrl()">
      저장
    </button>
  </div>
</template>

<script>
import "@/assets/css/d_day_widget/UniqueIdController.css"

import { mapState, mapGetters, mapActions } from "vuex"

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
  computed: {
    ...mapState("uniqueId", ["uniqueId"]),
    ...mapGetters("pageData", ["getCurrentPage"]),
  },
  created() {
    this.$store.dispatch("uniqueId/createUniqueId")
  },
}
</script>
