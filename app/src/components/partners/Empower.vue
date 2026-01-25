<template>
  <section
    class="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 lg:gap-20"
  >
    <!-- LEFT CONTENT -->
    <div class="w-full md:w-1/2 space-y-6">
      <!-- Pill Tag -->
      <span
        class="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-[11px] font-bold tracking-widest uppercase"
      >
        Global Collaboration
      </span>

      <!-- Heading -->
      <h1
        class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]"
      >
        Empowering <br />
        Innovation Through <br />
        <span class="text-green-600">Strategic Partnerships</span>
      </h1>

      <!-- Description -->
      <p class="text-slate-500 text-lg leading-relaxed max-w-lg">
        We believe in the power of synergy. By building a collaborative
        ecosystem, we drive technical excellence and expand market reach for our
        clients and partners alike.
      </p>

      <!-- Buttons -->
      <div class="flex flex-wrap gap-4 pt-4">
        <button
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-green-200/50"
        >
          Become a Partner
        </button>
        <button
          class="border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all"
        >
          View Our Network
        </button>
      </div>
    </div>

    <!-- RIGHT CONTENT (Image) -->
    <div class="w-full md:w-1/2 relative">
      <!-- Decorative Background element (Optional) -->
      <div class="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-50"></div>
      
      <div
        class="relative p-3 bg-white rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden"
      >
        <!-- Actual Image Tag -->
        <img
          src="https://res.cloudinary.com/drbhyey5b/image/upload/v1769259252/Innov_dlk5cj.png" 
          alt="Business Partnership and Collaboration"
          class="aspect-square w-full object-cover rounded-[2.5rem]"
        />
        
        <!-- Decorative Overlay (Optional: adds a slight green tint to match brand) -->
        <div class="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Partnership Hero Section for Momak Technologies Ltd
 * Image version
 */
</script>

<style scoped>
h1 {
  font-family: "Inter", sans-serif;
  letter-spacing: -0.02em;
}

/* Optional: Subtle entrance animation for the image */
img {
  animation: reveal 1s ease-out;
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>