<template>
  <div class="bg-slate-50 py-24 space-y-32">
    <!-- SECTION 1: OUR CORE VALUES -->
    <section class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Our Core Values
        </h2>
        <p class="text-slate-500 max-w-2xl mx-auto text-[16px]">
          These principles guide every decision we make, from the engineering
          floor to the boardroom.
        </p>
      </div>

      <!-- Values Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Integrity Card -->
        <div
          class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center flex flex-col items-center group hover:shadow-md transition-shadow"
        >
          <div
            class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-green-600"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">Integrity</h3>
          <p class="text-slate-500 text-[15px] leading-relaxed">
            Building trust through transparency and unwavering ethical standards
            in all our interactions.
          </p>
        </div>

        <!-- Innovation Card -->
        <div
          class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center flex flex-col items-center group hover:shadow-md transition-shadow"
        >
          <div
            class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-green-600"
            >
              <path
                d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
              />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
          <p class="text-slate-500 text-[15px] leading-relaxed">
            Continuously pushing the boundaries of what's possible to create
            smarter, faster, and more efficient tech.
          </p>
        </div>

        <!-- Excellence Card -->
        <div
          class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center flex flex-col items-center group hover:shadow-md transition-shadow"
        >
          <div
            class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-green-600"
            >
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
          <p class="text-slate-500 text-[15px] leading-relaxed">
            A commitment to high-quality engineering standards and superior
            performance in every project.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 2: OUR GREATEST ASSET -->
    <section class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-16">
        <!-- Image Side -->
        <div class="w-full md:w-1/2">
          <div class="relative">
            <!-- Decorative shadow element -->
            <div
              class="absolute -bottom-6 -left-6 w-full h-full bg-green-100 rounded-3xl -z-10"
            ></div>
            <img
              src="https://res.cloudinary.com/drbhyey5b/image/upload/v1768645844/teamwork_fekdzv.avif"
              alt="Our Team Working"
              class="w-full h-125 object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>

        <!-- Text Side -->
        <div class="w-full md:w-1/2 space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
            Our Greatest Asset
          </h2>

          <div class="space-y-4 text-slate-500 text-lg leading-relaxed">
            <p>
              At Momak Technologies, we believe that innovation is powered by
              people. Our team consists of world-class engineers, visionary
              designers, and strategic thinkers who are passionate about making
              a difference.
            </p>
            <p>
              We foster a culture of lifelong learning, where creativity is
              rewarded and collaboration is the key to solving the world's most
              difficult problems.
            </p>
          </div>

          <!-- <a
            href="#"
            class="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition-colors pt-4 group"
          >
            Meet our leadership
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Pure Tailwind and SVG implementation
</script>

<style scoped>
div {
  font-family: "Inter", sans-serif;
}
</style>
