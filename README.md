# Vaishnavi Desai — Stories & Strategies

A responsive Next.js, TypeScript, and Tailwind CSS portfolio. The visual system uses a black, off-white, and muted-grey palette, oversized editorial typography, asymmetric layouts, and small interaction details.

## Preview locally

Install Node.js 20.9 or later, then from this folder run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production build, run `npm run build` and then `npm start`.

## Edit the content

Portfolio copy and links live in [`src/content.ts`](src/content.ts). The main page layout and reusable components live in [`src/app/page.tsx`](src/app/page.tsx). Global styles, responsive breakpoints, colors, and typography are in [`src/app/globals.css`](src/app/globals.css).

Content is kept in data objects/arrays so project episodes, work samples, concepts, contact details, and metrics can be updated without changing their layout. Preserve the supplied wording and metrics when making edits.

## Replace images

Approved image files live in [`public/images`](public/images/README.md). The hero portrait is set in `src/app/page.tsx`; editorial samples, website screenshots, and concept art are mapped in `src/content.ts`. Replace those image paths to swap an asset. The Elvis and Anni podcast sections are text-only, as requested.

## Notes

- Project preview cards link to their detailed project sections; published work and sample links open in a new tab.
- Contact email, phone, and LinkedIn links are active.
- Reduced-motion preferences are respected.
