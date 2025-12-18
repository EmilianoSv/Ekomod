// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import icon from "astro-icon";

import simpleStackForm from "simple-stack-form";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://ekomod.com.co",
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		icon({
			include: {
				"mdi-light": ["*"],
			},
		}),
		simpleStackForm(),
		react(),
		sitemap(),
	],
	adapter: vercel({
		imageService: true,
	}),
	output: "server",
});
