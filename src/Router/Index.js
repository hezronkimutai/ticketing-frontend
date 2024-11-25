import RequestPasswordReset from "@/components/requestPasswordReset/requestPasswordReset.vue";
import ResetPassword from "@/components/resetPassword/resetPassword.vue";
import Signin from "@/components/signin/Signin.vue";
import VerifyEmail from "@/components/verifyEmail/verifyEmail.vue";
import HomePage from "@/pages/HomePage.vue";
import Signup from "@/pages/Signup.vue";
import { createRouter, createWebHistory } from "vue-router";
import Categories from "../components/Categories.vue";
import FeaturedEvents from "../components/FeaturedEvents.vue";
import EventStatus from "../components/EventStatus.vue";
import About from "@/pages/About.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import Contact from "@/pages/Contact.vue";
import CreateEvent from "@/pages/CreateEvent.vue";

const routes = [
  {
    path: "/create-event",
    name: "CreateEventPage",
    component: CreateEvent,
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/verify-email/:token",
    name: "VerifyEmail",
    component: VerifyEmail,
  },
  {
    path: "/request-password-reset",
    name: "RequestPasswordReset",
    component: RequestPasswordReset,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/book",
    name: "CategoriesComponent",
    component: Categories,
  },
  {
    path: "/events",
    name: "FeaturedEvents",
    component: FeaturedEvents, 
  },
  {
    path: "/status",
    name: "EventStatusComponent",
    component: EventStatus,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/Privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
