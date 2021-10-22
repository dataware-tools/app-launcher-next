# Launcher for dataware-tools web app

## Getting started

First, install all dependencies.

```bash
npm install
# or
yarn install
```

If you want to change Auth0's configurations (i.e., client-id, domain, etc.),
you need to set the following environment variables:

- `NEXT_PUBLIC_DATAWARE_TOOLS_AUTH_CONFIG_DOMAIN`: Domain (default: `dataware-tools.us.auth0.com`)
- `NEXT_PUBLIC_DATAWARE_TOOLS_AUTH_CONFIG_CLIENT_ID`: Client ID (default: the one for the demo page)
- `NEXT_PUBLIC_DATAWARE_TOOLS_AUTH_CONFIG_API_URL`: API URL (default: `https://demo.dataware-tools.com/`)

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000/launcher with your browser to see the result.

You can start editing the page by modifying `pages/*.tsx`, `components/*.tsx`. The page is updated automatically as you edit the file.

## Run in docker container

### How to build docker-image

```bash
$ export DOCKER_BUILDKIT=1
$ docker build -t app:latest --secret id=npmrc,src=${HOME}/.npmrc .
```

### How to run docker-container

After success of building image

```bash
$ docker-compose up
```

## Change listed apps

If you want to change listed apps, fix `public/apps.yaml`.

Bellow attribution should be contained each apps.

- id: This should be unique value in the file.
- icon: Image URL or name of [Material icons](https://fonts.google.com/icons)
- name: This is shown as title of card ui.
- description: This is shown as body of card ui.
- url: Link for app.
- visibility: "public", or "private". If visibility is "public", the app is shown when use is not authenticated.
- location: "internal", or "external".

## Npm scripts

- `dev`: Start development server.

- `test`: Run all test process, including linting source code.

- `lint`: Lint all source code.

- `format`: Format all source code.

## Major library introduction

### Production

- [Next.js](https://nextjs.org/learn/basics/create-nextjs-app)

  React Framework. No complex config needed, but extendable.

- [Material-UI](https://next.material-ui.com/getting-started/usage/)

  React components library. Simple and customizable, and make site accessible.

- [SWR](https://swr.vercel.app/getting-started#quick-start)

  React data fetching library. Easy to caching data.

- [React Router](https://reactrouter.com/web/guides/quick-start)

  Navigation components library for React.

- [Recoil](https://recoiljs.org/docs/introduction/getting-started)

  State management library for React.

- [immer](https://immerjs.github.io/immer/)

  Library for working with immutable state in a more convenient way.

- [auth0-react](https://auth0.com/docs/libraries/auth0-react#getting-started)

  Auth0 React SDK.

### Development

- [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)

  Dev tool for documenting, visual testing UI.

  (\* [japanese introduction available](https://storybook.js.org/tutorials/intro-to-storybook/react/ja/get-started/))

- [Loki](https://loki.js.org/getting-started.html)

  Visual regression test tool for Storybook

- [Jest](https://jestjs.io/ja/docs/getting-started)

  JavaScript Testing Framework with a focus on simplicity.

- [Testing Library](https://testing-library.com/docs/react-testing-library/example-intro)

  Library for testing UI components in a user-centric way.

- [MSW](https://mswjs.io/docs/getting-started/mocks)

  API mocking library intercepting actual requests, by using Service Worker.

- [prettier](https://prettier.io/docs/en/install.html#summary)

  Opinionated code formatter for JS, JSX, TS, JSON, etc.

- [eslint](https://eslint.org/docs/user-guide/getting-started#configuration)

  High customizable linter for JS/altJS.

- [stylelint](https://stylelint.io/user-guide/get-started#customize)

  High customizable linter for CSS/Sass/CSSinJS.

### Recommended CLI tools

- [volta](https://volta.sh/)

  JavaScript tool manager like nvm, n
