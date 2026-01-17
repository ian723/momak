<template>
  <section class="bg-slate-900 px-6 py-12 md:py-16">
    <div class="mx-auto max-w-lg">
      <h2 class="mb-8 text-left text-2xl font-bold text-white md:text-3xl">
        Contact Information
      </h2>

      <ul role="list" class="space-y-6">
        <li
          v-for="item in contactDetails"
          :key="item.label"
          class="flex items-start gap-4"
          role="listitem"
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-800/50 md:h-14 md:w-14"
          >
            <component
              :is="item.iconComponent"
              class="h-6 w-6 text-sky-400 md:h-7 md:w-7"
              aria-hidden="true"
            />
          </div>

          <div class="flex-1">
            <h3 class="text-base font-semibold text-white">
              {{ item.label }}
            </h3>
            <div class="mt-1">
              <a
                v-if="item.href"
                :href="item.href"
                class="text-sm text-slate-400 transition-colors hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                :aria-label="`${item.label}: ${item.value}`"
              >
                {{ item.value }}
              </a>
              <p
                v-else
                class="text-sm text-slate-400"
                :aria-label="`${item.label}: ${item.value}`"
              >
                {{ item.value }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";

const contactDetails = [
  {
    iconComponent: MapPinIcon,
    label: "Address",
    value: "Nakuru, Kenya",
    href: "https://maps.google.com/?q=Nakuru,Kenya",
    type: "address",
  },
  {
    iconComponent: EnvelopeIcon,
    label: "Email",
    value: "support@orbit88.com",
    href: "mailto:support@orbit88.com",
    type: "email",
  },
  {
    iconComponent: PhoneIcon,
    label: "Phone",
    value: "+254 797 171 217",
    href: "tel:+254797171217",
    type: "phone",
  },
];
</script>
