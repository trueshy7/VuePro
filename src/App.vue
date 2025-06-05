<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <DataView msg="你也好"></DataView>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DataView from "@/components/DataView.vue";
export default {
  name: 'App',
  components: {
    HelloWorld,DataView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
