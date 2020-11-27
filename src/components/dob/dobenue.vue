<template>
  <div>
    <input type="text" v-model="value" @keydown="downup" />
  </div>
</template>
<script>
import {dobiiue} from '@/http/box.js'
export default {
  data() {
    return {
      value: "",
      value2: "",
    };
  },
  methods: {
    downup: dobiiue(function () {
      this.value2 = this.value;
      console.log(this.value2);
    },1000),
  },
};
</script>