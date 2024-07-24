<script setup lang="ts">
import GeneralLayout from "../layout/GeneralLayout.vue";
import Timeline from "primevue/timeline";

const TimeLine = resolveComponent("TimeLine");

const events = ref([
  {
    status: "Elnik Opens",
    date: "1969",
    image: "event1.jpg",
    name: "Elnik Opens",
    color: "bg-gray-300",
    icon: "icon-class-1",
    description:
      "Elnik Instruments was established as a wholly owned subsidiary of W.H. Joens & Co. in Germany marketing temperature controllers, recorders and programmers for industrial furnaces, vacuum furnaces plus a variety of plastic extrusion and injection molding machinery.",
  },
  {
    status: "Event Enters Vacuum Industry",
    date: "1982",
    image: "event2.jpg",
    name: "Event 2",
    color: "bg-gray-300",
    icon: "icon-class-2",
    description:
      "Elnik Instruments entered the vacuum furnace industry with focused efforts on vacuum furnace systems for Raytheon Company, Waltham MA.",
  },
  {
    status: "Elnik Meet Military Industry",
    date: "1986",
    image: "event1.jpg",
    name: "Elnik Opens",
    color: "bg-gray-300",
    icon: "icon-class-1",
    description:
      "Elnik Systems was formed to meet growing demand for custom vacuum furnaces primarily for the military industry.",
  },
  {
    status: "Elnik Develops One Step Debind",
    date: "1995",
    image: "event4.jpg",
    name: "Event 4",
    color: "bg-gray-300",
    icon: "icon-class-2",
    description:
      'Elnik developed a "one-step" debind and sinter partial pressure furnace to meet the needs of the growing MIM market. The MIM 3000 furnace provides a very cost-effective alternative to the two-furnace technology being used at the time.',
  },
  {
    status: "Elnik Gets Upgrade",
    date: "1999",
    image: "event1.jpg",
    name: "Elnik Opens",
    color: "bg-gray-300",
    icon: "icon-class-1",
    description:
      "Elnik Systems moves into a new state-of-the-art facility housing DSH Technologies, an Elnik affiliate, in Cedar Grove, NJ. Elnik began to standardize its MIM furnace line and continues to manufacture the most advanced MIM furnaces and debinding ovens in the world for one-step debinding and sintering processes.",
  },
  {
    status: "Elnik Pushes Innovation",
    date: "2004",
    image: "event4.jpg",
    name: "Event 4",
    color: "bg-gray-300",
    icon: "icon-class-2",
    description:
      "Elnik continues pushing innovation of its furnace capabilities, introducing AccuTemp™ Temperature control allowing each temperature zone inside its furnace to be controlled within +/- 1º of its set point. Elnik Developed a Catalytic Debind Oven to be used to process BASF Catamold and Other POM based Feedstocks",
  },
  {
    status: "Elnik Adds Automatic Cleaning Features",
    date: "2005",
    image: "event1.jpg",
    name: "Elnik Opens",
    color: "bg-gray-300",
    icon: "icon-class-1",
    description:
      "Elnik added automatic cleaning features of its Vacuum Pump and Binder Traps significantly reducing the manual maintenance time required of its systems.",
  },
  {
    status: "Elnik Introduces GraphMIM 2000",
    date: "2006",
    image: "event4.jpg",
    name: "Event 4",
    color: "bg-gray-300",
    icon: "icon-class-2",
    description:
      "Elnik introduces a full line of graphite MIM furnaces called the GraphMIM 2000 to its line for lower cost MIM processing of iron materials. This system contains all the same innovative functions as its MIM3000 series furnace.",
  },
  {
    status: "Elnik Develops Metal & Ceramic Debinding",
    date: "2012",
    image: "event1.jpg",
    name: "Elnik Opens",
    color: "bg-gray-300",
    icon: "icon-class-1",
    description:
      "Elnik Develops a Metal and Ceramic debinding oven made for POM based metal and ceramic Feedstocks. This system has enhanced controllability of temperature, Nitric Acid flow and gas flow.",
  },
  {
    status: "Elnik Develops MIM3001L For MIM Industry",
    date: "2015",
    image: "event1.jpg",
    name: "Elnik Opens",
    color: "bg-gray-300",
    icon: "icon-class-1",
    description:
      "Elnik developed a laboratory furnace for the MIM industry, MIM3001L. Having all the same processing characteristics as its larger production furnace syblings, this LAB furnace allows for an easy scale up from R+D to Production processing without having to reinvent the wheel. This furnace is also sized and functional for the Additive Manufacturing world involved with binder based 3D printing.",
  },
  {
    status: "Elnik Goes Global",
    date: "2017",
    image: "event1.jpg",
    name: "Elnik Opens",
    color: "bg-gray-300",
    icon: "icon-class-1",
    description:
      "Elnik Systems establishes its first European based service and parts facility, Elnik Systems, GmbH. Located in Waldachtal, Germany, this facility will contain spare parts and a service technician.",
  },
  // Add more events here
]);
</script>

<template>
  <div class="flex flex-col first-neg-margin">
    <div class="flex-shrink-0">
      <GeneralLayout />
    </div>
    <div
      class="w-full h-screen lg:flex items-center lg:flex-row md:flex-col sm:block justify-center hero-about"
    >
      <div
        class="flex flex-col lg:justify-start md:items-center sm:items-center lg:mt-10 lg:w-full text-slate-50"
      >
        <div class="w-3/4  backdrop-blur-lg">
          <h1
            class="text-5xl text-shadow-lg font-bold md:mt-10 md:text-center sm:mt-10 sm:text-center mb-4"
            style="font-family: ITCFranklinGothicStd-Demi"
          >
            OUR PEOPLE MAKE ALL THE DIFFERENCE
          </h1>
          <h5
            class="text-2xl lg:w-full md:w-1/2 sm:w-3/4 md:text-center sm:text-center pl-10 pr-10"
          >
            Elnik’s success is driven by the dedicated hands that help craft our
            equipment, the energetic service team helping customers, the detailed
            engineers designing our state of the art systems, the support and
            administrative staff running the day to day operations and our leaders
            developing the vision and missions for our future.
          </h5>
          <h6
            class="text-xl text-shadow-lg decoration-dashed bg-gradient-to-r from-black via-gray-400 to-black bg-clip-text mt-10 mb-4 text-center"
            style="font-family: ITCFranklinGothicStd-Demi"
          >
            Quality. Innovation. Excellence.          </h6>
          <div class="flex justify-center">
            <NuxtLink to="/Contact">
              <button class=" mb-10 shadow-xl">
                <p
                  class="border-l-white-black border-b-2 uppercase text-shadow-lg"
                  style="font-family: ITCFranklinGothicStd-Demi"
                >
                  contact us
                </p>
              </button>
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
    <div class="relative">
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
              <h3 class="text-lg font-semibold uppercase" style="font-family: ITCFranklinGothicStd-Demi">{{ event.status }}</h3>
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
    </div>
    <div id="footer" class="flex justify-center">
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
.hero-about {
  background-image: url("/public/images/elnik_about_furance_hero.jpg");
  background-size: cover;
}
</style>
