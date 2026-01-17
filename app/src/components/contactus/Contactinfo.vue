<template>
  <section class="bg-slate-50 py-24">
    <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
      
      <!-- LEFT: CONTACT CHANNELS -->
      <div class="w-full lg:w-3/5 space-y-8">
        <h2 class="text-3xl font-bold text-slate-900 mb-8">Our Contact Channels</h2>

        <!-- Top Grid: Location & Email -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Location Card -->
          <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div class="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900">Location</h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              Lower Kabete Rd, Spring Valley,<br />
              P.O. Box 4567-00100,<br />
              Nairobi, Kenya
            </p>
            <a href="#" class="inline-flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all">
              Get Directions 
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
          </div>

          <!-- Email Card -->
          <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div class="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900">Email</h3>
            <div class="space-y-1">
              <p class="text-green-600 font-bold text-sm">info@momak.co.ke</p>
              <p class="text-slate-400 text-sm">CC: moses.mtende@momak.co.ke</p>
            </div>
            <p class="text-slate-400 text-[11px] italic pt-2">Response within 24 hours</p>
          </div>
        </div>

        <!-- Call Us Card (Wide) -->
        <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6">
          <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="flex flex-wrap items-center gap-x-8 gap-y-2">
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
              <p class="text-2xl font-bold text-slate-900">+254 735 484 130</p>
            </div>
            <p class="text-green-600 font-bold text-lg pt-5 opacity-50">+254 7XX XXX XXX</p>
          </div>
        </div>

        <!-- Office Hours Banner -->
        <div class="bg-slate-100/50 p-5 rounded-xl border-l-4 border-green-600 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <p class="text-slate-600 text-sm font-medium">Office Hours: Mon - Fri, 8:00 AM - 6:00 PM (EAT)</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span class="text-[10px] font-bold text-green-600 uppercase tracking-widest">Active Now</span>
          </div>
        </div>
      </div>

      <!-- RIGHT: DIRECT MESSAGE FORM -->
      <div class="w-full lg:w-2/5">
        <div class="bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200">
          <!-- Form Header -->
          <div class="bg-green-600 p-8 text-white">
            <h3 class="text-2xl font-bold mb-1">Direct Message</h3>
            <p class="text-green-100 text-sm opacity-80">Send us a message and our specialists will get back to you.</p>
          </div>

          <!-- Form Body -->
          <form @submit.prevent="" class="p-8 space-y-5">
            <div class="space-y-1.5">
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fullname</label>
              <input type="text" placeholder="John Doe" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-green-500 outline-none transition-all" />
            </div>

            <div class="space-y-1.5">
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
              <input type="email" placeholder="john@example.com" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-green-500 outline-none transition-all" />
            </div>

            <div class="space-y-1.5">
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Subject</label>
              <select class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-green-500 outline-none appearance-none bg-[url('https://www.svgrepo.com/show/503411/chevron-down.svg')] bg-[length:14px] bg-[right_16px_center] bg-no-repeat">
                <option>Project Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership</option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Message</label>
              <textarea rows="4" placeholder="How can we help you?" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-green-500 outline-none transition-all resize-none"></textarea>
            </div>

            <button class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group">
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
section {
  font-family: 'Inter', sans-serif;
}
</style>