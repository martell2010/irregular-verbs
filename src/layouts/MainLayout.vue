<template>
  <v-app>
    <v-main>
      <v-container
        fill-height
        fluid
      >
        <v-row justify="center">
          <v-col cols="auto">
            <div class="display-4 text-center mb-2">
              🧙‍♂️
            </div>
            <h1 class="text-center mb-5">
              Studies irregular verbs
            </h1>
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'MainLayout',
};
</script>
