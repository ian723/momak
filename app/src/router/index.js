import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  AboutusView,
  SerView,
  PartnerView,
  ContactView,
} from "../views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/aboutus", name: "about", component: AboutusView },
  { path: "/service", name: "service", component: SerView },
  { path: "/partner", name: "partner", component: PartnerView },
  { path: "/contact", name: "contact", component: ContactView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
