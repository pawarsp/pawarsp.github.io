// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // 1. Replace with your actual GitHub domain
  site: 'https://pawarp.github.io', 
  
  integrations: [react()]
});