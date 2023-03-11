<template>
  <div class="about-view">
    <p class="pb-1">&nbsp; About Burentugs.J</p>
    <ul class="tabBlock-tabs">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :aria-setsize="tabs.length"
        :aria-posinet="index + 1"
      >
        <a
          href="javascript:void(0);"
          class="tabBlock-tab"
          :class="active_tab === index ? 'is-active' : ''"
          :aria-selected="active_tab === index"
          @click="changeTab(index)"
        >
          {{ tab.tab_title }}
        </a>
      </li>
    </ul>
    <div class="tabBlock-content overflow-hidden">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :aria-current="active_tab === index"
        class="tabBlock-pane h-full relative overflow-hidden"
        v-show="active_tab === index"
      >
        <!-- Story tab -->
        <div v-if="active_tab === 0" class="grid h-full w-full relative">
          <div class="flex">
            <p class="w-1/4">Choose</p>
            <div class="w-3/4 text-left">
              <select
                v-model="selected"
                class="bg-cs-dark-green dark-top-border w-3/5"
              >
                <option value="now">de_present</option>
                <option value="dust">de_teenage</option>
              </select>
            </div>
          </div>
          <hr />
          <div class="overflow-auto about-view-drop">
            <div v-if="selected === 'now'">
              <Dropdown-now />
            </div>
            <div v-if="selected === 'dust'"><Dropdown-dust /></div>
          </div>
        </div>
        <!-- Story tab1 -->

        <div v-if="active_tab === 1">
          <div class="flex"></div>
        </div>
      </div>
    </div>
    <!-- <div class="text-white text-end items-end mt-1">
      <button type="button" class="cs-button">Start</button>
      <button type="button" class="cs-button">Cancel</button>
    </div> -->
  </div>
</template>

<script>
import DropdownDust from "../components/about/DropdownDust.vue";
import DropdownNow from "../components/about/DropdownNow.vue";
export default {
  name: "AboutView",

  data() {
    return {
      active_tab: 0,
      selected: "now",
      tabs: [
        {
          tab_title: "Story",
        },
      ],
    };
  },
  methods: {
    changeTab(index) {
      this.active_tab = index;
    },
  },
  components: {
    DropdownDust,
    DropdownNow,
  },
};
</script>

<style lang="scss">
@import "../assets/tabs.scss";
</style>
