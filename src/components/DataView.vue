<template>
  <div>
    <h1>Data View</h1>
    <input v-model="msg" type="text" @keydown="onEnter" @blur="onBlur">
    <button v-on:@click="chickMsg">Click Me</button>
    <h4 :class="hclass">{{ msg }}</h4>
    <h4>{{ NewMsg }}</h4>
    <h4 v-for="(item,index) in users" :key="index">
      <span v-show="index % 2 == 0 ">{{ item }}</span>
    </h4>
  </div>
</template>

<script>
export default {
  name: 'DataView',
  data() {
    return {
      msg: '',
      hclass: 'hclass',
      NewMsg: " ",
      users: ["a", "b", "c", "d", "e"],
    }
  },
  methods: {
    chickMsg() {
      // 判断当前的 class，并进行切换
      if (this.hclass === 'hclass') {
        this.msg = "你好 世界";
        this.hclass = "hclass2";
      } else {
        this.msg = "Hello World";
        this.hclass = "hclass";
      }
    },
    onEnter() {
      this.NewMsg = "你按下了键盘" + this.msg;
    },
    onBlur() {
      this.NewMsg = "你离开的输入框"
    },
  },
  mounted() {
    console.log("Component mounted.")
  }
}
</script>

<style scoped>
.hclass {
  color: red;
}

.hclass2 {
  color: green;
}
</style>
