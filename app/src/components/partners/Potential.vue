<template>
  <section class="bg-green-600 py-24 px-6 overflow-hidden">
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
    >
      <!-- LEFT CONTENT -->
      <div class="w-full lg:w-1/2 text-white space-y-8">
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">
          Potential Partners
        </h2>

        <p
          class="text-green-50 text-lg md:text-xl leading-relaxed max-w-xl font-light"
        >
          We are always looking for visionary companies to join our network.
          Whether you're a startup or an enterprise, let's explore how we can
          create value together.
        </p>

        <!-- Features Checklist -->
        <ul class="space-y-4 pt-4">
          <li class="flex items-center gap-4 text-lg font-medium">
            <div
              class="shrink-0 w-6 h-6 rounded-full bg-green-500/50 flex items-center justify-center border border-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            Global referral network access
          </li>
          <li class="flex items-center gap-4 text-lg font-medium">
            <div
              class="shrink-0 w-6 h-6 rounded-full bg-green-500/50 flex items-center justify-center border border-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            Joint marketing opportunities
          </li>
          <li class="flex items-center gap-4 text-lg font-medium">
            <div
              class="shrink-0 w-6 h-6 rounded-full bg-green-500/50 flex items-center justify-center border border-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            Priority technical support
          </li>
        </ul>
      </div>

      <!-- RIGHT CONTENT: THE FORM CARD -->
      <div class="w-full lg:w-1/2">
        <div
          class="bg-white rounded-4xl p-8 md:p-12 shadow-2xl shadow-green-900/20"
        >
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Row 1: Name and Company -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label
                  class="text-[10px] font-bold text-slate-400 uppercase tracking-widest"
                  >Fullname</label
                >
                <input
                  type="text"
                  placeholder="John Doe"
                  class="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all placeholder:text-slate-300"
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-[10px] font-bold text-slate-400 uppercase tracking-widest"
                  >Company</label
                >
                <input
                  type="text"
                  placeholder="Acme Inc."
                  class="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all placeholder:text-slate-300"
                />
              </div>
            </div>

            <!-- Row 2: Email -->
            <div class="space-y-2">
              <label
                class="text-[10px] font-bold text-slate-400 uppercase tracking-widest"
                >Email Address</label
              >
              <input
                type="email"
                placeholder="john@company.com"
                class="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <!-- Row 3: Select -->
            <div class="space-y-2">
              <label
                class="text-[10px] font-bold text-slate-400 uppercase tracking-widest"
                >Partnership Type</label
              >
              <select
                class="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-green-500 outline-none appearance-none bg-[url('https://www.svgrepo.com/show/503411/chevron-down.svg')] bg-size-[16px] bg-position-[right_20px_center] bg-no-repeat transition-all"
              >
                <option>Technology Partnership</option>
                <option>Referral Program</option>
                <option>Strategic Alliance</option>
              </select>
            </div>

            <!-- Row 4: Message -->
            <div class="space-y-2">
              <label
                class="text-[10px] font-bold text-slate-400 uppercase tracking-widest"
                >Message</label
              >
              <textarea
                rows="4"
                placeholder="Tell us about your vision..."
                class="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all resize-none placeholder:text-slate-300"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  // Logic to handle form submission
  alert("Inquiry Sent Successfully!");
};
</script>

<style scoped>
div {
  font-family: "Inter", sans-serif;
}
</style>
