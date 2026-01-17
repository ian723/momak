<template>
  <section class="bg-slate-50 py-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        Our Trusted Partners
      </h2>
      <div class="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
      <p class="text-slate-500 max-w-2xl mx-auto">
        We take pride in our long-standing relationships with world-class
        organizations.
      </p>
    </div>

    <!-- The Moving Container -->
    <div class="relative flex overflow-hidden group">
      <!-- 
        SCROLLING TRACK 
        We render the 'partners' list TWICE to create a seamless infinite loop
      -->
      <div
        class="flex animate-marquee whitespace-nowrap group-hover:pause-animation"
      >
        <!-- Loop through the 12 partners -->
        <div
          v-for="(partner, index) in [...partners, ...partners]"
          :key="index"
          class="flex items-center justify-center mx-4 min-w-55 h-32 bg-white rounded-3xl shadow-sm border border-slate-100 px-8 hover:border-green-200 hover:shadow-md transition-all cursor-pointer"
        >
          <!-- THE LOGO IMAGE GOES HERE -->
          <img
            :src="partner.logo"
            :alt="partner.name"
            class="max-h-12 max-w-40 object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * PLACE YOUR LOGO LINKS HERE
 * You can use web links (https://...) or local paths (@/assets/...)
 */
const partners = [
  {
    name: "Partner 1",
    logo: "https://res.cloudinary.com/drbhyey5b/image/upload/v1768662683/unity_wckfz6.png",
  },
  {
    name: "Partner 2",
    logo: "https://res.cloudinary.com/drbhyey5b/image/upload/v1768662657/sendy_zveiyf.svg",
  },
  {
    name: "Partner 3",
    logo: "https://res.cloudinary.com/drbhyey5b/image/upload/v1768662653/safaricom_ufelqu.png",
  },
  {
    name: "Partner 4",
    logo: "https://res.cloudinary.com/drbhyey5b/image/upload/v1768662652/naicitycounty_fjjs4v.png",
  },
  {
    name: "Partner 5",
    logo: "https://res.cloudinary.com/drbhyey5b/image/upload/v1768662632/jtl_pxqaz2.png",
  },
  {
    name: "Partner 6",
    logo: "https://res.cloudinary.com/drbhyey5b/image/upload/v1768662606/equity_pnoman.png",
  },
  {
    name: "Partner 7",
    logo: "https://res.cloudinary.com/drbhyey5b/image/upload/v1768662606/huwawei_aw4xfj.jpg",
  },
  {
    name: "Partner 8",
    logo: "https://res.cloudinary.com/drbhyey5b/image/upload/v1768662606/adrian_swqzb3.png",
  },
];
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}

.group-hover\:pause-animation:hover {
  animation-play-state: paused;
}

/* Adds a nice fade out on the left and right edges */
.relative::before,
.relative::after {
  content: "";
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  z-index: 10;
  pointer-events: none;
}
.relative::before {
  left: 0;
  background: linear-gradient(to right, #f8fafc, transparent);
}
.relative::after {
  right: 0;
  background: linear-gradient(to left, #f8fafc, transparent);
}
</style>
