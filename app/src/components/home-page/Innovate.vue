<template>
  <section class="bg-slate-50 py-20 px-4 md:px-10">
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center"
    >
      <!-- LEFT CONTENT: Text and Button -->
      <div class="lg:w-1/2 space-y-8">
        <div>
          <span
            class="text-emerald-600 font-bold uppercase tracking-widest text-sm"
          >
            Innovating Infrastructure
          </span>
          <h2
            class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 leading-tight"
          >
            Welcome to Momak Technologies
          </h2>
        </div>

        <div class="space-y-6 text-slate-600 leading-relaxed text-lg">
          <p>
            Momak Technologies Ltd is at the forefront of engineering
            excellence, providing cutting-edge solutions in the
            telecommunications sector. We pride ourselves on innovation,
            reliability, and our ability to tackle the most complex technical
            challenges.
          </p>
          <p>
            Our expert team ensures that every project meets international
            standards of quality and safety, lighting the path for technological
            advancement across the region.
          </p>
        </div>

        <router-link to="/aboutus"
          class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-1"
        >
          Read More About Us
        </router-link>
      </div>

      <!-- RIGHT CONTENT: Feature Cards -->
      <div class="lg:w-1/2 flex flex-col md:flex-row gap-6">
        <!-- Card 1 -->
        <div
          class="flex-1 bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 transition-transform hover:scale-[1.02]"
        >
          <div class="h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800"
              alt="Engineering"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-8 space-y-4">
            <h3 class="text-xl font-bold text-slate-900">
              Engineering Excellence
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              We deliver world-class technology and engineering services that
              light up the darkness.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="flex-1 bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 transition-transform hover:scale-[1.02] md:mt-12"
        >
          <div class="h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800"
              alt="Telecom"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-8 space-y-4">
            <h3 class="text-xl font-bold text-slate-900">Telecom Solutions</h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              Expertise in mobile network infrastructure, fiber optics, and
              wireless communication systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No extra logic needed for this static section
</script>

<style scoped>
/* Optional: Soften the font if you aren't using a global font */
section {
  font-family: "Inter", sans-serif;
}
</style>
