This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Supabase and Clerk Setup

This project uses Clerk and Supabase. In order to use this project you need to set up projects for both Clerk, and Supabase.

Check out these Docs for integrating Clerk with Nextjs:

[Clerk & Nextjs Setup](https://clerk.dev/docs/nextjs/overview)

Here is a walkthrough for setting up your Nextjs application, with supabase.

_Note: Ignore the Authentication portion, because we are using Clerk for authentication._

[Supabase Nextjs walkthrough](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)

### Environment Variables

In order to use Clerk and Supabase you need to add these to the .env.local file.

```bash

NEXT_PUBLIC_SUPABASE_URL=Add Supabase URL

NEXT_PUBLIC_SUPABASE_ANON_KEY=Supabase anon key

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=CLERK PUBLISHABLE KEY

CLERK_SECRET_KEY=Secret Key for CLERK Authentication

```

You can look to the .env.local.example file, for the needed variables. I suggest duplicating this file and renaming it to .env.local.

## Testing

Run all unit tests:

```bash
npm run test

or

npm run test:watch

```

## Linting

Run the linter:

```bash
npm run lint
```

## Formatting

Check code format:

```bash
npm run prettier:check
```

Format codebase:

```bash
npm run prettier:write
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Supabase Documentation](https://supabase.com/docs) - learn more about Supabase
- [Clerk Documentation](https://clerk.dev/docs) - learn more about Clerk

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
