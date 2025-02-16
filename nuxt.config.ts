import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";
import config from "./develop.json";
try {
  JSON.stringify(config);
} catch (e) {
  console.error("Circular reference detected in config:", e);
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  app: {
    head: {
      title: "Le Nguyen", // App window nav title
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "A awesome developer portfolio design.",
        },
        { hid: "og:title", property: "og:title", content: "Le Nguyen" },
        {
          hid: "og:description",
          property: "og:description",
          content: "A awesome developer portfolio design.",
        },
        { hid: "og:image", property: "og:image", content: "demo-share.jpg" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://developer-portfolio-v1.netlify.app/",
        },
        { name: "theme-color", content: "#010C15" },
        // ...
      ],
      link: [
        { rel: "manifest", href: "pwa/manifest.json" },
        { rel: "apple-touch-icon", href: "pwa/icons/apple-touch-icon.png" },
      ],
    },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  build: { transpile: ["vuetify"] },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
    injectPosition: 0,
    viewer: false,
  },
  runtimeConfig: {
    public: {
      dev: {
        name: "Le Nguyen",
        logo_name: "Le Nguyen",
        role: "Full-stack developer",

        contacts: {
          direct: {
            title: "contacts",
            sources: {
              email: "user@gmail.com",
              phone: "+3598246359",
            },
          },
          social: {
            github: {
              title: "Github profile",
              url: "https://github.com/",
              user: "username",
            },
            facebook: {
              title: "Facebook profile",
              url: "https://facebook.com/",
              user: "username",
            },
            twitter: {
              title: "Twitter account",
              url: "https://twitter.com/",
              user: "username",
            },
          },
          find_me_also_in: {
            title: "find-me-also-in",
            sources: {
              youtube: {
                title: "YouTube channel",
                url: "https://www.youtube.com/",
                user: "username",
              },
              gurushots: {
                title: "GuruShots profile",
                url: "https://gurushots.com/",
                user: "username",
              },
              instagram: {
                title: "Instagram account",
                url: "https://instagram.com/",
                user: "username",
              },
              twitch: {
                title: "Twitch profile",
                url: "https://twitch.com/",
                user: "username",
              },
            },
          },
        },
      },
    },
  },
});
