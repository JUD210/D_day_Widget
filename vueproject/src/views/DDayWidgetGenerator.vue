<template>
  <div>
    <!-- <div v-for=""></div> -->
    <div class="d_day_widget intro">
      <Description></Description>
      <UniqueIdLoader></UniqueIdLoader>
    </div>

    <div class="d_day_widget input">
      <SettingList></SettingList>
      <button @click="saveWidgetData()">Save</button>
      <button @click="returnSelf()">test</button>
    </div>
  </div>
</template>

<script>
import Description from "@/components/d_day_widget/intro/Description.vue"

import UniqueIdLoader from "@/components/d_day_widget/input/UniqueIdLoader.vue"
import SettingList from "@/components/d_day_widget/input/SettingList.vue"

import { mapActions } from "vuex"

export default {
  name: "app",
  components: {
    Description,
    UniqueIdLoader,

    SettingList,
  },
  methods: {
    returnSelf() {
      this.$router.push({
        name: "d-day-widget-show",
        params: { id: this.$store.state.uniqueId },
      })
    },
    ...mapActions(["saveWidgetData"]),
  },
}
// import { mapState, mapGetters } from "vuex"

// export default {
//   methods: {
//     generateWidget(data) {
//       setInterval(function() {
//         const KOREAN_TIME = 1000 * 60 * 60 * 9

//         for (let i = 0; i < data["exam"].length; i++) {
//           let now = new Date().getTime() + KOREAN_TIME

//           let distance = new Date(data["exam"][i]["date"]) - now

//           let d = Math.floor(distance / (1000 * 60 * 60 * 24))
//           let h = Math.floor(
//             (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//           )
//           let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
//           let s = Math.floor((distance % (1000 * 60)) / 1000)

//           document.querySelector("#exam_" + i + " > .dday").innerHTML =
//             "D - " + d + "d " + h + "h " + m + "m " + s + "s "
//         }
//       }, 1000)
//     },
//   },
//   computed: {
//     ...mapGetters(["getWidgetData"]),
//     ...mapState([""]),
//   },
// }
</script>

<style scoped></style>
