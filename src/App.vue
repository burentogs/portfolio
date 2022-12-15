<template>
  <div class="w-screen h-screen">
    <div
      class="sm:bg-background-image bg-no-repeat bg-cover h-screen bg-background-image-sm relative"
    >
      <div class="flex justify-center">
        <router-view
          class="bg-cs-green border light-top-border mt-16 sm:mt-28 h-fit absolute z-10"
        />
      </div>

      <nav
        class="navigation text-2xl text-white sm:text-xl"
        @click="playBeepSound"
      >
        <router-link
          :to="{ name: 'about' }"
          class="hover:cs-yellow"
          active-class="cs-yellow"
          >About</router-link
        >
        <router-link
          :to="{ name: 'project' }"
          class="hover:cs-yellow"
          active-class="cs-yellow"
          >Work</router-link
        >
        <router-link
          :to="{ name: 'contact' }"
          class="hover:cs-yellow"
          active-class="cs-yellow"
          >Contact</router-link
        >
        <router-link
          :to="{ name: 'quit' }"
          class="hover:cs-yellow"
          active-class="cs-yellow"
          >Quit</router-link
        >
      </nav>
      <div class="logo-horizontal">
        <img src="./assets/logo-horizontal.svg" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {},
  methods: {
    playBeepSound() {
      const beep = new Audio(require("@/assets/beep.mp3"));
      beep.play();
    },
  },
};
</script>
