<template>
  <section class="relative px-4 py-8 md:px-10 md:py-12 bg-slate-50 min-h-150">
    <!-- Main Hero Container -->
    <div
      class="relative max-w-7xl mx-auto h-125 md:h-150 overflow-hidden rounded-3xl shadow-2xl"
    >
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=2000"
          alt="Telecom Tower"
          class="w-full h-full object-cover"
        />
        <!-- Dark Blue/Black Gradient Overlay to make text readable -->
        <div
          class="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/40 to-transparent"
        ></div>
      </div>

      <!-- Content Area -->
      <div
        class="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 max-w-3xl"
      >
        <!-- Animated Transition Group for Slides -->
        <transition name="fade-slide" mode="out-in">
          <div :key="currentSlide" class="space-y-6">
            <!-- Main Title -->
            <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight">
              {{ slides[currentSlide].title }}
            </h1>

            <!-- Paragraph Text -->
            <p
              class="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-xl"
            >
              {{ slides[currentSlide].description }}
            </p>
          </div>
        </transition>

        <!-- Buttons -->
        <div class="mt-10 flex flex-wrap gap-4">
          <router-link
            to="/getaquote"
            class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started
          </router-link>
          <router-link
            to="/services"
            class="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-xl font-bold transition-all"
          >
            View Our Services
          </router-link>
        </div>

        <!-- Slide Indicators (Dots) -->
        <div class="absolute bottom-8 left-8 md:left-20 flex space-x-2">
          <div
            v-for="(_, index) in slides"
            :key="index"
            @click="currentSlide = index"
            :class="[
              'h-1.5 transition-all duration-500 rounded-full cursor-pointer',
              currentSlide === index ? 'w-8 bg-emerald-500' : 'w-2 bg-white/30',
            ]"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const currentSlide = ref(0);
let timer = null;

const slides = [
  {
    title: "Who We Are",
    description:
      "Architects of connectivity. Builders of innovation. Since 2020, Momak Technologies Ltd has been a leader in engineering, telecom, and ICT, driving positive change in a connected world.",
  },
  {
    title: "What We Do",
    description:
      "We provide expert engineering and ICT solutions including solar installations, civil works, and telecom infrastructure. Our highly skilled team is built to solve complex problems and deliver high-impact results.",
  },
  {
    title: "Why We Care",
    description:
      "We believe in technology for good. By bridging the digital divide and prioritizing sustainability, we empower communities and create a brighter, more inclusive future.",
  },
];

const startTimer = () => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  }, 4000); // Transitions every 2 seconds
};

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
/* Smooth Fade and Slide Animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.8s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
