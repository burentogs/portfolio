<template>
  <nav class="dark:bg-gray-400 pt-1">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <font-awesome-icon
      :icon="['fas', 'toggle-on']"
      v-if="isDarkMode"
      @click="toggleDarkMode"
    />
    <font-awesome-icon
      :icon="['fas', 'toggle-off']"
      v-if="!isDarkMode"
      @click="toggleDarkMode"
    />
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    this.isDarkMode = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>
