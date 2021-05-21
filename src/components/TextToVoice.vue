<template>
  <v-icon
    tabindex="-1"
    @click="toVoice(text)"
  >
    mdi-volume-high
  </v-icon>
</template>
<script>
export default {
  name: 'TextToVoice',

  props: {
    text: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: 'en',
    },
    rate: {
      type: Number,
      default: 0.65,
    },
    volume: {
      type: Number,
      default: 0.8,
    },

  },

  methods: {
    toVoice(text) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.lang = this.lang;
      msg.rate = this.rate;
      msg.volume = this.volume;
      window.speechSynthesis.speak(msg);
    },
  },
};
</script>
