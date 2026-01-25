<template>
  <section class="bg-green-50 py-24 px-4">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <!-- Heading -->
      <h2
        class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight"
      >
        Ready to start your next project?
      </h2>

      <!-- Description -->
      <p
        class="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
      >
        Contact our expert team of engineers today to discuss your technology
        and infrastructure needs. We are ready to scale with you.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-wrap justify-center gap-4 pt-4">
        <!-- Primary Button -->
        <router-link to="/contact"
          class="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-emerald-200 transition-all transform hover:-translate-y-1"
        >
          ContactUs
        </router-link>

        <!-- Secondary Button -->
        <!-- <button
          class="bg-white hover:bg-slate-50 text-emerald-600 border-2 border-emerald-600 px-10 py-4 rounded-xl font-bold text-lg shadow-sm transition-all transform hover:-translate-y-1"
        >
          Our Services
        </button> -->
      </div>
    </div>
  </section>
</template>

<script setup>
// Static component, no logic required
</script>

<style scoped>
/* Ensuring consistent font weight and smoothness */
h2 {
  letter-spacing: -0.02em;
}
</style>
