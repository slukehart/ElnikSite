<script setup lang="ts"></script>

<template>
  <div class="flex flex-col first-neg-margin">
    <div class="flex-shrink-0">
      <NavBarLayoutComponent />
    </div>
    <div
      class="w-full h-screen lg:justify-center flex lg:flex-row md:flex-col hero-about"
    >
      <div
        class="flex flex-col lg:justify-start sm:items-center lg:h-[500px] md:h-[300px] sm:h-[450px] xs:h-[200px] lg:w-1/2 lg:backdrop-blur-lg text-slate-50"
      >
        <div
          class="lg:w-full backdrop-blur-lg flex flex-col md:h-[600px] justify-center sm:items-center"
        >
          <h1
            class="text-5xl text-shadow-lg font-bold md:mt-10 text-center sm:mt-10 sm:text-center mb-4 max-sm:mt-10"
            style="font-family: Anton-Regular"
          >
            OUR PEOPLE MAKE ALL THE DIFFERENCE
          </h1>
          <h5
            class="text-2xl lg:w-full md:w-3/2 sm:w-3/4 max-sm:text-base text-center max-sm:text-center pl-10 pr-10"
          >
            Elnik’s success is driven by the dedicated hands that help craft our
            equipment, the energetic service team helping customers, the
            detailed engineers designing our state of the art systems, the
            support and administrative staff running the day to day operations
            and our leaders developing the vision and missions for our future.
          </h5>
          <h6
            class="text-xl text-shadow-lg decoration-dashed bg-gradient-to-r from-black via-gray-400 to-black bg-clip-text lg:mt-10 mb-4 text-center"
            style="font-family: ITCFranklinGothicStd-Demi"
          >
            Quality First. Innovation. Excellence.
          </h6>
          <div class="flex justify-around w-3/4">
            <div>
              <NuxtLink to="/CoreValues" class="cursor-pointer">
                <button class="mb-10 shadow-xl">
                  <p
                    class="border-l-white-black border-b-2 uppercase text-shadow-lg"
                    style="font-family: ITCFranklinGothicStd-Demi"
                  >
                    core values
                  </p>
                </button>
              </NuxtLink>
            </div>
            <div>
              <NuxtLink to="/OurMission" class="cursor-pointer">
                <button class="mb-10 shadow-xl">
                  <p
                    class="border-l-white-black border-b-2 uppercase text-shadow-lg"
                    style="font-family: ITCFranklinGothicStd-Demi"
                  >
                    mission statement
                  </p>
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center h-32">
      <h2
        class="uppercase text-5xl font-extrabold"
        style="font-family: ITCFranklinGothicStd-Demi"
      >
        our history
      </h2>
    </div>
    <div>
      <img src="/public/images/timeline_images/elnik_history_timeline_1.png" />
      <img src="/public/images/timeline_images/elnik_history_timeline_2.png" />
    </div>
    <!-- <div class="relative">
      <div
        class="border-l-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2 h-full"
      ></div>
      <div
        v-for="(event, index) in events"
        :key="index"
        class="mb-8 flex justify-center items-center w-full"
      >
        <div
          :class="[
            'flex w-full items-center justify-center',
            index % 2 === 0 ? 'flex-row-reverse ml-72' : 'flex-row mr-72',
          ]"
        >
          <div class="bg-white p-4 lg:w-1/3 md:w-1/2 sm:w-1/2">
            <div class="flex justify-between items-center mb-2">
              <h3
                class="text-lg font-semibold uppercase"
                style="font-family: ITCFranklinGothicStd-Demi"
              >
                {{ event.status }}
              </h3>
              <span class="text-gray-500">{{ event.date }}</span>
            </div>
            <div v-if="event.image" class="mb-2">
              <img
                :src="`/images/product/${event.image}`"
                :alt="event.name"
                class="w-48 shadow-sm"
              />
            </div>
            <p class="text-gray-700">
              {{ event.description }}
            </p>
          </div>
          <div
            :class="[
              'w-5 h-5 rounded-full absolute z-10 transform -translate-y-1/2',
              event.color,
              index % 2 === 0 ? 'left-1/2 -ml-2.5' : 'left-1/2 -ml-2.5',
            ]"
          ></div>
        </div>
      </div>
    </div> -->
    <div id="footer" class="flex justify-center">
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
.hero-about {
  background-image: url("/public/images/elnik_team_usa.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; /* Centers the image in the div */
}
</style>
