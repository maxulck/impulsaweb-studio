import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        tiendaDemo: resolve(__dirname, "tienda-demo.html"),
        cafeBruma: resolve(__dirname, "cafe-bruma.html"),
        salonRaiz: resolve(__dirname, "salon-raiz.html")
      }
    }
  }
});
