<template>
  <main>
    <div class="card">
      <div class="card-container">
        <p class="card-name">{{ name.name || name.aliases.toString() }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    name: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
}

.card,
.card-container,
.card-overlay {
  border-radius: 15px;
}

.card {
  display: flex;
  justify-content: left;
  position: relative;
  margin: 0.5em 0.5em;
  padding: 2em 1.5em;
  width: 55em;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.card-container {
  height: 4em;
}
</style>
