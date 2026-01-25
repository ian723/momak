import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  AboutusView,
  SerView,
  PartnerView,
  ContactView,
  GetaquoteView,
} from "../views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/aboutus", name: "about", component: AboutusView },
  { path: "/service", name: "service", component: SerView },
  { path: "/partner", name: "partner", component: PartnerView },
  { path: "/contact", name: "contact", component: ContactView },
  { path: "/getaquote", name: "getaquote", component: GetaquoteView },
];

/** Initialize here */
const router = createRouter({
  history: createWebHistory(),
  routes,
  // ADD THIS SECTION BELOW:
  scrollBehavior(to, from, savedPosition) {
    // If the user clicked the back/forward button, keep their scroll position
    if (savedPosition) {
      return savedPosition;
    } else {
      // Otherwise, always scroll to the top of the page
      return { top: 0 };
    }
  },
});

export default router;