<script setup lang="ts">
import NavBarLayoutComponent from "../components/NavBarLayoutComponent.vue";
import type { PropType } from "vue";

const props = defineProps({
  about: {
    type: Object as PropType<HTMLElement | null | undefined>,
    required: false,
  },
  hero: {
    type: Object as PropType<HTMLElement | null | undefined>,
    required: false,
  },
  products: {
    type: Object as PropType<HTMLElement | null | undefined>,
    required: false,
  },
  blogSlider: {
    type: Object as PropType<HTMLElement | null | undefined>,
    required: false,
  },
});

watch(
  () => useRoute().path,
  (newPath) => {
    console.log(newPath);
    if (newPath === "/") {
      navigateTo("/Home");
    }
  },
);
</script>

<template>
  <div style="width: 100%">
    <NavBarLayoutComponent
      :about="props.about"
      :hero="props.hero"
      :products="props.products"
      :blogSlider="props.blogSlider"
    />
  </div>
</template>

<style scoped></style>
