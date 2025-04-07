// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import icon from "astro-icon";

import simpleStackForm from "simple-stack-form";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [icon(), simpleStackForm(), react()],
	adapter: vercel({
		imageService: true,
	}),
	output: "server",
});
