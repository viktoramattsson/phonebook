import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
