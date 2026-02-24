# Hyades

_AI-Powered Image Editing and Asset Optimization Tool_

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://hyades.jwd-apps.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)

---

## About

**Hyades** is a modern Software-as-a-Service (SaaS) application that leverages advanced AI technology to simplify and accelerate image editing and transformation workflows.

Whether you're a creative professional, a marketing team, or a brand looking to optimize visual assets, Hyades provides powerful tools to transform your images in minutes—eliminating the need for costly reshoots and time-consuming manual edits.

> _Named after the star cluster in the constellation Taurus, Hyades brings clarity and brilliance to your visual content._

### Key Features

- **Image Restore** — Refine images by removing noise, artifacts, and imperfections using AI
- **Generative Fill** — Enhance image dimensions using AI-powered outpainting
- **Object Remove** — Intelligently remove unwanted objects from images
- **Object Recolor** — Change colors of specific objects within images
- **Background Remove** — Automatically remove image backgrounds with precision
- **Credit System** — Flexible credit-based pricing with Free, Pro, and Premium plans
- **User Profiles** — Personal dashboard to manage transformations and credits
- **Secure Authentication** — Enterprise-grade auth with Clerk
- **Stripe Payments** — Secure payment processing for credit purchases

---

## Tech Stack

### Frontend

| Technology                                      | Purpose                         |
| ----------------------------------------------- | ------------------------------- |
| [Next.js 16](https://nextjs.org/)               | React framework with App Router |
| [React 19](https://react.dev/)                  | UI library                      |
| [TypeScript](https://www.typescriptlang.org/)   | Type-safe JavaScript            |
| [Tailwind CSS](https://tailwindcss.com/)        | Utility-first CSS framework     |
| [Shadcn/ui](https://ui.shadcn.com/)             | Accessible component library    |
| [React Hook Form](https://react-hook-form.com/) | Form handling                   |
| [Zod](https://zod.dev/)                         | Schema validation               |

### Backend & Database

| Technology                                                                                         | Purpose                  |
| -------------------------------------------------------------------------------------------------- | ------------------------ |
| [MongoDB](https://www.mongodb.com/)                                                                | NoSQL database           |
| [Mongoose](https://mongoosejs.com/)                                                                | MongoDB ODM              |
| [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) | Serverless API endpoints |

### Services & Integrations

| Technology                            | Purpose                          |
| ------------------------------------- | -------------------------------- |
| [Cloudinary](https://cloudinary.com/) | AI-powered image transformations |
| [Clerk](https://clerk.com/)           | Authentication & user management |
| [Stripe](https://stripe.com/)         | Payment processing               |
| [Svix](https://www.svix.com/)         | Webhook handling                 |

---

## Project Structure

```
hyades/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with ClerkProvider
│   ├── (auth)/                   # Authentication routes (grouped)
│   │   ├── layout.tsx            # Auth layout
│   │   ├── sign-in/              # Sign in page
│   │   └── sign-up/              # Sign up page
│   ├── (root)/                   # Main app routes (grouped)
│   │   ├── layout.tsx            # App layout with navigation
│   │   ├── page.tsx              # Home page with hero & gallery
│   │   ├── credits/              # Credit plans & checkout
│   │   ├── profile/              # User profile & history
│   │   └── transformations/      # Image transformation pages
│   │       ├── [id]/             # View/update transformation
│   │       └── add/[type]/       # Create new transformation
│   └── api/                      # API Routes
│       └── webhooks/             # Webhook handlers
│           ├── clerk/            # Clerk webhook (user sync)
│           └── stripe/           # Stripe webhook (payments)
│
├── components/
│   ├── shared/                   # Reusable components
│   │   ├── Checkout.tsx          # Stripe checkout component
│   │   ├── Collection.tsx        # Image gallery grid
│   │   ├── CustomField.tsx       # Form field wrapper
│   │   ├── DeleteConfirmation.tsx# Delete dialog
│   │   ├── Header.tsx            # Page header
│   │   ├── InsufficientCreditsModal.tsx
│   │   ├── MediaUploader.tsx     # Cloudinary uploader
│   │   ├── MobileNav.tsx         # Mobile navigation
│   │   ├── Search.tsx            # Search component
│   │   ├── Topbar.tsx            # Top navigation bar
│   │   ├── TransformationForm.tsx# Main transformation form
│   │   └── TransformedImage.tsx  # Transformed image display
│   └── ui/                       # Shadcn UI components
│       ├── alert-dialog.tsx
│       ├── button.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── logo.tsx
│       ├── pagination.tsx
│       ├── select.tsx
│       ├── sheet.tsx
│       ├── toast.tsx
│       └── toaster.tsx
│
├── constants/
│   └── index.ts                  # App constants (navLinks, plans, transformationTypes)
│
├── hooks/
│   └── use-toast.ts              # Toast notification hook
│
├── lib/
│   ├── utils.ts                  # Utility functions
│   ├── actions/                  # Server actions
│   │   ├── image.actions.ts      # Image CRUD operations
│   │   ├── transaction.action.ts # Payment transactions
│   │   └── user.actions.ts       # User management
│   └── database/
│       ├── mongoose.ts           # Database connection
│       └── models/               # Mongoose schemas
│           ├── image.model.ts    # Image model
│           ├── transaction.model.ts
│           └── user.model.ts     # User model
│
├── public/
│   └── assets/
│       ├── icons/                # SVG icons
│       └── images/               # Static images & logos
│
├── types/
│   └── index.d.ts                # TypeScript type definitions
│
├── components.json               # Shadcn configuration
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies & scripts
```

---

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# ===================
# App Configuration
# ===================
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# ===================
# MongoDB
# ===================
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/hyades

# ===================
# Clerk Authentication
# ===================
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# ===================
# Cloudinary
# ===================
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ===================
# Stripe Payments
# ===================
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> ⚠️ **Note:** Never commit your `.env.local` file to version control. Make sure it's listed in your `.gitignore`.

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm
- MongoDB Atlas account
- Clerk account
- Cloudinary account
- Stripe account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/hyades.git
   cd hyades
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your credentials (see Environment Variables)

4. **Set up webhooks**
   - Configure Clerk webhook endpoint: `https://yourdomain.com/api/webhooks/clerk`
   - Configure Stripe webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser

---

## Available Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## Credit Plans

| Plan        | Price | Credits | Features                                          |
| ----------- | ----- | ------- | ------------------------------------------------- |
| **Free**    | $0    | 10      | Basic access to services                          |
| **Pro**     | $39   | 200     | Full access + Priority support                    |
| **Premium** | $199  | 3,000   | Full access + Priority support + Priority updates |

---

## Security

- Authentication handled by Clerk with enterprise-grade security
- All payments processed securely through Stripe
- Webhook signatures verified using Svix
- Environment variables for sensitive data

---

## License

This project is private and proprietary.

---

## Author

Made with ❤️ by [JordacheWD](https://jordachewd.com/)
