<template>
  <div class="w-screen h-screen bg-black">
    <div
      class="sm:bg-background-image bg-cover h-full bg-background-image-sm relative"
    >
      <div class="panel">
        <router-view />
      </div>

      <nav
        class="navigation text-2xl text-white sm:text-xl z-20"
        @click="playBeepSound"
      >
        <router-link
          :to="{ name: 'about' }"
          class="hover:cs-yellow menu-out-transition"
          active-class="menu-active"
          ><span class="icon">
            <font-awesome-icon class="menu-icon" :icon="['fas', 'user']" />
          </span>
          <span class="text">About</span>
        </router-link>
        <router-link
          :to="{ name: 'project' }"
          class="hover:cs-yellow menu-out-transition"
          active-class="menu-active"
          ><span class="icon">
            <font-awesome-icon
              class="menu-icon"
              :icon="['fas', 'briefcase']"
            /> </span
          ><span class="text">Project</span>
        </router-link>
        <router-link
          :to="{ name: 'skills' }"
          class="hover:cs-yellow menu-out-transition"
          active-class="menu-active"
          ><span class="icon">
            <font-awesome-icon
              class="menu-icon"
              icon="fa-solid fa-wand-magic-sparkles" /></span
          ><span class="text">Skills</span>
        </router-link>
        <router-link
          :to="{ name: 'contact' }"
          class="hover:cs-yellow menu-out-transition"
          active-class="menu-active"
          ><span class="icon">
            <font-awesome-icon
              class="menu-icon"
              :icon="['fas', 'paper-plane']"
            /> </span
          ><span class="text">Contact</span>
        </router-link>
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
};
</script>
