<template>
  <div class="h-screen">
    <div
      class="sm:bg-background-image bg-no-repeat bg-cover h-max bg-background-image-sm"
    >
      <div class="flex h-screen justify-center items-center">
        <div class="text-center bg-blue-400">
          <router-view class="bg-gray-300" />
        </div>
      </div>

      <nav class="mb-10 ml-10 absolute bottom-0 left-0 text-white">
        <div class="grid grid-cols-1 font-mono">
          <router-link to="/" class="hover:text-yellow-400"
            >New Game</router-link
          >
          <router-link to="/about" class="pt-1 hover:text-yellow-400"
            >Find Servers</router-link
          >
          <router-link to="/about" class="pt-1 hover:text-yellow-400"
            >Options</router-link
          >
          <router-link to="/about" class="pt-1 hover:text-yellow-400"
            >Quit</router-link
          >
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  mounted() {},
  methods: {},
};
</script>
