<template>
  <div>
    <button>이거시 뜨면 라우팅 된거시여 알겄는가 {{ id }}?</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
  methods: {
    generateWidget(data) {
      setInterval(function() {
        const KOREAN_TIME = 1000 * 60 * 60 * 9

        for (let i = 0; i < data["exam"].length; i++) {
          let now = new Date().getTime() + KOREAN_TIME

          let distance = new Date(data["exam"][i]["date"]) - now

          let d = Math.floor(distance / (1000 * 60 * 60 * 24))
          let h = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          )
          let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          let s = Math.floor((distance % (1000 * 60)) / 1000)

          document.querySelector("#exam_" + i + " > .dday").innerHTML =
            "D - " + d + "d " + h + "h " + m + "m " + s + "s "
        }
      }, 1000)
    },
  },
  computed: {
    ...mapGetters(["getWidgetData"]),
    ...mapState([""]),
  },
}
</script>

<style scoped></style>
