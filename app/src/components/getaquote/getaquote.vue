<template>
  <div class="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 my-10 font-sans">
    
    <!-- Header Section -->
    <div class="mb-8">
      <h2 class="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Request a Free Quote</h2>
      <p class="text-slate-500 text-[15px] leading-relaxed">
        Tell us about your project and our team at Momak Technologies will get back to you within 24 hours.
      </p>
    </div>

    <hr class="border-slate-100 mb-8" />

    <!-- SUCCESS MESSAGE (Appears even in Demo Mode) -->
    <div v-if="submitted" class="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
      <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 class="text-xl font-bold text-emerald-900">Request Sent Successfully!</h3>
      <p class="text-emerald-700">Thank you, {{ formData.name }}. We have received your request and will contact you shortly.</p>
      <button @click="resetForm" class="text-emerald-600 font-bold hover:underline pt-2">Send another request</button>
    </div>

    <!-- QUOTE FORM -->
    <form v-else @submit.prevent="handleSubmit" class="space-y-6">
      <div class="space-y-2">
        <label class="block text-sm font-bold text-slate-700">Full Name</label>
        <input v-model="formData.name" type="text" required placeholder="e.g. John Doe" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none transition-all" />
      </div>

      <div class="space-y-2">
        <label class="block text-sm font-bold text-slate-700">Business Email</label>
        <input v-model="formData.email" type="email" required placeholder="john@company.com" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none transition-all" />
      </div>

      <div class="space-y-2">
        <label class="block text-sm font-bold text-slate-700">Service Required</label>
        <select v-model="formData.service" required class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none appearance-none bg-white">
          <option value="" disabled>Select a service</option>
          <option>ICT Solutions</option>
          <option>Telecommunications</option>
          <option>Solar Solutions</option>
          <option>Civil Engineering</option>
        </select>
      </div>

      <div class="space-y-2">
        <label class="block text-sm font-bold text-slate-700">Project Details</label>
        <textarea v-model="formData.details" required rows="5" placeholder="Describe your project..." class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none resize-none"></textarea>
      </div>

      <button :disabled="loading" type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-200">
        <span v-if="loading">Sending Request...</span>
        <span v-else class="flex items-center gap-2">Submit Quote <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import emailjs from '@emailjs/browser';

const loading = ref(false);
const submitted = ref(false);

// --- EDIT THIS LINE TO GO LIVE ---
const IS_LIVE = false; // Set to 'true' when you pay for a subscription

const formData = reactive({
  name: '',
  email: '',
  service: '',
  details: ''
});

const handleSubmit = async () => {
  loading.value = true;

  if (!IS_LIVE) {
    // DEMO MODE: Wait 2 seconds then show success
    setTimeout(() => {
      loading.value = false;
      submitted.value = true;
      console.log("Demo Mode: Form data captured but not sent:", formData);
    }, 2000);
    return;
  }

  // LIVE MODE: Real EmailJS sending
  const SERVICE_ID = 'service_n8930ks'; 
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
    submitted.value = true;
  } catch (error) {
    alert('Live Error: ' + error.text);
  } finally {
    loading.value = false;
  }
};

const resetForm = () => {
  submitted.value = false;
  formData.name = '';
  formData.email = '';
  formData.service = '';
  formData.details = '';
};
</script>