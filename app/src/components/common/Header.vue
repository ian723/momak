<template>
  <header class="fixed top-0 w-full z-50 shadow-sm font-sans">
    <!-- 1. TOP BAR -->
  <div :class="['bg-emerald-600 text-white transition-all duration-500 overflow-hidden', scrolled ? 'max-h-0 opacity-0' : 'max-h-24 py-2 md:py-2.5']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
      
      <!-- Left: Contact Info -->
      <div class="flex items-center justify-center space-x-4 md:space-x-8 text-[11px] md:text-[13px] font-light">
        <a href="mailto:info@momak.co.ke" class="flex items-center gap-1.5 whitespace-nowrap hover:text-emerald-100 transition-colors">
          <i class="fas fa-envelope text-[10px]"></i> info@momak.co.ke
        </a>
        <a href="tel:+254735484130" class="flex items-center gap-1.5 whitespace-nowrap hover:text-emerald-100 transition-colors">
          <i class="fas fa-phone-alt text-[10px]"></i> +254 735 484 130
        </a>
      </div>

      <!-- Right: Tagline & Social Logos -->
      <div class="flex items-center gap-6">
        <div class="hidden lg:block text-[11px] md:text-[13px] font-medium opacity-90 border-r border-emerald-500/50 pr-6">
          Engineering & Technology Solutions
        </div>
        
        <!-- Social Logos -->
        <div class="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/moses-mtende-pmp%C2%AE-527aa265/" target="_blank" class="hover:text-emerald-200 transition-colors" aria-label="LinkedIn">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          <a href="https://www.facebook.com/mmtende/" target="_blank" class="hover:text-emerald-200 transition-colors" aria-label="Facebook">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <a href="https://x.com/mtendemoses" target="_blank" class="hover:text-emerald-200 transition-colors" aria-label="X">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </div>

    <!-- 2. MAIN NAVIGATION -->
    <nav class="bg-white border-b border-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <div class="flex items-center gap-2 md:gap-3">
            <div class="text-emerald-600">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 19.77h20L12 2zm0 3.77l6.6 11.5H5.4L12 5.77z" />
              </svg>
            </div>
            <div>
              <h1 class="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Momak</h1>
              <p class="text-[7px] md:text-[9px] font-bold tracking-[0.2em] text-emerald-600 uppercase">Technologies Ltd</p>
            </div>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-10">
            <div class="flex items-center space-x-8">
              <!-- CHANGE: We use router-link and check route.path -->
              <router-link
                v-for="(item, index) in navigation"
                :key="index"
                :to="item.href"
                class="text-[15px] font-semibold transition-all py-1 border-b-2"
                :class="route.path === item.href 
                  ? 'text-emerald-600 border-emerald-600' 
                  : 'text-gray-800 border-transparent hover:text-emerald-600'"
              >
                {{ item.name }}
              </router-link>
            </div>
           <router-link to="/getaquote">
  <button class="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-md">
    Get a Quote
  </button>
</router-link>
          </div>

          <!-- Mobile Toggle -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-gray-800 p-2">
              <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown -->
      <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-xl">
        <router-link
          v-for="(item, index) in navigation"
          :key="index"
          :to="item.href"
          class="block text-lg font-semibold"
          :class="route.path === item.href ? 'text-emerald-600' : 'text-gray-800'"
          @click="isOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </nav>
  </header>
  <div class="h-28 md:h-32"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router"; // 1. Import useRoute

const route = useRoute(); // 2. Initialize it
const isOpen = ref(false);
const scrolled = ref(false);

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus" },
  { name: "Services", href: "/service" },
  { name: "Partners", href: "/partner" },
  { name: "Contact", href: "/contact" },
  
];

const toggleMenu = () => (isOpen.value = !isOpen.value);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>