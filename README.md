```
wiso-tech
├─ .husky
│  ├─ commit-msg
│  ├─ pre-commit
│  └─ _
│     └─ husky.sh
├─ .lintstagedrc.cjs
├─ .npmrc
├─ .prettierignore
├─ apps
│  ├─ back-end
│  │  ├─ app
│  │  │  ├─ api
│  │  │  │  └─ graphql
│  │  │  │     └─ route.ts
│  │  │  ├─ favicon.ico
│  │  │  ├─ globals.css
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  └─ tsconfig.json
│  └─ front-end
│     ├─ .storybook
│     │  ├─ main.ts
│     │  └─ preview.ts
│     ├─ eslint.config.js
│     ├─ next-env.d.ts
│     ├─ next.config.js
│     ├─ package.json
│     ├─ plop-templates
│     │  ├─ Component.tsx.hbs
│     │  └─ Story.tsx.hbs
│     ├─ plopfile.js
│     ├─ postcss.config.mjs
│     ├─ README.md
│     ├─ src
│     │  ├─ app
│     │  │  ├─ (auth)
│     │  │  │  ├─ layout.tsx
│     │  │  │  ├─ sign-in
│     │  │  │  │  └─ page.tsx
│     │  │  │  └─ sign-up
│     │  │  │     └─ page.tsx
│     │  │  ├─ (dashboard)
│     │  │  │  └─ dashboard
│     │  │  │     └─ mentee
│     │  │  │        ├─ layout.tsx
│     │  │  │        └─ page.tsx
│     │  │  ├─ api
│     │  │  │  └─ upload
│     │  │  │     └─ route.ts
│     │  │  └─ layout.tsx
│     │  ├─ config
│     │  ├─ features
│     │  │  ├─ auth
│     │  │  │  └─ sign-up
│     │  │  │     ├─ components
│     │  │  │     │  └─ SignUpForm.tsx
│     │  │  │     ├─ context
│     │  │  │     │  └─ LearnerMentorContextProvider.tsx
│     │  │  │     ├─ hooks
│     │  │  │     │  └─ useSignUpForm.ts
│     │  │  │     ├─ index.ts
│     │  │  │     ├─ services
│     │  │  │     ├─ store
│     │  │  │     ├─ types
│     │  │  │     │  └─ index.ts
│     │  │  │     └─ utils
│     │  │  └─ dashboard
│     │  │     └─ mentee
│     │  │        ├─ components
│     │  │        ├─ hooks
│     │  │        ├─ index.ts
│     │  │        ├─ services
│     │  │        ├─ store
│     │  │        ├─ types
│     │  │        └─ utils
│     │  ├─ public
│     │  │  ├─ file-text.svg
│     │  │  ├─ fonts
│     │  │  │  ├─ GeistMonoVF.woff
│     │  │  │  ├─ GeistVF.woff
│     │  │  │  ├─ lexend-latin-400-normal.woff
│     │  │  │  ├─ lexend-latin-500-normal.woff
│     │  │  │  ├─ lexend-latin-700-normal.woff
│     │  │  │  └─ lexend-latin-900-normal.woff
│     │  │  ├─ globe.svg
│     │  │  ├─ next.svg
│     │  │  ├─ turborepo-dark.svg
│     │  │  ├─ turborepo-light.svg
│     │  │  ├─ vercel.svg
│     │  │  └─ window.svg
│     │  ├─ shared
│     │  │  ├─ components
│     │  │  │  ├─ feedback
│     │  │  │  ├─ forms
│     │  │  │  ├─ layouts
│     │  │  │  └─ ui
│     │  │  │     ├─ atoms
│     │  │  │     │  ├─ Button
│     │  │  │     │  │  ├─ Button.stories.tsx
│     │  │  │     │  │  └─ Button.tsx
│     │  │  │     │  ├─ Devider
│     │  │  │     │  │  ├─ Devider.stories.tsx
│     │  │  │     │  │  └─ Devider.tsx
│     │  │  │     │  ├─ FormikError
│     │  │  │     │  │  ├─ FormikError.stories.tsx
│     │  │  │     │  │  └─ FormikError.tsx
│     │  │  │     │  ├─ Input
│     │  │  │     │  │  ├─ Input.stories.tsx
│     │  │  │     │  │  └─ Input.tsx
│     │  │  │     │  └─ Text
│     │  │  │     │     ├─ Text.stories.tsx
│     │  │  │     │     └─ Text.tsx
│     │  │  │     ├─ molecules
│     │  │  │     │  ├─ ExpertiseInput
│     │  │  │     │  │  ├─ ExpertiseInput.stories.tsx
│     │  │  │     │  │  └─ ExpertiseInput.tsx
│     │  │  │     │  ├─ InputWithLabel
│     │  │  │     │  │  ├─ InputWithLabel.stories.tsx
│     │  │  │     │  │  └─ InputWithLabel.tsx
│     │  │  │     │  └─ SignUpCard
│     │  │  │     │     ├─ SignUpCard.stories.tsx
│     │  │  │     │     └─ SignUpCard.tsx
│     │  │  │     └─ organisms
│     │  │  │        ├─ AccountDetail
│     │  │  │        │  ├─ AccountDetail.stories.tsx
│     │  │  │        │  └─ AccountDetail.tsx
│     │  │  │        ├─ LearnerMentor
│     │  │  │        │  ├─ LearnerMentor.stories.tsx
│     │  │  │        │  └─ LearnerMentor.tsx
│     │  │  │        └─ ProfileInformation
│     │  │  │           ├─ ProfileInformation.stories.tsx
│     │  │  │           └─ ProfileInformation.tsx
│     │  │  ├─ config
│     │  │  ├─ constants
│     │  │  ├─ hooks
│     │  │  ├─ providers
│     │  │  │  └─ QueryProvider.tsx
│     │  │  ├─ types
│     │  │  └─ utils
│     │  │     ├─ Font.tsx
│     │  │     ├─ MuiTheme.ts
│     │  │     ├─ MuiThemeProvider.tsx
│     │  │     └─ PianataConfig.ts
│     │  ├─ store
│     │  ├─ styles
│     │  │  └─ globals.css
│     │  └─ types
│     ├─ tailwind.config.ts
│     └─ tsconfig.json
├─ commitlint-formatter.cjs
├─ commitlint.config.cjs
├─ eslint.config.mjs
├─ package.json
├─ packages
│  ├─ eslint-config
│  │  ├─ base.js
│  │  ├─ next.js
│  │  ├─ package.json
│  │  ├─ react-internal.js
│  │  └─ README.md
│  ├─ graphql
│  │  ├─ back-graphql
│  │  │  ├─ codegen.ts
│  │  │  └─ graphql
│  │  │     ├─ schema.ts
│  │  │     └─ types
│  │  │        └─ User.ts
│  │  ├─ client.ts
│  │  ├─ codegen.ts
│  │  ├─ gql
│  │  │  ├─ auth.graphql
│  │  │  └─ generated.ts
│  │  ├─ lib
│  │  │  └─ graphql-client.ts
│  │  ├─ package.json
│  │  ├─ scripts
│  │  │  └─ generate-schema.ts
│  │  ├─ server.ts
│  │  └─ tsconfig.json
│  ├─ prisma-config
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  ├─ prisma
│  │  │  ├─ migrations
│  │  │  │  ├─ 20251201051321_test
│  │  │  │  │  └─ migration.sql
│  │  │  │  └─ migration_lock.toml
│  │  │  ├─ prisma.config.ts
│  │  │  └─ schema.prisma
│  │  └─ prisma.ts
│  ├─ typescript-config
│  │  ├─ base.json
│  │  ├─ nextjs.json
│  │  ├─ package.json
│  │  └─ react-library.json
│  └─ ui
│     ├─ eslint.config.mjs
│     ├─ package.json
│     ├─ src
│     │  ├─ button.tsx
│     │  ├─ card.tsx
│     │  └─ code.tsx
│     └─ tsconfig.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ prettier.config.cjs
├─ tsconfig.json
└─ turbo.json

```
