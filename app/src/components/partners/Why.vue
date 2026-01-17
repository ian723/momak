<template>
  <section
    class="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16 items-center"
  >
    <!-- LEFT: FEATURES LIST -->
    <div class="w-full lg:w-1/2 space-y-10">
      <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
        Why Partner with Momak <br />
        Technologies?
      </h2>

      <!-- Feature 1 -->
      <div class="flex items-start gap-6">
        <div
          class="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 9V2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="M20 12h2" />
            <path d="m19.07 4.93-1.41 1.41" />
            <path d="M12 22v-2" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
          </svg>
        </div>
        <div>
          <h4 class="text-xl font-bold text-slate-900 mb-2">
            Shared Innovation
          </h4>
          <p class="text-slate-500 leading-relaxed">
            Collaborate on cutting-edge R&D projects and access our latest
            proprietary technology stacks.
          </p>
        </div>
      </div>

      <!-- Feature 2 -->
      <div class="flex items-start gap-6">
        <div
          class="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>
        <div>
          <h4 class="text-xl font-bold text-slate-900 mb-2">
            Market Expansion
          </h4>
          <p class="text-slate-500 leading-relaxed">
            Leverage our global distribution channels to reach new territories
            and specialized verticals.
          </p>
        </div>
      </div>

      <!-- Feature 3 -->
      <div class="flex items-start gap-6">
        <div
          class="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div>
          <h4 class="text-xl font-bold text-slate-900 mb-2">
            Technical Excellence
          </h4>
          <p class="text-slate-500 leading-relaxed">
            Tap into our pool of certified experts and specialized engineering
            teams for mission-critical support.
          </p>
        </div>
      </div>
    </div>

    <!-- RIGHT: TESTIMONIAL CARD -->
    <div class="w-full lg:w-1/2">
      <div
        class="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 border border-slate-100 relative"
      >
        <!-- Quote Icon -->
        <div class="text-green-600 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V4H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.0166 21L3.0166 18C3.0166 16.8954 3.91203 16 5.0166 16H8.0166C8.56888 16 9.0166 15.5523 9.0166 15V9C9.0166 8.44772 8.56888 8 8.0166 8H4.0166C3.46432 8 3.0166 8.44772 3.0166 9V12C3.0166 12.5523 2.56888 13 2.0166 13H0.0166016V4H10.0166V15C10.0166 18.3137 7.33031 21 4.0166 21H3.0166Z"
            />
          </svg>
        </div>

        <!-- Testimonial Text -->
        <blockquote
          class="text-xl md:text-2xl italic text-slate-700 leading-relaxed mb-10 font-medium"
        >
          "Momak Technologies has been instrumental in our digital
          transformation. Their collaborative approach and technical depth are
          unmatched in the industry. We consider them more than a vendor—they
          are a core strategic ally."
        </blockquote>

        <!-- Author Info -->
        <div class="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
            alt="Marcus Thorne"
            class="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <h5 class="text-lg font-bold text-slate-900">Marcus Thorne</h5>
            <p class="text-slate-400 text-sm">CTO, NexGen Solutions</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pure Tailwind and SVG implementation
</script>

<style scoped>
h2,
h4 {
  font-family: "Inter", sans-serif;
  letter-spacing: -0.01em;
}
</style>
