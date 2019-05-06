<template>
  <div class="about_d_day_widget">
    <h2>D-day 위젯이란?</h2>

    <p>
      각종 시험의
      <b>D-day</b>를 간편하게 편집하여, <b>캠</b> 또는 <b>방송 프로그램</b>의
      <b>화면</b>에 띄우는 위젯입니다.
      <br />
      <br />
      캠스터디를 하며 열공하시는 여러분을 위해 만들어졌으며, 평생 완전
      무료입니다!
      <br />
      <br />
      <br />ex) ManyCam
      <br />
      <img
        class="example-image example-manycam"
        type="image"
        src="@/assets/image/example_manycam.png"
      />
      <br />
      <br />ex) OBS
      <br />
      <img
        class="example-image example-obs"
        type="image"
        src="@/assets/image/example_obs.png"
      />
      <br />
      <br />ex) XSplit
      <br />
      <img
        class="example-image example-xsplit"
        type="image"
        src="@/assets/image/example_xsplit.png"
      />
    </p>

    <br />

    <button class="how-to-btn" @click="wantFeedback = !wantFeedback">
      피드백/건의하기
    </button>

    <div class="how-to-feedback" v-if="wantFeedback">
      <h2>
        앱 개발자 잉혁킹이 현재 편입학 공부중입니다!<br />
        2020년 2월 이전까지는 임시로 보류하겠습니다.<br />
      </h2>

      <ul>
        <li>
          <a
            href="https://www.youtube.com/channel/UCYPWzViA-uq9sBop7ssYaEg?sub_confirmation=1"
            >[📺] YouTube: 잉혁킹</a
          >
          <br />
        </li>
        <li>[📠] Hyeogikarp@gmail.com</li>
      </ul>
    </div>

    <br />
    <br />

    <button class="how-to-btn" @click="wantContribute = !wantContribute">
      개발 돕기 (Vue)
    </button>

    <div class="how-to-contribute" v-if="wantContribute">
      <h2>
        앱 개발자 잉혁킹이 현재 편입학 공부중입니다!<br />
        2020년 2월 이전까지는 임시로 보류하겠습니다.<br />
      </h2>

      <p>
        공부방송 도우미는 Vue / Vue Router / VueX 를 활용하여 만들어졌습니다.
        <br />초보 개발자 혼자서 만든 앱이기에 아직 부족한 점이 많습니다.
        <br />
        <br />DB를 제외한 모든 소스가 GitHub에 공개되어 있으므로, 아래의 To Do
        List와 소스 파일에서 개선 및 추가할 점이 보이시면 언제든지 말씀해주세요!
      </p>

      <ul>
        <li>
          <a href="https://trello.com/b/bQBvL7Zj/project-gongbanghelper-v001"
            >[📌] Trello : To Do List</a
          >
        </li>
        <li>
          <a href="https://github.com/JUD210/gongbang-helper"
            >[👨‍💻] GitHub : 소스 파일 (DB 제외)</a
          >
        </li>
      </ul>

      <h4>Special Thanks to</h4>

      <ul>
        <li>
          <a
            href="https://www.youtube.com/channel/UC5F_d3cnqsl_6syKejWVWxw?sub_confirmation=1"
          >
            내 옆자리 남자 The man sitting next to me
          </a>
        </li>
        <li>
          <a href="https://github.com/steelbear">
            Alan Choi (steelbear)
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutDDayWidget",
  data() {
    return {
      wantContribute: false,
      wantFeedback: false,
    }
  },
}
</script>

<style scoped>
.how-to-feedback,
.how-to-contribute {
  border-style: solid;
  border-width: 1px;
}

.how-to-btn,
.example-image {
  width: 100%;
}
</style>
