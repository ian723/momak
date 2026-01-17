<template>
  <section class="bg-slate-900 px-6 py-12 md:py-16">
    <div class="mx-auto max-w-lg">
      <h2 class="mb-8 text-left text-2xl font-bold text-white md:text-3xl">
        Get in Touch
      </h2>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name Input -->
        <div>
          <label for="name" class="sr-only">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="Full Name"
            required
            class="w-full rounded-lg bg-slate-800 px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <span v-if="errors.name" class="mt-1 block text-sm text-rose-400">
            {{ errors.name }}
          </span>
        </div>

        <!-- Email Input -->
        <div>
          <label for="email" class="sr-only">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Email Address"
            required
            class="w-full rounded-lg bg-slate-800 px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <span v-if="errors.email" class="mt-1 block text-sm text-rose-400">
            {{ errors.email }}
          </span>
        </div>

        <!-- Subject Input -->
        <div>
          <label for="subject" class="sr-only">Subject</label>
          <input
            type="text"
            id="subject"
            v-model="formData.subject"
            placeholder="Subject"
            required
            class="w-full rounded-lg bg-slate-800 px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <span v-if="errors.subject" class="mt-1 block text-sm text-rose-400">
            {{ errors.subject }}
          </span>
        </div>

        <!-- Message Textarea -->
        <div>
          <label for="message" class="sr-only">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            placeholder="Your Message"
            rows="5"
            required
            class="w-full rounded-lg bg-slate-800 px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
          ></textarea>
          <span v-if="errors.message" class="mt-1 block text-sm text-rose-400">
            {{ errors.message }}
          </span>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full rounded-lg bg-sky-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          :disabled="isSubmitting"
        >
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else>{{ loadingText }}</span>
        </button>

        <!-- Status Message -->
        <div
          v-if="submitMessage"
          class="rounded-lg p-3 text-center text-sm font-medium"
          :class="{
            'bg-emerald-500/20 text-emerald-400':
              submitMessage.type === 'success',
            'bg-rose-500/20 text-rose-400': submitMessage.type === 'error',
          }"
        >
          {{ submitMessage.text }}
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref(null);
const loadingText = ref("Sending");
const loadingInterval = ref(null);

const validateForm = () => {
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  Object.keys(errors).forEach((key) => (errors[key] = ""));

  if (!formData.name.trim()) {
    errors.name = "Please enter your name";
    isValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = "Please enter your email";
    isValid = false;
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  if (!formData.subject.trim()) {
    errors.subject = "Please enter a subject";
    isValid = false;
  }

  if (!formData.message.trim()) {
    errors.message = "Please enter your message";
    isValid = false;
  } else if (formData.message.length < 10) {
    errors.message = "Message should be at least 10 characters";
    isValid = false;
  }

  return isValid;
};

const startLoadingAnimation = () => {
  let dots = 0;
  loadingInterval.value = setInterval(() => {
    dots = (dots + 1) % 4;
    loadingText.value = "Sending" + ".".repeat(dots);
  }, 500);
};

const stopLoadingAnimation = () => {
  clearInterval(loadingInterval.value);
  loadingText.value = "Sending";
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  submitMessage.value = null;
  startLoadingAnimation();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby-AUnu_A298nY58QR72derNjW088jqDZSWqqcZvtScml_jjrpImZs-IYk5mqAEwx7g/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    submitMessage.value = {
      type: "success",
      text: "Message sent successfully!",
    };

    /**Clear form data */
    Object.keys(formData).forEach((key) => (formData[key] = ""));

    /**Clear success message after 5 seconds */
    setTimeout(() => {
      submitMessage.value = null;
    }, 5000);
  } catch (error) {
    submitMessage.value = {
      type: "error",
      text: "Failed to send message. Please try again later.",
    };
  } finally {
    isSubmitting.value = false;
    stopLoadingAnimation();
  }
};
</script>
