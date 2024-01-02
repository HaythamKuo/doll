// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth/google": {
        target: "http://localhost:5500",
        //changeOrigin: true,
      },
      "/api": {
        target: "http://localhost:5500",
        //changeOrigin: true,
      },
    },
  },
});
