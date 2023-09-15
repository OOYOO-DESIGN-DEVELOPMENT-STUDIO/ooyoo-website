# Nuxt 3 Minimal Starter

08/10/23

## Summary

A simple website for OOYOO created using Nuxt 3, Nuxt Content, and GraphQL.

https://netninja.dev/p/portfolio-build-with-nuxt-nuxt-content-graphql

https://github.com/danvega/net-ninja-portfolio

https://nuxt.com/docs/getting-started/installation

https://nuxt.com/docs/guide/directory-structure/nuxt

## How to start a development server in your Project

```bash
pnpm dev -o
```

The command pnpm dev -o is used to start a development server in your project. The dev script is a default script that is defined in the package.json file of most JavaScript projects. It is used to start a development server that will watch your files for changes and automatically rebuild your project whenever a change is made. The -o flag tells pnpm to open the development server in a web browser.
pnpm dev -o

Here is a breakdown of the command:

- pnpm: This is the pnpm command-line tool.
- dev: This is the name of the default development script.
- -o: This flag tells pnpm to open the development server in a web browser.

## Modules

A module is a pre-baked solutions to what you're trying to accomplish. Modules are used to extend the functionality of your Nuxt application, while dependencies are required for your Nuxt application to run.

When you add a module to your Nuxt project, it will be installed in your node_modules directory and loaded during both development and production. This means that you can use the module's functionality in your Nuxt application no matter if you are running it locally or in production.

When you add a dependency to your Nuxt project, it will also be installed in your node_modules directory, but it will only be loaded during development. This is because dependencies are not required for your Nuxt application to run in production. However, if you remove a dependency from your Nuxt project, you will need to rebuild your production build in order for the changes to take effect.

In general, you should add modules to your Nuxt project if you need to extend its functionality. For example, if you want to add Tailwind CSS to your Nuxt application, you would add the nuxt-tailwind module to your nuxt.config.js file.

You should add dependencies to your Nuxt project if they are required for your Nuxt application to run. For example, if you want to use Vue Router in your Nuxt application, you would add the vue-router dependency to your package.json file.

## Installing Tailwind as a Module vs Dependency

You do not need to install PostCSS Autoprefixer as a dependency if you add Tailwind CSS as a module into a Nuxt project. Tailwind CSS already includes PostCSS Autoprefixer, so you do not need to install it separately.

PostCSS Autoprefixer is a tool that adds vendor prefixes to CSS rules. This is necessary because not all browsers support the latest CSS features. Tailwind CSS automatically adds vendor prefixes to its CSS rules, so you do not need to use PostCSS Autoprefixer separately.

If you are using Tailwind CSS as a CSS framework, then you do not need to install any additional PostCSS plugins. Tailwind CSS already includes all of the necessary PostCSS plugins.

However, if you are using Tailwind CSS as a utility library, then you may need to install additional PostCSS plugins. This depends on the specific CSS features that you are using. For example, if you are using the @apply directive, then you will need to install the PostCSS postcss-nested plugin.

## [ Tailwind CSS was added as a Module ]

- NOT: https://tailwindcss.nuxtjs.org/

Tailwind Module doesn't create a `tailwind.config.js` file. You need to manually create it. You will edit this manually to configure, especially if you're installing Tailwind Typography

```bash
npm i -D @nuxtjs/tailwindcss
```

- NOT: https://tailwindcss.com/docs/guides/nuxtjs

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

- BUT: https://nuxt.com/modules/tailwindcss (QUICK SET-UP)

# Install Tailwind [ Module ] <—

```bash
pnpm add --save-dev @nuxtjs/tailwindcss

# Also add @nuxtjs/tailwindcss to nuxt.config.{ts,js}

modules: ['@nuxtjs/tailwindcss'],
```

# Install Nuxt/Icon [ Module ] <—

https://nuxt.com/modules/icon

```bash
pnpm install (or add? because its a module?) --save-dev nuxt-icon

# Also add nuxt-icon to nuxt.config.{ts,js}

modules: ['nuxt-icon']
```

# Install @tailwindcss/typography [ Plugin, Dev Dependency ] <—

https://tailwindcss.com/docs/typography-plugin

The official Tailwind CSS Typography plugin provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don’t control, like HTML rendered from Markdown, or pulled from a CMS:

```bash
<article class="prose lg:prose-xl">
  {{ markdown }}
</article>
```

```bash
pnpm install -D @tailwindcss/typography (or add? because its a plugin)

# Also add @tailwindcss/typography plugin to tailwind.config.{ts,js}. If there is none, create one.

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

# Dependencies Added

```bash
pnpm install @headlessui/vue

pnpm install @heroicons/vue

```

### Adding Nuxt Content to an Existing Project

```bash
pnpm add -D @nuxt/content

# Also add nuxt-icon to nuxt.config.{ts,js}

modules: ['@nuxt/content'],
content: { // https://content.nuxtjs.org/api/configuration },
```

### Adding Tailwind Typograhy...already added above as a plugin but put here because of "dependency"...delete this one.

```bash
pnpm install -D @tailwindcss/typography
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# PRODUCTION

https://docs.netlify.com/integrations/frameworks/nuxt/#app

## Need to add packageManager for pnpm and nuxt to package.json

```
"nuxt": {
    "target": "static"
  },
  "packageManager": "pnpm@6.3.2"
```

## ADDED to NUXT.CONFIG.TS

$production: {
routeRules: {
'/\*\*': { isr: true },
},
},
$development: {
//
},

## Needed to add PNPM_FLAGS ENVIRONMENT VARIABLE on NETLIFY

PNPM_FLAGS = --shamefully-hoist
NPM_FLAGS = --prefix=/

## Added Prebuild to package.json

https://answers.netlify.com/t/using-pnpm-and-pnpm-workspaces/2759
"prebuild": "[[$CI = true]] && npx pnpm@3 install -r --store=node_modules/.pnpm-store || echo skiping pnpm install"
