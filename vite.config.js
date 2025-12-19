import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig({
  base: "/standalone-twitch-widgets",
  plugins: [react(), ghPages()],
  // server: {
  //   watch: {
  //     usePolling: true,
  //   },
  // },
});
