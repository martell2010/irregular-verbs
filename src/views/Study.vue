<template>
  <div>
    <v-form
      ref="form"
      v-model="valid"
      @submit.prevent
    >
      <h1 class="text-center mb-2">
        <text-to-voice
          :text="currentVerb.translation"
          lang="ru"
        />
        {{ currentVerb.translation }}
      </h1>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          v-for="({key, value}) in fields"
          :key="key"
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="form[key]"
            :label="key"
            :hint="isHintVisible ? value: ''"
            :rules="[rules.check(value)]"
            validate-on-blur
            autocomplete="off"
            :hide-details="false"
            persistent-placeholder
            persistent-hint
          >
            <template #prepend>
              <text-to-voice :text="value" />
            </template>
          </v-text-field>
        </v-col>
      </v-row>

      <study-controls
        :results="results"
        @submit="submit"
        @show-hints="showHints"
      />
    </v-form>
    <success-dialog v-model="isSuccess" />
  </div>
</template>
<script>
import SuccessDialog from '@/components/SuccessDialog.vue';
import StudyControls from '@/components/StudyControls.vue';
import TextToVoice from '@/components/TextToVoice.vue';
import verbs from '@/dictionaries/verbs-ru.json';

export default {
  name: 'Study',

  components: {
    SuccessDialog,
    StudyControls,
    TextToVoice,
  },

  data() {
    return {
      verbs,
      currentVerb: {},
      valid: false,
      isSuccess: false,
      isHintVisible: false,
      results: [],
      form: {},
      rules: {
        check: (verb) => (value) => (
          value?.trim().toLowerCase() === verb?.trim().toLowerCase()
          || 'Not correctly value'
        ),
      },
    };
  },

  computed: {
    fields() {
      return Object.entries(this.currentVerb || {})?.reduce((acc, [key, value]) => {
        if (key === 'translation') {
          return acc;
        }
        return [...acc, { key, value }];
      }, []) || [];
    },
  },

  mounted() {
    this.getRandomUniqVerb();
    console.log(process.env.VUE_APP_PUBLIC_PATH);
  },

  methods: {
    submit() {
      if (!this.valid) {
        return;
      }
      this.setResult();
      this.getRandomUniqVerb();
      this.reset();
      this.playSuccess();
      this.isSuccess = true;
    },
    playSuccess() {
      const audio = new Audio(`${process.env.VUE_APP_PUBLIC_PATH}correct-answer-sound.mp3`);
      audio.oncanplaythrough = () => {
        audio.play();
      };
    },
    setResult() {
      this.results.push({
        ...this.currentVerb,
        withHints: this.isHintVisible,
      });
    },
    getRandomUniqVerb() {
      if (!this.verbs.length) {
        this.verbs = verbs;
      }
      const idx = Math.floor(Math.random() * this.verbs.length);
      this.currentVerb = this.verbs[idx];
      this.verbs.splice(idx, 1);
    },

    reset() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.isHintVisible = false;
    },

    showHints() {
      this.isHintVisible = true;
    },
  },
};
</script>
