<template>
  <div class="p-4 relative flex-col overflow-auto">
    <div class="flex-row mb-5">
      <h2>Project name</h2>
      <div
        class="p-1 mt-1 bg-cs-dark-green dark-top-border text-left md:w-1/2 w-full"
      >
        Dota 2 Game Stats
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="lg:w-1/2 md:w-full">
        <div class="flex flex-col">
          <div class="flex-grow">
            <div class="w-full items-center justify-center flex-shrink-0">
              <img src="../../assets/game-dash.svg" alt="tech-stack" />
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 md:w-full">
        <hr class="sm:collapse sm:m-0" />
        <div class="flex sm:flex-row flex-col sm:ml-10">
          <div class="flex-grow">
            <h2 class="text-lg title-font">Summary</h2>

            <p class="leading-relaxed cs-light-green">
              Fetching data from API to display data analysis that game info,
              user details, etc.
            </p>
            <h2 class="text-lg title-font">Technologies used</h2>
            <p class="leading-relaxed cs-yellow">Vue, Rest Api, Axios</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
