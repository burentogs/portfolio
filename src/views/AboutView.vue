<template>
  <div class="w-96" style="width: 500px; height: 600px">
    <div class="block p-1">
      <div class="font-mono text-left text-white">
        <p>About Burentugs.J</p>
      </div>
    </div>
    <div class="m-1 font-mono">
      <!-- Tab Buttons -->
      <div id="tab-buttons" class="text-left">
        <a
          href="javascript:void(0)"
          @click="changeTab(event, 0)"
          class="items-center bg-cs-green border-b-0 pt-2 px-1 pb-1 text-sm text-yellow-400 border border-r-2 border-r-black sm:text-base whitespace-nowrap focus:outline-none"
          >Tab 1</a
        >
        <a
          href="javascript:void(0)"
          @click="changeTab(event, 1)"
          class="items-center ml px-1 py-1 text-sm text-white border border-r-2 border-r-black border-b-0 sm:text-base whitespace-nowrap cursor-base focus:outline-none"
          >Tab 2</a
        >
        <a
          href="javascript:void(0)"
          @click="changeTab(event, 2)"
          class="items-center px-1 py-1 text-sm text-white border-r-2 border border-r-black border-b-0 sm:text-base whitespace-nowrap cursor-base focus:outline-none"
          >Tab 3</a
        >
      </div>
      <!-- Tab Panels -->
      <div
        id="tab-panels"
        class="border border-zinc-400 border-r-zinc-800 border-b-zinc-800"
      >
        <div class="">
          <h1 class="text-2xl">Tab 1 Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            doloremque.
          </p>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
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
