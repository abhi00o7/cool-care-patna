// @ts-check
import { defineConfig } from "astro/config";

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tunnel({
      // // The URL to expose. Defaults to http://localhost:4324.
      url: "http://localhost:4324",
      // // The local server port to expose. Defaults to 4324. Only used if `url` is not set.
      // port: 4324,
      // // The local server protocol to use. Defaults to http. Only used if `url` is not set.
      // protocol: "http",
      // // Whether to verify the local server TLS certificate. Defaults to false.
      // verifyTLS: false,
      // // Whether to accept the Cloudflare terms of service. Defaults to false.
      // acceptCloudflareNotice: false,
    }),
  ],
});
