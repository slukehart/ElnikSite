<script setup lang="ts"></script>

<template>
  <div class="flex flex-col first-neg-margin">
    <div class="flex-shrink-0">
      <NavBarLayoutComponent />
    </div>
    <div
      class="h-full flex flex-col justify-center items-center"
      style="background-color: #0a0a0a"
    >
      <div class="flex justify-center items-center lg:w-1/4">
        <NuxtLink
          class="h-auto mt-4 btn-product-main w-3/4 text-sm border-white text-white font-bold py-2 px-6 mb-6 backdrop-blur-2xl cursor-pointer"
          to="/OurMission"
        >
          <p
            class="uppercase text-center w-auto"
            style="font-family: ITCFranklinGothicStd-Demi"
          >
            view mission statement
          </p>
        </NuxtLink>
      </div>
      <img
        src="/public/images/flyers/ELNIK _CORE_VALUES.png"
        alt="Elnik Mission"
        class="h-screen lg:w-1/2 md:w-full sm:w-full"
      />
    </div>

    <div id="footer" class="flex justify-center">
      <FooterComponent />
    </div>
  </div>
</template>
