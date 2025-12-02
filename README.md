# WISO-TECH

A modern full-stack mentorship platform built with a monorepo architecture, enabling seamless connections between mentors and learners through a comprehensive role-based system.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

WISO-TECH is a full-stack mentorship platform designed to facilitate knowledge sharing between mentors and mentees. The application provides role-based authentication, user profile management, and a comprehensive dashboard system for different user types. Built using modern web technologies and following industry best practices, the platform ensures scalability, maintainability, and excellent developer experience.

## Architecture

### System Architecture Diagram

```mermaid
graph TB
    subgraph "Client Layer"
        FE[Front-End Next.js App]
        UI[Shared UI Components]
        SB[Storybook]
    end
    
    subgraph "API Layer"
        BE[Back-End Next.js API]
        GQL[GraphQL Gateway]
        UPLOAD[Upload API]
    end
    
    subgraph "Data Layer"
        PRISMA[Prisma ORM]
        DB[(PostgreSQL Database)]
    end
    
    subgraph "Shared Packages"
        ESLINT[ESLint Config]
        TS[TypeScript Config]
        GRAPH[GraphQL Schema]
    end
    
    FE --> GQL
    FE --> UPLOAD
    UI --> FE
    SB --> UI
    GQL --> BE
    UPLOAD --> BE
    BE --> PRISMA
    PRISMA --> DB
    
    FE -.-> ESLINT
    FE -.-> TS
    BE -.-> ESLINT
    BE -.-> TS
    GQL -.-> GRAPH
    
    style FE fill:#4f46e5
    style BE fill:#059669
    style DB fill:#dc2626
```

### Application Flow Diagram

```mermaid
flowchart TD
    START([User Access]) --> AUTH{Authenticated?}
    AUTH -->|No| LOGIN[Sign In Page]
    AUTH -->|Yes| ROLE{User Role?}
    
    LOGIN --> SIGNUP[Sign Up Option]
    SIGNUP --> FORM[Multi-Step Form]
    FORM --> ACCOUNT[Account Details]
    ACCOUNT --> PROFILE[Profile Information]
    PROFILE --> ROLE_SELECT[Select Role: Learner/Mentor]
    ROLE_SELECT --> REGISTER[Register User]
    
    REGISTER --> DB[(Database)]
    DB --> ROLE
    
    ROLE -->|Mentee| MENTEE_DASH[Mentee Dashboard]
    ROLE -->|Mentor| MENTOR_DASH[Mentor Dashboard]
    
    MENTEE_DASH --> FEATURES[Access Features]
    MENTOR_DASH --> FEATURES
    
    FEATURES --> PROFILE_MGMT[Profile Management]
    FEATURES --> EXPERTISE[Expertise Tags]
    FEATURES --> UPLOAD[File Upload]
    
    style AUTH fill:#fbbf24
    style ROLE fill:#fbbf24
    style MENTEE_DASH fill:#3b82f6
    style MENTOR_DASH fill:#8b5cf6
```

### Authentication Sequence Diagram

```mermaid
sequenceDiagram
    actor User
    participant FE as Front-End
    participant API as GraphQL API
    participant DB as Database
    participant Storage as File Storage
    
    User->>FE: Navigate to Sign Up
    FE->>User: Display Multi-Step Form
    
    User->>FE: Submit Account Details
    FE->>FE: Validate Form
    
    User->>FE: Submit Profile Info
    FE->>FE: Store in Context
    
    User->>FE: Select Role (Learner/Mentor)
    FE->>FE: Update Context State
    
    User->>FE: Complete Registration
    FE->>API: GraphQL Mutation (createUser)
    API->>DB: Insert User Data
    DB-->>API: User Created
    API-->>FE: Success Response
    FE->>User: Redirect to Dashboard
    
    alt File Upload Required
        User->>FE: Upload Profile Image
        FE->>Storage: POST /api/upload
        Storage-->>FE: File URL
        FE->>API: Update User Profile
    end
```

## Key Features

### Authentication & User Management
- Multi-step registration process with form validation
- Role-based access control for mentors and learners
- Secure authentication flow with context providers
- Profile information management with expertise tagging

