<script setup lang="ts">
import GeneralLayout from "../layout/GeneralLayout.vue";
</script>

<template>
  <div class="flex flex-col space-y-16 w-full">
    <div class="flex-shrink-0">
      <GeneralLayout />
    </div>
  </div>
  <div class=" w-full lg:flex items-center lg:flex-row md:flex-col sm:block justify-between hero-contact">
    <div class="flex flex-col lg:justify-start md:items-center sm:items-center lg:w-1/2  space-y-12">
      <h1 class="text-5xl text-shadow-md font-bold">CONTACT US</h1>
      <h5 class="text-2xl lg:w-3/4 md:w-1/4 sm:w-3/4 md:text-center sm:text-center">
        If you’d like to know more about Elnik’s products, are interested in a
        quote request, or simply want to learn about the applications of MIM,
        please feel free to contact us!
      </h5>
      <h6 style="font-family: ITCFranklinGothicStd-Demi" class="text-xl text-shadow-md decoration-dashed bg-gradient-to-r from-black via-gray-400 to-black bg-clip-text" >
        Innovation. Quality. Experience. Excellence.
      </h6>


    </div>

    <div id="contact-hero-img" class="flex justify-end lg:w-1/2">
      <img
        class="h-full w-full"
        src="/images/2020-10-02-AZOTH-14259-1200x800-min-1024x683.jpg"
      />
    </div>
  </div>
  <div class="flex lg:flex-row md:flex-col sm:flex-col justify-center">


    <ContactUs class="w-full" />
    <div class="border-l-2 md:hidden sm:hidden lg:block min-h-32 border-slate-950"></div>
    <RequestAFreeQuote class="w-full" />
  </div>

  <div class="border-t-2 w-full border-slate-950"></div>
  <div>
    <div class="grid lg:grid-cols-2 w-full max-w-6xl">
      <div class="flex flex-row justify-center">
        <div class="w-1/2 flex justify-center items-center text-center" >
          <p>
            <b  style="font-family: ITCFranklinGothicStd-Demi">Headquarters</b> <br>
            12004 Carolina Logistics Drive, Suite A, Pineville, NC 28134

          </p>
        </div>

      </div>
      <div class="flex flex-row justify-center">
        <div class="w-1/2 flex justify-center items-center text-center m-6" >
          <p ><b  style="font-family: ITCFranklinGothicStd-Demi">Elnik System GmbH</b> <br>
            Knechtsaecker 12
            72224 Ebhausen, Germany

          </p>
        </div>

      </div>
      <div class="flex flex-row">
        <div class="w-full flex justify-center items-center text-center m-6" >
          <p>
            <b  style="font-family: ITCFranklinGothicStd-Demi">Phone:</b> +1-973-239-6066 <br>
            <b  style="font-family: ITCFranklinGothicStd-Demi">Fax:</b> +1-973-239-3272 <br>
            <b  style="font-family: ITCFranklinGothicStd-Demi">Email:</b> elnik@elnik.com
          </p>
        </div>

      </div>
      <div class="flex flex-row">
        <div class="w-full flex justify-center items-center text-center m-6" >
          <p>
            <b  style="font-family: ITCFranklinGothicStd-Demi">Phone:</b> +49 (0) 74585119990 <br>

            <b  style="font-family: ITCFranklinGothicStd-Demi">Email:</b> elnikgmbh@elnik.com
          </p>
        </div>

      </div>


    </div>
  </div>




  <div id="footer" class="flex justify-center">
    <FooterComponent />
  </div>
</template>

<style scoped>
.hero-contact {
  background-color: #d9d9d9;
  background-image: url("public/images/fotor-bg-gradiant.jpg");
}
</style>
