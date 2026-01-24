<template>
  <section class="bg-slate-50 py-24 min-h-screen font-sans">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        <!-- LEFT COLUMN: CONTACT CHANNELS -->
        <div class="w-full lg:w-3/5 space-y-8">
          <h2 class="text-3xl font-extrabold text-slate-900 mb-8">Our Contact Channels</h2>

          <!-- Grid: Location & Email -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Location Card -->
            <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div class="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900">Location</h3>
              <p class="text-slate-500 text-sm leading-relaxed">
                Lower Kabete Rd, Spring Valley,<br />
                P.O. Box 4567-00100,<br />
                Nairobi, Kenya
              </p>
              <a href="https://maps.google.com" target="_blank" class="inline-flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all">
                Get Directions 
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </div>

            <!-- Email Card -->
            <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
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
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div class="flex flex-wrap items-center gap-x-8 gap-y-2">
              <div>
                <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                <p class="text-2xl font-bold text-slate-900">+254 735 484 130</p>
              </div>
              <p class="text-green-600 font-bold text-lg pt-5 opacity-40">+254 7XX XXX XXX</p>
            </div>
          </div>

          <!-- Office Hours Banner -->
          <div class="bg-white/50 p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <p class="text-slate-600 text-sm font-medium">Mon - Fri, 8:00 AM - 6:00 PM (EAT)</p>
            </div>
            <div class="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
              <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span class="text-[10px] font-bold text-green-600 uppercase tracking-widest">Active Now</span>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: DIRECT MESSAGE FORM -->
        <div class="w-full lg:w-2/5">
          <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 min-h-[620px] flex flex-col border border-slate-50">
            
            <!-- Form Header -->
            <div class="bg-green-600 p-8 text-white">
              <h3 class="text-2xl font-bold mb-1">Direct Message</h3>
              <p class="text-green-100 text-sm opacity-90">
                {{ submitted ? 'Message Received' : 'Send us a message and our specialists will get back to you.' }}
              </p>
            </div>

            <!-- SUCCESS STATE -->
            <div v-if="submitted" class="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div class="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h4 class="text-2xl font-bold text-slate-900">Thank You!</h4>
              <p class="text-slate-500 leading-relaxed max-w-xs">
                Your message has been sent successfully. Our team will reach out to you at <strong>{{ contactForm.email }}</strong> very soon.
              </p>
              <button @click="resetContactForm" class="text-green-600 font-bold hover:underline pt-4">
                Send another message
              </button>
            </div>

            <!-- FORM BODY -->
            <form v-else @submit.prevent="handleContactSubmit" class="p-8 space-y-5 flex-1">
              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fullname</label>
                <input v-model="contactForm.name" type="text" required placeholder="John Doe" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/5 outline-none transition-all" />
              </div>

              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input v-model="contactForm.email" type="email" required placeholder="john@example.com" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/5 outline-none transition-all" />
              </div>

              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                <div class="relative">
                  <select v-model="contactForm.subject" required class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-green-500 outline-none appearance-none bg-white font-medium text-slate-700">
                    <option value="" disabled>Select a subject</option>
                    <option>Project Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                  <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Message</label>
                <textarea v-model="contactForm.message" required rows="4" placeholder="How can we help you?" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/5 outline-none transition-all resize-none"></textarea>
              </div>

              <button :disabled="loading" class="w-full bg-green-600 hover:bg-green-700 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group mt-4 shadow-lg shadow-green-100">
                <span v-if="loading">Sending Message...</span>
                <span v-else class="flex items-center gap-2">
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import emailjs from '@emailjs/browser';

const loading = ref(false);
const submitted = ref(false);

// --- EDIT THIS LINE TO GO LIVE ---
const IS_LIVE = false; 

const contactForm = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const handleContactSubmit = async () => {
  loading.value = true;

  if (!IS_LIVE) {
    // DEMO MODE: Wait 2 seconds then show success
    setTimeout(() => {
      loading.value = false;
      submitted.value = true;
    }, 2000);
    return;
  }

  // LIVE MODE (EmailJS)
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, contactForm, PUBLIC_KEY);
    submitted.value = true;
  } catch (error) {
    alert('Contact Form Error: ' + (error.text || 'Failed to send'));
  } finally {
    loading.value = false;
  }
};

const resetContactForm = () => {
  submitted.value = false;
  contactForm.name = '';
  contactForm.email = '';
  contactForm.subject = '';
  contactForm.message = '';
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

section {
  font-family: 'Inter', sans-serif;
}
</style>