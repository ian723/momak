<template>
  <header class="fixed top-0 w-full z-50 shadow-sm font-sans">
    
    <!-- 1. TOP BAR: Visible on all screens, but disappears on scroll -->
    <div 
      :class="[
        'bg-emerald-600 text-white transition-all duration-500 overflow-hidden',
        scrolled ? 'max-h-0 opacity-0' : 'max-h-24 py-2 md:py-2.5'
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0">
        <!-- Contact Info: Centered on mobile, left-aligned on desktop -->
        <div class="flex items-center justify-center space-x-4 md:space-x-8 text-[11px] md:text-[13px] font-light">
          <a href="mailto:info@momak.co.ke" class="flex items-center gap-1.5 hover:opacity-80 transition-opacity whitespace-nowrap">
            <i class="fas fa-envelope text-[10px] md:text-sm"></i>
            info@momak.co.ke
          </a>
          <a href="tel:+254735484130" class="flex items-center gap-1.5 hover:opacity-80 transition-opacity whitespace-nowrap">
            <i class="fas fa-phone-alt text-[10px] md:text-sm"></i>
            +254 735 484 130
          </a>
        </div>

        <!-- Slogan: Hidden on very small phones, shown from 'small' screens up -->
        <div class="hidden sm:block text-[11px] md:text-[13px] font-medium tracking-wide opacity-90">
          Engineering & Technology Solutions
        </div>
      </div>
    </div>

    <!-- 2. MAIN NAVIGATION -->
    <nav class="bg-white border-b border-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          
          <!-- Logo Section -->
          <div class="flex items-center gap-2 md:gap-3">
            <div class="text-emerald-600">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 19.77h20L12 2zm0 3.77l6.6 11.5H5.4L12 5.77z"/>
              </svg>
            </div>
            <div>
              <h1 class="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Momak</h1>
              <p class="text-[7px] md:text-[9px] font-bold tracking-[0.2em] text-emerald-600 uppercase -mt-0.5 md:-mt-1">
                Technologies Ltd
              </p>
            </div>
          </div>

          <!-- Desktop Menu & Button -->
          <div class="hidden md:flex items-center space-x-10">
            <div class="flex items-center space-x-8">
              <a
                v-for="(item, index) in navigation"
                :key="index"
                :href="item.href"
                class="text-[15px] font-semibold transition-all py-1"
                :class="activeIndex === index 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-gray-800 hover:text-emerald-600'"
                @click="setActive(index)"
              >
                {{ item.name }}
              </a>
            </div>
            <button class="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-md">
              Get a Quote
            </button>
          </div>

          <!-- Mobile Toggle Button -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-gray-800 p-2 focus:outline-none">
               <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition name="fade">
        <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-xl">
          <a
            v-for="(item, index) in navigation"
            :key="index"
            :href="item.href"
            class="block text-lg font-semibold"
            :class="activeIndex === index ? 'text-emerald-600' : 'text-gray-800'"
            @click="setActive(index)"
          >
            {{ item.name }}
          </a>
          <button class="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold shadow-lg">
            Get a Quote
          </button>
        </div>
      </transition>
    </nav>
  </header>
  
  <!-- Content Spacer -->
  <div class="h-28 md:h-32"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const activeIndex = ref(0);
const scrolled = ref(false);

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus" },
  { name: "Services", href: "/service" },
  { name: "Partners", href: "/partner" },
  { name: "Contact", href: "#" },
];

const toggleMenu = () => (isOpen.value = !isOpen.value);
const setActive = (i) => { activeIndex.value = i; isOpen.value = false; };

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>