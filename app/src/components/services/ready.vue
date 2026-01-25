<template>
  <section class="bg-[#f8fafc] py-24 px-6 text-center">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
        Ready to start your next project?
      </h2>

      <p class="text-slate-500 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
        Our team of experts is ready to help you navigate your technical
        challenges and deliver world-class solutions.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <!-- Changed from <button> to <router-link> -->
        <router-link
          to="/contact"
          class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-emerald-200/50 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
        >
          Request a Consultation
        </router-link>
      </div>
    </div>
  </section>
</template>