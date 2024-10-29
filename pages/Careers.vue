<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <div class="flex-shrink-0">
      <NavBarLayoutComponent />
    </div>
    <div
      class="w-full h-screen justify-center flex lg:flex-row md:flex-col career-hero"
    >
      <div
        class="flex flex-col lg:justify-start md:items-center sm:items-center lg:w-1/2 lg:h-[400px] md:h-[300px] sm:h-[400px] xs:h-[100px] space-y-6 backdrop-blur-lg text-slate-50"
      >
        <h1
          class="text-5xl font-bold text-shadow-lg mb-2 mt-6 uppercase text-center"
          style="font-family: Anton-Regular"
        >
          careers
        </h1>
        <h5
          class="text-2xl lg:w-3/4 md:w-1/2 sm:w-3/4 md:text-center text-center"
        >
          We’re always looking for innovative, motivated individuals with a
          passion for learning. If you fit this description and have experience
          in manufacturing, metallurgy, or are simply interested in becoming
          part of the Elnik Systems team, contact us and send us your resume —
          we’d like to hear from you.
        </h5>
        <h6
          style="font-family: ITCFranklinGothicStd-Demi"
          class="text-xl text-shadow-md decoration-dashed bg-gradient-to-r from-black via-gray-400 to-black bg-clip-text mb-10 mt-6 text-center"
        >
          Quality First. Innovation. Excellence.
        </h6>
      </div>
    </div>
    <div class="p-20">
      ELNIK Systems provides equal employment opportunities (EEO) to all
      employees and applicants for employment without regard to race, color,
      religion, gender, sexual orientation, gender identity or expression,
      national origin, age, disability, genetic information, marital status,
      amnesty, or status as a covered veteran in accordance with applicable
      federal, state and local laws. ELNIK complies with applicable state and
      local laws governing non-discrimination in employment in every location in
      which the company has facilities. This policy applies to all terms and
      conditions of employment, including, but not limited to, hiring,
      placement, promotion, termination, layoff, recall, transfer, leaves of
      absence, compensation, and training.
      <br /><br />
      ELNIK expressly prohibits any form of unlawful employee harassment based
      on race, color, religion, gender, sexual orientation, gender identity or
      expression, national origin, age, genetic information, disability, or
      veteran status. Improper interference with the ability of ELNIK’s
      employees to perform their expected job duties is absolutely not
      tolerated.
    </div>
    <div class="career-offer text-slate-50 flex flex-col p-10">
      <div class="lg:w-1/3 md:w-1/2 lg:ml-[60%] md:ml-[60%] sm:ml-[50%]">
        <h3
          class="uppercase text-4xl"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          Job Opportunities
        </h3>
        <br />
        <h5
          class="text-xl uppercase"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          Production Mechanic / Assembler <br />
          Assembler Position
        </h5>
        <br />

        <p class="text-lg">
          Candidate must be a self-motivated, detail-oriented individual with a
          strong work ethic and the ability to work independently and perform
          well under pressure.
        </p>
        <br /><br />
        <h6
          class="uppercase text-lg"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          Job Requirements:
        </h6>
        <p class="text-lg">
          3-5 yrs electro-mechanical assembly experience Must be able to read
          engineering blueprints Experience in piping (copper, stainless steel,
          hose, etc) and mechanical assembly of complex electro-mechanical
          machinery and equipment Experience assembling Vacuum System components
          a HUGE PLUS! Must be a team player Must be flexible in handling a wide
          range of assignments and have their own tools Interaction with all
          departments and levels within the company Effective communication
          skills are a must <br />
          <br />

          We offer a highly competitive salary and comprehensive benefits
          package. Qualified applicants should send resume including cover
          letter along with salary requirements.
        </p>
      </div>
    </div>
    <div id="footer" class="flex justify-center">
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
.career-offer {
  background-image: url("/images/elnik-career-blueprint.jpg");
  background-size: 100%;
}

.career-hero {
  background-color: #d9d9d9;
  background-image: url("/public/images/elnik_headquarters.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
