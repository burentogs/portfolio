<template>
  <div class="project-view">
    <p class="pb-1">&nbsp; Projects</p>
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
        class="tabBlock-pane h-full relative overflow-auto"
        v-show="active_tab === index"
      >
        <!-- Story tab -->
        <div v-if="active_tab === 0">
          <LunchenView />
        </div>
        <!-- Story tab1 -->
        <div v-if="active_tab === 1">
          <GameStatsView />
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
import LunchenView from "../components/project/LunchenView.vue";
import GameStatsView from "@/components/project/GameStatsView.vue";
export default {
  name: "ProjectView",
  components: {
    LunchenView,
    GameStatsView,
  },
  data() {
    return {
      tabs: [
        {
          tab_title: "Lvnchen",
        },
        {
          tab_title: "Game Stats",
        },
      ],
      active_tab: 0,
      selected: "now",
    };
  },
  methods: {
    changeTab(index) {
      this.active_tab = index;
    },
  },
};
</script>
