# SvelteKit Personalize Demo

This project is a SvelteKit application demonstrating integration with Contentstack, including personalization features via the Contentstack Personalize Edge SDK and live preview utilities.

## Features

- **SvelteKit**: Built with the latest SvelteKit framework.
- **Contentstack Integration**: Fetches and renders content from Contentstack.
- **Personalization**: Uses Contentstack Personalize Edge SDK to set and retrieve user attributes and variants.
- **Live Preview**: Integrates Contentstack Live Preview for real-time content editing.
- **Tailwind CSS**: Styled using Tailwind CSS.
- **Component-based**: Modular Svelte components for easy customization.

## Project Structure

```
src/
  app.css                # Global styles (Tailwind)
  app.d.ts               # TypeScript definitions for SvelteKit
  app.html               # HTML template
  hooks.server.ts        # SvelteKit server hooks
  lib/
    contentstack.ts      # Contentstack SDK utilities
    deliverySdk.ts       # Contentstack Delivery SDK helpers
    state.svelte.ts      # State management utilities
    types.d.ts           # Shared TypeScript types
    components/          # Reusable Svelte components
      AttributesBar.svelte
      Columns.svelte
      CTA.svelte
      Header.svelte
      SimpleCTA.svelte
      Testimonial.svelte
  routes/                # SvelteKit routes
    +layout.server.ts
    +layout.svelte
    +page.server.ts
    +page.svelte
    [slug]/              # Dynamic routes
      +page.server.ts
      +page.svelte
    builder/
      [slug]/
        +page.server.ts
        +page.svelte
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

### Installation

Install dependencies:

```sh
pnpm install
# or
npm install
```

### Development

Start the development server:

```sh
pnpm dev
# or
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

To create a production build:

```sh
pnpm build
# or
npm run build
```

Preview the production build:

```sh
pnpm preview
# or
npm run preview
```

## Environment Variables

Create a `.env` file in the root with the following variables:

```
PUBLIC_CS_API_KEY=your_contentstack_api_key
PUBLIC_CS_PERSONALIZE_PROJECT_UID=your_personalize_project_uid
```

## Customization

- Update Contentstack API keys and project UIDs in your `.env` file.
- Modify or add Svelte components in `src/lib/components/` as needed.
- Add new routes under `src/routes/`.

## License

MIT

---

Generated with [SvelteKit](https://kit.svelte.dev/)