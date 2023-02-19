<template>
  <NavBar />
  <CharacterCardView />
  <router-view />
</template>

<script lang="js">
import CharacterCardView from '@/views/CharacterCardView.vue';
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    CharacterCardView,
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
  background: coral;
}
</style>
