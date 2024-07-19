# Next.js Cloudflare Turnstile Integration

This project demonstrates how to integrate Cloudflare Turnstile, a user-friendly CAPTCHA alternative, into a Next.js application. It provides a secure login form protected against automated attacks without compromising user experience.

## Features

- Next.js 13+ App Router
- Cloudflare Turnstile integration
- Typesafe API route for server-side token verification
- Error handling and loading states
- Accessible UI components (using shadcn/ui)

## Prerequisites

- Node.js 14.x or later
- npm or yarn or pnpm
- A Cloudflare account with a connected domain

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/JedPattersonn/tutorial-examples.git
   cd cloudflare-turnstile
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Create a `.env.local` file in the project root and add your Cloudflare Turnstile credentials:

   ```
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key_here
   TURNSTILE_SECRET_KEY=your_secret_key_here
   ```

4. Run the development server:

   ```
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/page.tsx`: Main login page component
- `app/api/login/route.ts`: API route for handling login and Turnstile verification

## Testing

For testing purposes, you can use the following Cloudflare Turnstile test keys:

### Client-side keys:

- Always passes: `1x00000000000000000000AA`
- Always blocks: `2x00000000000000000000AB`
- Forces interactive challenge: `3x00000000000000000000FF`

### Server-side keys:

- Always passes: `1x0000000000000000000000000000000AA`
- Always fails: `2x0000000000000000000000000000000AA`
- Yields "token already spent" error: `3x0000000000000000000000000000000AA`

Replace the values in your `.env.local` file with these test keys for different scenarios.

## Deployment

Follow the standard Next.js deployment process. Ensure that you set the environment variables for your Turnstile keys in your production environment.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
