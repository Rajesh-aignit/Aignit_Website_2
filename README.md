# Aignite Website

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 Next.js 14 with App Router
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 📝 Contact form with validation
- 🔍 SEO optimized
- 🎯 Modern UI components
- 📊 Ready for analytics integration

## Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aignite-website.git
   cd aignite-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # App router pages
│   ├── api/            # API routes
│   ├── about/          # About page
│   ├── services/       # Services page
│   ├── contact/        # Contact page
│   └── page.tsx        # Home page
├── components/         # React components
├── styles/            # Global styles
└── types/             # TypeScript types
```

## Deployment

The site can be deployed to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

### Other Platforms

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm run start
   # or
   yarn start
   ```

## Environment Variables

See `.env.example` for all required environment variables.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@aignite.com or open an issue in the repository. 