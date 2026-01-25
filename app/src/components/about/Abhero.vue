<template>
  <div class="min-h-screen bg-slate-50 p-6 md:p-12">
    <!-- HERO SECTION -->
    <section
      class="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat min-h-125 flex items-center mb-12 shadow-2xl"
      style="
        background-image: url(&quot;https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070&quot;);
      "
    >
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 px-8 md:px-16 max-w-4xl">
        <h1
          class="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]"
        >
          Pioneering the Future of <br />
          Technology Since 2020
        </h1>
        <p class="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl font-light">
          Momak Technologies Ltd. is a global leader in engineering excellence
          and innovative solutions, dedicated to shaping a smarter tomorrow
          through precision and passion.
        </p>
        <!-- Button changed to Green -->
        <!-- <button
          class="bg-emerald-600 hover:bg-emerald-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
        >
          View Our Impact
        </button> -->
      </div>
    </section>

    <!-- MISSION & VISION CARDS -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      <!-- Mission Card -->
      <div
        class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-start"
      >
        <!-- Icon Background changed to Green-50 -->
        <div class="bg-green-50 p-3 rounded-lg mb-6">
          <!-- SVG color changed to Green-600 -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-green-600"
          >
            <path
              d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.79-1.81l-1.98-1.19s-1.1 1.1-1.81 1.81Z"
            />
            <path d="m10 10-2 1" />
            <path
              d="m13.07 9.07-4.07 4.1a5 5 0 0 1-1.17 2.25l-.88.88c-.12.13-.18.4-.12.52L7 17l.5.5 1.06-.13c.12.06.39 0 .52-.12l.88-.88a5 5 0 0 1 2.25-1.17l4.1-4.07a8 8 0 0 0-3.24-3.24Z"
            />
            <path
              d="M14.93 14.93a8 8 0 0 1-3.24-3.24l4.1-4.07a5 5 0 0 1 2.25-1.17l.88-.88c.13-.12.4-.18.52-.12l.13.13.5.5-.13 1.06c.06.12 0 .39-.12.52l-.88.88a5 5 0 0 1-1.17 2.25l-4.07 4.1Z"
            />
            <path d="m14 8 1-2" />
            <path d="M17 7 16 5" />
            <path d="M21 3s-2 2-3 3" />
            <path d="m19 10-1-1" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
        <p class="text-slate-500 leading-relaxed">
          To empower businesses worldwide through sustainable, cutting-edge
          technology solutions that drive efficiency, foster innovation, and
          solve the world’s most complex engineering challenges.
        </p>
      </div>

      <!-- Vision Card -->
      <div
        class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-start"
      >
        <!-- Icon Background changed to Green-50 -->
        <div class="bg-green-50 p-3 rounded-lg mb-6">
          <!-- SVG color changed to Green-600 -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-green-600"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
        <p class="text-slate-500 leading-relaxed">
          To be the most trusted global partner in the technological revolution,
          setting the standard for excellence and building a connected world
          where technology serves humanity.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No imports needed for SVG version
</script>

<style scoped>
div {
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
</style>
