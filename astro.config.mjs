// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import icon from "astro-icon";

import simpleStackForm from "simple-stack-form";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [icon(), simpleStackForm(), preact()],
    adapter: vercel({
        imageService: true,
    }),
    output: "server",
});