### Dashboard System
- Dedicated mentee dashboard with personalized features
- Role-specific layouts and navigation
- Protected routes with authentication guards

### UI Component Library
- Atomic design pattern implementation (Atoms, Molecules, Organisms)
- Storybook integration for component documentation
- Reusable form components with Formik integration
- Responsive Material-UI themed components

### Developer Experience
- Monorepo architecture using Turborepo
- Automated code generation with Plop templates
- Comprehensive linting and formatting setup
- Git hooks with Husky for pre-commit validation
- Conventional commit enforcement with Commitlint

### API & Data Management
- GraphQL API with type-safe code generation
- Prisma ORM for database operations
- File upload handling with API routes
- Centralized GraphQL schema management

## Technology Stack

### Front-End
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Material-UI (MUI)
- **State Management**: React Context API
- **Form Handling**: Formik
- **UI Documentation**: Storybook
- **Fonts**: Lexend, Geist

### Back-End
- **Framework**: Next.js API Routes
- **API**: GraphQL (Schema-first approach)
- **ORM**: Prisma
- **Database**: PostgreSQL
- **File Storage**: Pinata (IPFS)

### Development Tools
- **Monorepo**: Turborepo, PNPM workspaces
- **Code Generation**: GraphQL Codegen, Plop
- **Linting**: ESLint (shared configs)
- **Formatting**: Prettier
- **Git Hooks**: Husky, lint-staged
- **Commit Standards**: Commitlint (Conventional Commits)

## Project Structure

```
wiso-tech/
├── apps/
│   ├── back-end/              # Next.js backend application
│   │   ├── app/
│   │   │   ├── api/graphql/   # GraphQL API endpoint
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── package.json
│   │   └── next.config.ts
│   │
│   └── front-end/             # Next.js frontend application
│       ├── .storybook/        # Storybook configuration
│       ├── src/
│       │   ├── app/           # Next.js app directory
│       │   │   ├── (auth)/    # Authentication routes group
│       │   │   │   ├── sign-in/
│       │   │   │   └── sign-up/
│       │   │   ├── (dashboard)/  # Dashboard routes group
│       │   │   │   └── dashboard/mentee/
│       │   │   └── api/upload/   # File upload API
│       │   ├── features/      # Feature-based modules
│       │   │   ├── auth/
│       │   │   │   └── sign-up/
│       │   │   │       ├── components/
│       │   │   │       ├── context/
│       │   │   │       ├── hooks/
│       │   │   │       ├── services/
│       │   │   │       ├── store/
│       │   │   │       ├── types/
│       │   │   │       └── utils/
│       │   │   └── dashboard/
│       │   ├── shared/        # Shared resources
│       │   │   ├── components/
│       │   │   │   ├── feedback/
│       │   │   │   ├── forms/
│       │   │   │   ├── layouts/
│       │   │   │   └── ui/
│       │   │   │       ├── atoms/      # Button, Input, Text, etc.
│       │   │   │       ├── molecules/  # InputWithLabel, ExpertiseInput, etc.
│       │   │   │       └── organisms/  # AccountDetail, ProfileInformation, etc.
│       │   │   ├── providers/
│       │   │   └── utils/
│       │   └── store/
│       ├── plop-templates/    # Component generation templates
│       └── plopfile.js
│
├── packages/
│   ├── eslint-config/         # Shared ESLint configurations
│   │   ├── base.js
│   │   ├── next.js
│   │   └── react-internal.js
│   │
│   ├── graphql/               # GraphQL schema and client
│   │   ├── back-graphql/      # Backend schema definitions
│   │   │   ├── graphql/
│   │   │   │   ├── schema.ts
│   │   │   │   └── types/
│   │   │   └── codegen.ts
│   │   ├── gql/               # GraphQL queries/mutations
│   │   │   ├── auth.graphql
│   │   │   └── generated.ts
│   │   ├── lib/
│   │   │   └── graphql-client.ts
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── codegen.ts
│   │
│   ├── prisma-config/         # Prisma ORM configuration
│   │   ├── prisma/
│   │   │   ├── migrations/
│   │   │   └── schema.prisma
│   │   ├── index.ts
│   │   └── prisma.ts
│   │
│   ├── typescript-config/     # Shared TypeScript configurations
│   │   ├── base.json
│   │   ├── nextjs.json
│   │   └── react-library.json
│   │
│   └── ui/                    # Shared UI component library
│       └── src/
│           ├── button.tsx
│           ├── card.tsx
│           └── code.tsx
│
├── .husky/                    # Git hooks
│   ├── commit-msg
│   └── pre-commit
│
├── commitlint.config.cjs      # Commit message linting
├── prettier.config.cjs        # Code formatting rules
├── turbo.json                 # Turborepo pipeline configuration
├── pnpm-workspace.yaml        # PNPM workspace configuration
└── package.json               # Root package configuration
```

