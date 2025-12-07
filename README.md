# Cool Care Patna - AC, Washing Machine & Refrigerator Repair Services
Welcome to the Cool Care Patna project! This repository contains the source code for the Cool Care Patna website, which offers repair services for air conditioners, washing machines, and refrigerators in Patna.

## 📄 Overview
This project is built using [Astro](https://astro.build/), a modern static site builder that allows you to create fast, optimized websites with ease. The website features various sections, including service offerings, pricing, testimonials, and a contact form.


## 🚀 Project Structure

```text
/
├──  wrangler.jsonc
├──  wrangler.toml
├── .gitattributes
├── .gitignore
├── .wrangler
│   ├── state
│   │   └── v3
│   │       ├── cache
│   │       │   └── miniflare-CacheObject
│   │       └── workflows
│   └── tmp
├── LICENSE
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── public
│   ├── .assetsignore
│   ├── favicon.ico
│   ├── images
│   │   ├── logos
│   │   │   ├── brand-logos
│   │   │   │   ├── bluestar.png
│   │   │   │   ├── bosch.png
│   │   │   │   ├── carrier.png
│   │   │   │   ├── daikin.png
│   │   │   │   ├── electrolux.png
│   │   │   │   ├── godrej.png
│   │   │   │   ├── haier.png
│   │   │   │   ├── hitachi.png
│   │   │   │   ├── lg.png
│   │   │   │   ├── panasonic.png
│   │   │   │   ├── samsung.png
│   │   │   │   ├── voltas.png
│   │   │   │   └── whirlpool.png
│   │   │   ├── cool-care-logo-1024x1024.png
│   │   │   ├── cool-care-logo-144x144.png
│   │   │   ├── cool-care-logo-192x192.png
│   │   │   ├── cool-care-logo-20x20.png
│   │   │   ├── cool-care-logo-29x29.png
│   │   │   ├── cool-care-logo-36x36.png
│   │   │   ├── cool-care-logo-40x40.png
│   │   │   ├── cool-care-logo-48x48.png
│   │   │   ├── cool-care-logo-512x512.png
│   │   │   ├── cool-care-logo-60x60.png
│   │   │   ├── cool-care-logo-72x72.png
│   │   │   ├── cool-care-logo-76x76.png
│   │   │   ├── cool-care-logo-84x84.png
│   │   │   ├── cool-care-logo-96x96.png
│   │   │   └── logo-ccp.png
│   │   ├── services
│   │   │   ├── Refrigerator-Repair.png
│   │   │   ├── air-conditioner-repairs-and-servicing.jpeg
│   │   │   ├── air-conditioner.png
│   │   │   ├── air-conditioning.png
│   │   │   ├── cassette-ac.png
│   │   │   ├── cassette-ac.svg
│   │   │   ├── cold.svg
│   │   │   ├── convection-microwave-repair.png
│   │   │   ├── convection-microwave.png
│   │   │   ├── gas-refill.svg
│   │   │   ├── geyser-repair.png
│   │   │   ├── geyser-repair.svg
│   │   │   ├── installation.svg
│   │   │   ├── microwave-oven-repair.svg
│   │   │   ├── modern-washing-machine.png
│   │   │   ├── refill-r22-air-conditioner.png
│   │   │   ├── refrigerator-repair.svg
│   │   │   ├── refrigerators.png
│   │   │   ├── repair-svgrepo-com.svg
│   │   │   ├── washing-machine-repair.svg
│   │   │   ├── washing-machine-service.png
│   │   │   └── white-air-conditioner-mounted.png
│   │   └── testimonials
│   └── styles
│       ├── index.css
│       └── overrides.css
├── src
│   ├── components
│   │   ├── data
│   │   │   ├── navigationData.ts
│   │   │   └── siteData.ts
│   │   ├── sections
│   │   │   ├── ContactForm.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Logos.astro
│   │   │   ├── Navbar.astro
│   │   │   ├── Pricing.astro
│   │   │   ├── Services.astro
│   │   │   └── Testimonials.astro
│   │   └── ui
│   │       ├── ButtonPhone.astro
│   │       └── ButtonWhatsapp.astro
│   ├── layouts
│   └── pages
│       └── index.astro
├── tsconfig.json
└── wrangler.jsonc
```
## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npx run build && npx run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npx astro build && npx wrangler dev` | Build and preview with Wrangler (Cloudflare Workers) |
| `npx wrangler publish`    | Publish to Cloudflare Workers                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
