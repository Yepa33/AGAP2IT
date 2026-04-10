This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

### 🚀 Deploying to GitHub Pages

1. **Push your code** to the `main` branch of your GitHub repository.
2. Go to your repository **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The site will automatically build and deploy via the workflow in `.github/workflows/deploy.yml`.

> [!NOTE]
> If your site is a project page (e.g., `username.github.io/repo-name/`) rather than a user page, you may need to uncomment the `basePath` lines in `next.config.ts`.

### 🌐 Deploying to Render

1. Create a new **Static Site** on [Render](https://dashboard.render.com).
2. Connect your GitHub repository.
3. Use the following settings:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `out`
4. Click **Create Static Site**.
