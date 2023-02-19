<template>
  <NavBar />
  <router-view />
</template>

<script lang="js">
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0 0;
}

body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  box-sizing: border-box;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  background: #526589;
}

h1 {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
</style>
