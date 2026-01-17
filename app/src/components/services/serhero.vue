<template>
  <section
    class="relative w-full py-32 bg-[#020617] text-center overflow-hidden"
  >
    <!-- The High-Tech Green Wave/Glow effect -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <!-- Gradient Radial Glow -->
      <div
        class="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-250 h-150 bg-green-900/20 rounded-full blur-[120px]"
      ></div>

      <!-- Subtle Green Beam/Wave -->
      <div
        class="absolute bottom-0 left-0 right-0 h-75 opacity-30"
        style="
          background: radial-gradient(
            ellipse at bottom,
            rgba(34, 197, 94, 0.15),
            transparent 70%
          );
        "
      ></div>

      <!-- Animated SVG Wave for that "Wavy" look in the image -->
      <svg
        class="absolute bottom-0 w-full h-24 opacity-20"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#22c55e"
          fill-opacity="1"
          d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 px-6 max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
        Our Engineering & ICT Services
      </h1>

      <p
        class="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
      >
        Driving innovation through comprehensive ICT solutions, engineering
        excellence, and sustainable energy projects.
      </p>
    </div>
  </section>
</template>

<script setup>
// Pure Tailwind and SVG implementation - No external assets required
</script>

<style scoped>
h1 {
  /* Matching the exact weight and spacing of your screenshot */
  font-family: "Inter", sans-serif;
  letter-spacing: -0.02em;
}
</style>
