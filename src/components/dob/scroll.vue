<template>
  <div class="content">
    <div class="wrap">
      <input type="text" v-model="value" @keydown="downup" />
      <div class="box"></div>
      <h1>{{ time }}</h1>
      <button @click="topclick" class="btn">返回顶部</button>
    </div>
  </div>
</template>
<script>
import { throttle, flatten, timeout } from "@/http/box.js";
import xss from "xss";

export default {
  data() {
    return {
      value: "",
      sss: "",
      arr: [
        {
          name: 1,
        },
        {
          name: 1,
        },
        {
          name: 1,
        },
        {
          name: 1,
        },
        {
          name: 1,
        },
        {
          name: 1,
        },
        {
          name: 1,
        },
        {
          name: 1,
        },
      ],
      time: "",
      parentTop: "",
    };
  },
  created() {
    const boxtime = timeout();
    this.time = boxtime;
    var obj = document.querySelector(".content");
    console.log(obj);
  },
  methods: {
    downup: throttle(function () {
      console.log(12312312);
    }, 1000),
    clicks() {
      console.log(xss(this.sss));
    },

    scrollTop(e) {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
    },
    topclick() {
      let timer;
      timer = setInterval(() => {
        document.documentElement.scrollTop -= 1;
        if (document.documentElement.scrollTop <= 0) {
          document.documentElement.scrollTop = 0;
          clearInterval(timer);
        }
      }, 0.5);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollTop);
  },
};
</script>
<style lang="scss" scoped>
@import "lol.scss";
.content {
  width: 100%;
  height: 1000000px;
  background: #eee;
  position: relative;
  overflow-y: auto;
  .wrap {
    width: 100%;
    height: 10000px;
    background: #eee;
    position: absolute;
    left: 0;
    top: 0;
    .btn {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: fixed;
      bottom: 10px;
      right: 10px;
    }
  }
}
</style>