<script setup lang="ts">
import { ref } from "vue";
import type { Brochure, GetBrochures } from "../types";
import { useProductStore } from "../stores/ProductStore";
const { getProducts } = useProductStore();

const brochure = ref<Brochure[] | undefined>();
const firstStage = ref<Brochure[] | undefined>([]);
const thermalDebind = ref<Brochure[] | undefined>([]);
const companyIntroduction = ref<Brochure[] | undefined>([]);
const education = ref<Brochure[] | undefined>([]);

onMounted(async () => {
  const response: GetBrochures = await $fetch("/api/getBrochures");
  brochure.value = response?.message;
  firstStage.value = brochure.value?.filter((br) => br.group === "FSDO");
  thermalDebind.value = brochure.value?.filter((br) => br.group === "TBS");
  companyIntroduction.value = brochure.value?.filter((br) => br.group === "CI");
  education.value = brochure.value?.filter((br) => br.group === "ED");
});

const brochureSection = ref({
  "Thermal Debind and Sinter": firstStage,
  "First Stage Debind Ovens": thermalDebind,
  "Company Introduction": companyIntroduction,
  Education: education,
});
</script>

<template>
  <div class="flex flex-col" style="background-color: #d9d9d9">
    <div class="flex-shrink-0">
      <NavBarLayoutComponent />
    </div>
    <div
      class="w-full h-screen flex lg:flex-row md:flex-col justify-center items-center hero-brochures"
    >
      <div
        class="flex flex-col lg:justify-center md:items-center sm:items-center lg:w-1/2 text-slate-50 backdrop-blur-lg space-y-6"
      >
        <h1
          class="text-5xl text-shadow-lg font-bold mt-10 text-center"
          style="font-family: Anton-Regular"
        >
          BROCHURES
        </h1>
        <h5
          class="text-2xl lg:w-3/4 md:w-1/2 sm:w-3/4 md:text-center sm:text-center text-shadow-lg text-center"
        >
          A combination of Innovation, Integrity and Quality combine to provide
          you with the best Debind and Sinter processing equipment available in
          the marketplace today.
        </h5>
        <h6
          style="font-family: ITCFranklinGothicStd-Demi"
          class="text-xl text-shadow-lg decoration-dashed bg-gradient-to-r from-black via-gray-400 to-black bg-clip-text text-center"
        >
          Quality First. Innovation. Excellence.
        </h6>
        <div class="flex justify-center">
          <NuxtLink to="/ProductPage">
            <button class="pb-10">
              <p
                class="border-b-slate-50 border-b-2 uppercase"
                style="font-family: ITCFranklinGothicStd-Demi"
              >
                products
              </p>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between items-center">
      <div>
        <!-- Loop through productSections -->
        <div
          v-for="(brochure, group) in brochureSection"
          :key="group"
          class="mb-8"
        >
          <!-- Section Title -->
          <h2
            class="text-2xl md:text-3xl font-bold uppercase mb-4 text-center"
            style="font-family: ITCFranklinGothicStd-Demi"
          >
            {{ group }}
          </h2>

          <!-- Brochure Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="(br, index) in brochure"
              :key="index"
              class="flex flex-col w-full justify-center items-center p-4 bg-white shadow-md"
            >
              <a
                :href="br.brochure"
                target="_blank"
                :alt="br.name"
                class="rounded-lg flex justify-center items-center flex-col"
              >
                <embed
                  :src="br.brochure"
                  :alt="br.name"
                  width="100"
                  type="application/pdf"
                  :href="br.brochure"
                  target="_blank"
                />
                <div class="flex flex-col justify-items-start mt-4">
                  <h6
                    class="text-lg font-bold uppercase"
                    style="font-family: ITCFranklinGothicStd-Demi"
                  >
                    {{ br.name }}
                  </h6>
                  <p class="min-h-20 max-w-60 text-sm text-gray-600">
                    {{ br.text }}...
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="footer" class="flex justify-center">
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
.hero-brochures {
  background-image: url("/public/images/elnik_brochures_hero.png");
  background-size: cover;
}
</style>
