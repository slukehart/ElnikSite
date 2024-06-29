<script setup lang="ts">
import GeneralLayout from '../layout/GeneralLayout.vue';
import Timeline from 'primevue/timeline';
const events = ref([
  { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
  { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
  { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
  { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);
</script>

<template>
  <div class="flex flex-col space-y-16 first-neg-margin">
    <div class="flex-shrink-0">
      <GeneralLayout/>
    </div>
    <Timeline :value="events" class="w-full md:w-80">
      <template #content="slotProps">
        {{ slotProps.item.status }}
      </template>
    </Timeline>

    <Timeline :value="events" align="right" class="w-full md:w-80">
      <template #content="slotProps">
        {{ slotProps.item.status }}
      </template>
    </Timeline>

    <Timeline :value="events" align="alternate" class="w-full md:w-80">
      <template #content="slotProps">
        {{ slotProps.item.status }}
      </template>
    </Timeline>
    <div id="footer" class="flex justify-center"><FooterComponent/></div>


  </div>
</template>

<style scoped>

</style>