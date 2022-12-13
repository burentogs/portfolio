<template>
  <div class="h-screen">
    <div
      class="sm:bg-background-image bg-no-repeat bg-cover h-max bg-background-image-sm"
    >
      <div class="flex h-screen justify-center items-center">
        <div class="text-center bg-blue-400">
          <router-view
            class="bg-cs-green border border-zinc-400 border-r-zinc-800 border-b-zinc-800"
          />
        </div>
      </div>

      <nav
        class="mb-10 ml-10 absolute bottom-0 left-0 text-2xl text-white sm:text-xl"
      >
        <div class="grid grid-cols-1 font-mono" @click="playClickSound">
          <router-link
            :to="{ name: 'about' }"
            class="hover:text-yellow-400"
            active-class="text-yellow-400"
            @mouseover="playBeepSound"
            >About</router-link
          >
          <router-link
            :to="{ name: 'project' }"
            class="pt-1 hover:text-yellow-400"
            active-class="text-yellow-400"
            @mouseover="playBeepSound"
            >Work</router-link
          >
          <router-link
            :to="{ name: 'contact' }"
            class="pt-1 hover:text-yellow-400"
            active-class="text-yellow-400"
            @mouseover="playBeepSound"
            >Contact</router-link
          >
          <router-link
            :to="{ name: 'quit' }"
            class="pt-1 hover:text-yellow-400"
            active-class="text-yellow-400"
            @mouseover="playBeepSound"
            >Quit</router-link
          >
        </div>
      </nav>
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
    playClickSound() {
      const click = new Audio(require("@/assets/click.mp3"));
      click.play();
    },
  },
};
</script>
