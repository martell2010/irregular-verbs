<template>
  <transition name="fade">
    <router-view :key="key">
      <router-view name="content" />
    </router-view>
  </transition>
</template>

<script>

export default {
  name: 'App',

  computed: {
    key() {
      return `mainLayout_${this.$route.name}`;
    },
  },
};
</script>
