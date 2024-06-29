<script setup lang="ts">

import GeneralLayout from '../layout/GeneralLayout.vue';
</script>

<template>
  <div class="flex flex-col space-y-16 first-neg-margin">
    <div class="flex-shrink-0">
      <GeneralLayout/>
    </div>
  </div>
  <div>
    <ContactUs/>
    <div id="footer" class="flex justify-center"><FooterComponent/></div>

  </div>
</template>

<style scoped>

</style>