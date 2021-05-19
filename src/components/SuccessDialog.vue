<template>
  <v-dialog
    v-model="dialog"
    content-class="dialog"
    :overlay-opacity="0.1"
  >
    <v-icon
      size="200px"
      color="green"
    >
      mdi-check-circle
    </v-icon>
  </v-dialog>
</template>
<script>
export default {

  name: 'SuccessDialog',

  props: {
    value: {
      type: Boolean,
      required: true,
    },
    delay: {
      type: Number,
      default: 1000,
    },
  },

  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },

  watch: {
    value() {
      setTimeout(() => {
        this.dialog = false;
      }, this.delay);
    },
  },
};
</script>
<style lang="scss">
  .dialog {
    box-shadow: none !important;
    .v-icon {
      text-shadow: 0 0 20px #4caf51;
    }
  }
</style>
