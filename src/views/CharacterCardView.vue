<template>
  <main>
    <section>
      <div
        v-for="(country, index) in countries"
        :key="index"
        name="cards"
        class="centered list"
        role="list"
      >
        <EventCard :countries="country" />
      </div>
    </section>
  </main>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
// import ApiService from "@/services/ApiService.js";

export default {
  components: {
    EventCard,
  },

  data() {
    return {
      countries: [
        { country: "Türkiye and Syria" },
        { country: "Nepal" },
        { country: "China" },
        { country: "RP Congo" },
        { country: "Florida, U.S." },
      ],
    };
  },
};
/*
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
  }, */

//   mounted() {
//     // this.beforeCall = true;
//     ApiService.getCharacterNames(5, this.page)
//       .then((response) => {
//         this.names = response.data;
//       })
//       .catch((error) => {
//         console.log(`An error ${error.response} occured`);
//       });
//   },
</script>

<style scoped>
/* Transitions */
.cards-enter-active,
.cards-leave-active {
  transition: opacity 1s;
}

.cards-enter,
.cards-leave-active {
  opacity: 0;
}

@media screen and (max-width: 280px) {
  .filter-label {
    display: none;
    visibility: none;
  }
}

/* Desktop viewports */
@media screen and (min-width: 280px) {
  .list {
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 800px;
    /* background: blue; */
  }
}
</style>
