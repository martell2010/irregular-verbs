<template>
  <div class="text-center">
    <h1 class="mb-2">
      Your results 🥳
    </h1>
    <h3>Total verbs: <strong class="blue--text">{{ results.length }}</strong></h3>
    <h2 class="mb-2 ">
      Without hints: <strong class="green--text">{{ totalWithoutHint }}</strong>
    </h2>
    <v-data-table
      :headers="headers"
      :items="results"
      class="elevation-1"
    >
      <template v-slot:item.withHints="{ value }">
        <v-icon
          v-if="value"
          color="blue"
        >
          mdi-minus
        </v-icon>
        <v-icon
          v-else
          color="green"
        >
          mdi-check
        </v-icon>
      </template>
    </v-data-table>
    <v-btn
      outlined
      class="mt-2"
      block
      color="green"
      :to="{ name: 'Home'}"
    >
      Try again
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'Results',

  beforeRouteEnter(to, from, next) {
    const results = to.params?.results || [];
    if (results.length) {
      next();
      return;
    }
    next({ name: 'Home' });
  },

  data() {
    return {
      headers: [
        { text: 'Infinitive', value: 'infinitive' },
        { text: 'Past', value: 'past' },
        { text: 'Participle', value: 'participle' },
        { text: 'Translation', value: 'translation' },
        { text: 'Without hints', value: 'withHints', width: 110 },
      ],
    };
  },

  computed: {
    results() {
      return this.$route.params.results || [];
    },
    totalWithoutHint() {
      return this.results.filter(({ withHints }) => !withHints).length;
    },
  },
};
</script>
