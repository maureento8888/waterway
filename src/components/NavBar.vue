<template>
  <nav id="nav" class="nav">
    <router-link to="/" class="link">Home </router-link>
    <router-link to="/request" class="link">Request </router-link>
    <router-link to="/account" class="link">Account </router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  color: #526589;
  font-weight: 600;
  background-color: transparent;
}
</style>
