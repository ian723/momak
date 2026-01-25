<template>
  <section class="max-w-7xl mx-auto px-6 py-20">
    <!-- Main Banner Container -->
    <div
      class="relative overflow-hidden bg-emerald-600 rounded-[2.5rem] py-20 px-8 md:px-16 text-center shadow-2xl shadow-green-100"
    >
      <!-- Decorative Circle Top Right -->
      <div
        class="absolute -top-24 -right-24 w-80 h-80 bg-green-500/30 rounded-full blur-3xl"
      ></div>

      <!-- Decorative Circle Bottom Left -->
      <div
        class="absolute -bottom-24 -left-24 w-64 h-64 bg-green-400/20 rounded-full blur-2xl"
      ></div>

      <!-- Content -->
      <div class="relative z-10">
        <h2
          class="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          Ready to build the future?
        </h2>

        <p
          class="text-green-50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Whether you're looking for a technology partner or a place to grow
          your career, we'd love to hear from you.
        </p>

        <!-- Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <!-- Primary White Button -->
          <router-link to="/partner"
            class="bg-white text-green-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 min-w-50"
          >
            Partner With Us
          </router-link>

          <!-- Secondary Outline Button -->
          <!-- <button
            class="border-2 border-white/80 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 min-w-50"
          >
            View Openings
          </button> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pure Tailwind CSS implementation to match the provided image
</script>

<style scoped>
section {
  font-family: "Inter", sans-serif;
}
</style>
