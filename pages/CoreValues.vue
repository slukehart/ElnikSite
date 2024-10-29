<script setup lang="ts"></script>

<template>
  <div class="flex flex-col first-neg-margin">
    <div class="flex-shrink-0">
      <NavBarLayoutComponent />
    </div>
    <div class="h-full flex justify-center" style="background-color: #0a0a0a">
      <img
        src="/public/images/flyers//elnik_core_values .jpg"
        alt="Elnik Mission"
        class="h-screen lg:w-1/2 md:w-full sm:w-full"
      />
    </div>

    <div id="footer" class="flex justify-center">
      <FooterComponent />
    </div>
  </div>
</template>
