<template>
  <section class="max-w-5xl mx-auto py-24 px-6 bg-white">
    <!-- Centered Title -->
    <h2
      class="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-20"
    >
      Our Evolution
    </h2>

    <div class="relative max-w-3xl mx-auto">
      <!-- The Vertical Line (Centered behind the icons) -->
      <div class="absolute left-5 top-4 bottom-4 w-[1.5px] bg-slate-200"></div>

      <!-- Timeline Items Container -->
      <div class="space-y-16">
        <!-- 2020: The Foundation -->
        <div class="relative flex items-start group">
          <!-- Icon Marker -->
          <div
            class="absolute left-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center z-10 border-4 border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-green-600"
            >
              <path
                d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
              />
              <line x1="4" x2="4" y1="22" y2="15" />
            </svg>
          </div>
          <!-- Content -->
          <div class="ml-16">
            <span
              class="text-[13px] font-bold text-green-600 uppercase tracking-widest"
              >Early 2020</span
            >
            <h3 class="text-2xl font-bold text-slate-900 mt-1 mb-3">
              The Foundation
            </h3>
            <p class="text-slate-500 leading-relaxed text-[16px]">
              Momak Technologies was born with a core team of five engineers in
              a small workspace, driven by the vision to redefine engineering
              and telecommunication solutions.
            </p>
          </div>
        </div>

        <!-- 2022: Global Expansion -->
        <div class="relative flex items-start group">
          <!-- Icon Marker -->
          <div
            class="absolute left-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center z-10 border-4 border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <!-- Content -->
          <div class="ml-16">
            <span
              class="text-[13px] font-bold text-green-600 uppercase tracking-widest"
              >2022</span
            >
            <h3 class="text-2xl font-bold text-slate-900 mt-1 mb-3">
              Service Growth
            </h3>
            <p class="text-slate-500 leading-relaxed text-[16px]">
              After rapid success in domestic markets, we expanded our service
              portfolio to include renewable energy and civil works, serving a
              broader range of industries.
            </p>
          </div>
        </div>

        <!-- 2024 & Beyond: Market Leadership -->
        <div class="relative flex items-start group">
          <!-- Active Icon Marker (With the Glow Effect) -->
          <div
            class="absolute left-0 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center z-10 border-4 border-white shadow-[0_0_20px_rgba(22,163,74,0.4)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path
                d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
              />
              <path
                d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
              />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
          </div>
          <!-- Content -->
          <div class="ml-16">
            <span
              class="text-[13px] font-bold text-green-600 uppercase tracking-widest"
              >2024 & Beyond</span
            >
            <h3 class="text-2xl font-bold text-slate-900 mt-1 mb-3">
              Market Leadership
            </h3>
            <p class="text-slate-500 leading-relaxed text-[16px]">
              Today, we stand as a trusted leader in integrated technology
              solutions, bridging the digital divide and delivering excellence
              across East Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Tailored specifically for Momak Technologies Ltd
 * Uses standard Tailwind CSS and Inline SVGs to avoid import errors.
 */
</script>

<style scoped>
/* Matching the clean, professional font from your image */
section {
  font-family:
    "Inter",
    -apple-system,
    system-ui,
    sans-serif;
}
</style>
