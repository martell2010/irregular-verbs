<template>
  <v-row
    justify="center"
    align="center"
  >
    <v-col
      cols="12"
      sm="auto"
    >
      <v-btn
        outlined
        type="button"
        color="blue"
        block
        @click="$emit('submit')"
      >
        Check
      </v-btn>
    </v-col>
    <v-col
      cols="12"
      sm="auto"
    >
      <v-btn
        outlined
        color="orange"
        block
        @click="$emit('show-hints')"
      >
        Show hints
      </v-btn>
    </v-col>
    <v-col
      cols="12"
      sm="auto"
    >
      <v-btn
        outlined
        color="green"
        block
        :to="{ name: 'Results', params: { results } }"
      >
        Show results
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'StudyControls',

  props: {
    results: {
      type: Array,
      required: true,
    },
  },
};
</script>
