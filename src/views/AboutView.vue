<template>
  <div class="w-96 relative" style="width: 500px; height: 600px">
    <div class="block p-1">
      <div class="font-mono text-left text-white">
        <p>About Burentugs.J</p>
      </div>
    </div>
    <div class="m-1 font-mono h-full">
      <!-- Tab Buttons -->
      <div id="tab-buttons" class="text-left">
        <a
          href="javascript:void(0)"
          @click="changeTab(event, 0)"
          class="light-tab-border bg-cs-green border-b-0 pt-2 py-1 pb-1 text-yellow-400 border focus:outline-none"
          >Lifetime</a
        >
        <a
          href="javascript:void(0)"
          @click="changeTab(event, 1)"
          class="light-tab-border ml py-1 text-white border border-b-0 focus:outline-none"
          >Tab 2</a
        >
        <a
          href="javascript:void(0)"
          @click="changeTab(event, 2)"
          class="light-tab-border ml py-1 text-white border-r-2 border border-b-0 focus:outline-none"
          >Tab 3</a
        >
      </div>
      <!-- Tab Panels -->
      <div id="tab-panels" class="border light-top-border h-full">
        <div class="text-white pt-5">
          <div class="flex mx-5">
            <p class="w-1/4">Categories</p>
            <div class="w-3/4 text-left">
              <select
                v-model="selected"
                class="bg-cs-dark-green dark-top-border w-3/5"
              >
                <option value="now">cs_Present</option>
                <option value="teenage">de_Teenage</option>
                <option value="child">cs_Child</option>
              </select>
            </div>
          </div>
          <div class="">
            <div v-if="selected === 'now'"><Dropdown-now /></div>
            <div v-if="selected === 'teenage'"><Dropdown-teen /></div>
            <div v-if="selected === 'child'"><Dropdown-child /></div>
          </div>
        </div>

        <div class="hidden">
          <h1 class="text-2xl text-red-500">Tab 2 Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            doloremque.
          </p>
        </div>

        <div class="hidden">
          <h1 class="text-2xl text-purple-600">Tab 3 Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            doloremque.
          </p>
        </div>
      </div>
      <div class="text-white text-end items-end bottom-0 right-0 absolute">
        <button class="cs-button w-20 text-left pl-1 mr-2">Cancel</button>
        <button class="cs-button w-20 text-left pl-1 mr-2">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownChild from "../components/about/DropdownChild.vue";
import DropdownTeen from "../components/about/DropdownTeen.vue";
import DropdownNow from "../components/about/DropdownNow.vue";
export default {
  name: "AboutView",
  data() {
    return {
      selected: "now",
    };
  },
  components: {
    "Dropdown-child": DropdownChild,
    "Dropdown-teen": DropdownTeen,
    "Dropdown-now": DropdownNow,
  },
  methods: {
    changeTab(event, index) {
      var tabButtons = document.getElementById("tab-buttons").children;
      var tabPanels = document.getElementById("tab-panels").children;

      // Remove the active utility classes from all tabs (bg-white, text-blue-600)
      // And hide all tab content (with the "hidden" utility)
      for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("text-yellow-400");
        tabButtons[i].classList.remove("pt-2");
        tabButtons[i].classList.remove("bg-cs-green");
        tabButtons[i].classList.add("border-b-0");
        tabButtons[i].classList.add("text-white");
        tabPanels[i].classList.add("hidden");
      }

      // Add the active utility classes to the currently active tab (bg-white, text-blue-600)
      // And show the current tab content (remove the "hidden" utility)
      tabButtons[index].classList.remove("text-white");
      tabButtons[index].classList.add("bg-cs-green");
      tabButtons[index].classList.add("border-b-0");
      tabButtons[index].classList.add("text-yellow-400");
      tabButtons[index].classList.add("pt-2");
      tabPanels[index].classList.remove("hidden");
    },
  },
};
</script>
