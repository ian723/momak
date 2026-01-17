<template>
  <footer class="bg-white pt-16 pb-8 px-4 font-sans">
    <div class="max-w-7xl mx-auto">
      <!-- TOP SECTION: Flex layout to push links to the right -->
      <div class="flex flex-col lg:flex-row justify-between gap-12 mb-16">
        <!-- Left Side: Brand & Tagline (Takes up about 40%) -->
        <div class="lg:w-2/5 space-y-6">
          <div class="flex items-center gap-3">
            <!-- Icon in Green -->
            <div class="text-emerald-600">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 19.77h20L12 2zm0 3.77l6.6 11.5H5.4L12 5.77z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900">
              Momak Technologies
            </h3>
          </div>
          <p class="text-slate-400 leading-relaxed max-w-xs text-[15px]">
            Leading the way in engineering solutions and telecommunications
            infrastructure across the region.
          </p>
        </div>

        <!-- Right Side: 3 Columns of Links (Clustered together) -->
        <div class="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <!-- Column 1: Quick Links -->
          <div class="space-y-6">
            <h4 class="text-[16px] font-bold text-slate-900">Quick Links</h4>
            <ul class="space-y-4">
              <li>
                <a
                  href="#"
                  class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]"
                  >Services</a
                >
              </li>
            </ul>
          </div>

          <!-- Column 2: Company -->
          <div class="space-y-6">
            <h4 class="text-[16px] font-bold text-slate-900">Company</h4>
            <ul class="space-y-4">
              <li>
                <a
                  href="#"
                  class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]"
                  >Partners</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]"
                  >Contact</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </div>

          <!-- Column 3: Contact & Socials -->
          <div class="space-y-6">
            <h4 class="text-[16px] font-bold text-slate-900">Contact</h4>
            <div class="space-y-4">
              <a
                href="mailto:info@momak.co.ke"
                class="block text-slate-400 hover:text-emerald-600 transition-colors text-[15px]"
              >
                info@momak.co.ke
              </a>
              <p class="text-slate-400 text-[15px]">+254 735 484 130</p>

              <!-- Social Icons -->
              <div class="flex items-center gap-4 pt-2 text-slate-500">
                <a href="#" class="hover:text-emerald-600 transition-colors">
                  <i class="fas fa-share-alt text-lg"></i>
                </a>
                <a href="#" class="hover:text-emerald-600 transition-colors">
                  <i class="fas fa-globe text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM SECTION: Divider and Legal -->
      <div
        class="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-400"
      >
        <p>© 2024 Momak Technologies Ltd. All rights reserved.</p>

        <div class="flex gap-8">
          <a href="#" class="hover:text-emerald-600 transition-colors"
            >Terms of Service</a
          >
          <a href="#" class="hover:text-emerald-600 transition-colors"
            >Cookie Policy</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Static Footer
</script>
