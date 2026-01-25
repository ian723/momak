<template>
  <footer class="bg-white pt-16 pb-8 px-4 font-sans">
    <div class="max-w-7xl mx-auto">
      <!-- TOP SECTION -->
      <div class="flex flex-col lg:flex-row justify-between gap-12 mb-16">
        <!-- Left Side: Brand & Tagline -->
        <div class="lg:w-2/5 space-y-6">
          <div class="flex items-center gap-3">
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

        <!-- Right Side: Links -->
        <div class="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <!-- Column 1: Quick Links -->
          <div class="space-y-6">
            <h4 class="text-[16px] font-bold text-slate-900">Quick Links</h4>
            <ul class="space-y-4">
              <li>
                <router-link to="/" class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]">Home</router-link>
              </li>
              <li>
                <router-link to="/aboutus" class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]">About Us</router-link>
              </li>
              <li>
                <router-link to="/service" class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]">Services</router-link>
              </li>
            </ul>
          </div>

          <!-- Column 2: Company -->
          <div class="space-y-6">
            <h4 class="text-[16px] font-bold text-slate-900">Company</h4>
            <ul class="space-y-4">
              <li>
                <router-link to="/partner" class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]">Partners</router-link>
              </li>
              <li>
                <router-link to="/contact" class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]">Contact</router-link>
              </li>
              <li>
                <a href="#" class="text-slate-400 hover:text-emerald-600 transition-colors text-[15px]">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Contact & Socials -->
          <div class="space-y-6">
            <h4 class="text-[16px] font-bold text-slate-900">Contact</h4>
            <div class="space-y-4">
              <a href="mailto:info@momak.co.ke" class="block text-slate-400 hover:text-emerald-600 transition-colors text-[15px]">
                info@momak.co.ke
              </a>
              <p class="text-slate-400 text-[15px]">+254 735 484 130</p>

              <!-- SOCIAL LOGOS HERE -->
              <div class="flex items-center gap-5 pt-2 text-slate-400">
                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/moses-mtende-pmp%C2%AE-527aa265/" target="_blank" class="hover:text-emerald-600 transition-colors" aria-label="LinkedIn">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                <!-- Facebook -->
                <a href="https://www.facebook.com/mmtende/" target="_blank" class="hover:text-emerald-600 transition-colors" aria-label="Facebook">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <!-- X (formerly Twitter) -->
                <a href="https://x.com/mtendemoses" target="_blank" class="hover:text-emerald-600 transition-colors" aria-label="X">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM SECTION -->
      <div class="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-400">
        <p>© {{ new Date().getFullYear() }} Momak Technologies Ltd. All rights reserved.</p>
        <div class="flex gap-8">
          <a href="#" class="hover:text-emerald-600 transition-colors">Terms of Service</a>
          <a href="#" class="hover:text-emerald-600 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>