# Merch KE Frontend

Tech swag marketplace for Kenya - built with Next.js App Router, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 22+ 
- [pnpm](https://pnpm.io/) (v10.33+)
- Merch KE API running (default: http://localhost:8080)

### Installation

We use `pnpm` exclusively to manage dependencies for faster and stricter installs.

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

### Development (`.env.local`)
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production
Deployed securely via Google Cloud Run. Production environment variables are securely injected at build time by our GitHub Actions CI/CD pipeline using secrets.

## Project Structure

```
├── app/                    # Next.js 15 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
├── lib/                   # Utilities and API client
│   ├── api/              # API client and endpoints
│   └── utils.ts          # Helper functions
├── types/                # TypeScript types
└── public/               # Static assets
```

## API Integration

The frontend communicates with the Merch KE API via Axios:
- `lib/api/client.ts` - Axios client with interceptors
- `lib/api/endpoints.ts` - API endpoint functions

## Development

```bash
# Run dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## CI/CD Pipeline
Every Pull Request to `dev` or `main` automatically runs strict `pnpm lint` and `pnpm build` checks. Merging into `main` automatically triggers a zero-downtime deployment to Google Cloud Run.

---

### Contributors

<a href="https://github.com/Hacklabs-app/merch/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Hacklabs-app/merch" />
</a>

---
Built with ❤️ by [Hacklabs](https://hacklabs.app)
