<template>
  <section class="w-full bg-white pt-20">
    <!-- Header Text -->
    <div class="max-w-7xl mx-auto px-6 text-center mb-12">
      <h2 class="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
        Contact Momak Team
      </h2>
      <p class="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        Have a question or a project in mind? Reach out to our team for professional 
        support and bespoke technology solutions.
      </p>
    </div>

    <!-- Map Container -->
    <div class="relative w-full h-[500px] md:h-[600px] overflow-hidden border-t border-slate-100 shadow-inner">
      
      <!-- THE REAL GOOGLE MAP IFRAME -->
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5210075218297!2d36.72644997395959!3d-1.2384688987497228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19513565cc31%3A0xc5d02a604b13be95!2sKabete%20Gardens!5e1!3m2!1sen!2ske!4v1768667701892!5m2!1sen!2ske" 
        class="w-full h-full grayscale-[0.2] contrast-[1.1] brightness-[0.95]" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <!-- OVERLAY: Search Bar -->
      <!-- Note: Pointer-events-none on parent allows clicking the map, 
           but pointer-events-auto on the bar itself allows typing. -->
      <div class="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-lg px-6 z-20 pointer-events-none">
        <div class="bg-white rounded-full shadow-2xl p-1.5 flex items-center border border-slate-100 pointer-events-auto">
          <div class="pl-4 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <input 
            type="text" 
            placeholder="Search office location" 
            class="flex-1 px-4 py-2 outline-none text-slate-600 placeholder:text-slate-400 font-medium"
          />
          <button class="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all">
            Search
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Using your provided Google Maps Embed link
</script>

<style scoped>
section {
  font-family: 'Inter', sans-serif;
}

/* Optional: This creates a soft fade at the top of the map 
   to blend it into the white background above */
.relative::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(to bottom, white, transparent);
  z-index: 5;
  pointer-events: none;
}
</style>