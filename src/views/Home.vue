<template>
  <v-row
    justify="center"
    align="center"
  >
    <v-col cols="auto">
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        :to="{ name: 'Study' }"
      >
        Get start learning
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'Home',

};
</script>