### Key Directories Explained

**apps/**: Contains deployable applications (front-end and back-end)

**packages/**: Shared packages and configurations used across apps
- **eslint-config**: Standardized linting rules for consistency
- **graphql**: Centralized GraphQL schema, types, and client configuration
- **prisma-config**: Database schema and ORM setup
- **typescript-config**: Shared TypeScript compiler options
- **ui**: Reusable component library

**features/**: Feature-based organization following domain-driven design
- Each feature contains its own components, hooks, services, store, types, and utilities
- Promotes modularity and maintainability

**shared/**: Cross-cutting concerns and reusable resources
- Components organized by atomic design principles
- Shared utilities, providers, and configurations

## Prerequisites

Before installing, ensure you have the following installed:

- **Node.js**: v18.x or higher
- **PNPM**: v8.x or higher (recommended package manager)
- **PostgreSQL**: v14.x or higher
- **Git**: Latest version

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/alibazregarijs/wiso-tech.git
cd wiso-tech
```

### 2. Install Dependencies

```bash
pnpm install
```

This command installs all dependencies for the monorepo, including all apps and packages.

### 3. Set Up Environment Variables

Create `.env` files in the respective application directories:

**apps/back-end/.env**
```env
DATABASE_URL="postgresql://user:password@localhost:5432/wiso_tech"
GRAPHQL_ENDPOINT="http://localhost:3001/api/graphql"
```

**apps/front-end/.env.local**
```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT="http://localhost:3001/api/graphql"
NEXT_PUBLIC_API_URL="http://localhost:3000"
PINATA_API_KEY="your_pinata_api_key"
PINATA_SECRET_KEY="your_pinata_secret_key"
```

### 4. Set Up the Database

```bash
# Navigate to the prisma-config package
cd packages/prisma-config

# Run migrations
pnpm prisma migrate dev

# Generate Prisma client
pnpm prisma generate

# (Optional) Seed the database
pnpm prisma db seed
```

### 5. Generate GraphQL Types

```bash
# From the root directory
pnpm run codegen
```

This generates TypeScript types from your GraphQL schema.

## Configuration

### Database Configuration

The database schema is defined in `packages/prisma-config/prisma/schema.prisma`. Key models include:

- **User**: Core user information with role-based fields
- **Profile**: Extended user profile data
- **Expertise**: Tags and skills for mentors/mentees

### GraphQL Schema

GraphQL schema definitions are located in `packages/graphql/back-graphql/graphql/`. The schema uses a code-first approach with type-safe resolvers.

### Turborepo Pipeline

The `turbo.json` file defines the build pipeline:

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "dev": {
      "cache": false
    },
    "lint": {},
    "type-check": {}
  }
}
```

## Usage

### Development Mode

Run all applications in development mode:

```bash
pnpm dev
```

This starts:
- Front-end application at `http://localhost:3000`
- Back-end application at `http://localhost:3001`

To run specific applications:

```bash
# Front-end only
pnpm dev --filter=front-end

# Back-end only
pnpm dev --filter=back-end
```

### Storybook (Component Documentation)

Launch Storybook to view and develop UI components in isolation:

```bash
pnpm storybook
```

Storybook will be available at `http://localhost:6006`

### Building for Production

Build all applications:

```bash
pnpm build
```

Build specific application:

```bash
pnpm build --filter=front-end
```

### Starting Production Server

```bash
pnpm start
```

## Development

### Code Generation

#### Generate New Component

Use Plop to scaffold new components following the project structure:

```bash
cd apps/front-end
pnpm plop
```

Follow the prompts to generate:
- Component file with TypeScript
- Storybook story file
- Proper file structure in the atomic design hierarchy

#### Generate GraphQL Types

After modifying GraphQL schema or queries:

```bash
pnpm codegen
```

This regenerates TypeScript types from GraphQL schema and operations.

### Folder Conventions

**Feature Modules**: Each feature follows this structure:
```
feature-name/
├── components/       # Feature-specific components
├── context/          # React context providers
├── hooks/            # Custom React hooks
├── services/         # API calls and business logic
├── store/            # State management
├── types/            # TypeScript types
├── utils/            # Helper functions
└── index.ts          # Public API exports
```

**Component Organization**: Follows atomic design:
- **Atoms**: Basic building blocks (Button, Input, Text)
- **Molecules**: Simple component combinations (InputWithLabel)
- **Organisms**: Complex components (AccountDetail, ProfileInformation)

### Naming Conventions

- **Components**: PascalCase (e.g., `SignUpForm.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useSignUpForm.ts`)
- **Utils**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase with descriptive names (e.g., `UserProfile`)
- **GraphQL Operations**: camelCase (e.g., `createUser`, `getUserProfile`)

### Import Aliases

TypeScript path aliases are configured for cleaner imports:

```typescript
import { Button } from '@/shared/components/ui/atoms/Button';
import { useSignUpForm } from '@/features/auth/sign-up/hooks';
```

## Testing

### Unit Testing

```bash
# Run tests for all packages
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Integration Testing

```bash
pnpm test:integration
```

### End-to-End Testing

```bash
pnpm test:e2e
```

## Code Quality

### Linting

Lint all packages:

```bash
pnpm lint
```

Fix linting errors automatically:

```bash
pnpm lint:fix
```

### Formatting

Format code with Prettier:

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```

### Type Checking

Run TypeScript compiler checks:

```bash
pnpm type-check
```

### Git Hooks

Pre-commit hooks automatically run:
- ESLint on staged files
- Prettier formatting
- Type checking

Commit message hook enforces conventional commit format:
```
type(scope): subject

feat: add user authentication
fix: resolve dashboard routing issue
docs: update README installation steps
```

Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`

## Deployment

### Environment Setup

Ensure environment variables are configured for production:

1. Set `NODE_ENV=production`
2. Update database connection string
3. Configure GraphQL endpoint URLs
4. Set secure API keys for external services

### Build Process

```bash
# Build all applications
pnpm build

# Build specific app
pnpm build --filter=front-end
```

### Deployment Platforms

**Vercel (Recommended for Next.js)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Docker**

Create `Dockerfile` in app directories:

```dockerfile
FROM node:18-alpine AS base
RUN npm install -g pnpm

FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build

FROM base AS deploy
WORKDIR /app
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
RUN pnpm install --prod --frozen-lockfile

EXPOSE 3000
CMD ["pnpm", "start"]
```

Build and run:

```bash
docker build -t wiso-tech .
docker run -p 3000:3000 wiso-tech
```

### Database Migrations

Run migrations in production:

```bash
pnpm prisma migrate deploy
```

## Contributing

We welcome contributions to WISO-TECH. Please follow these guidelines:

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes following the code style guidelines
4. Write or update tests as needed
5. Ensure all tests pass: `pnpm test`
6. Commit using conventional commit format: `git commit -m "feat: add new feature"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a Pull Request

### Code Style

- Follow existing code patterns and conventions
- Use TypeScript for all new code
- Write meaningful component and function names
- Add JSDoc comments for complex logic
- Keep components small and focused on single responsibility

### Pull Request Process

1. Update documentation if introducing new features
2. Add tests for new functionality
3. Ensure CI/CD pipeline passes
4. Request review from maintainers
5. Address review comments promptly

### Commit Message Format

Follow the Conventional Commits specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Example:
```
feat(auth): implement multi-step registration flow

- Add account details form
- Add profile information form
- Implement role selection

Closes #123
```

