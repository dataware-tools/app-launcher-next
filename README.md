## First thing to do

The things you have to do after creating a repository based on this template are as follows:

- Change `name` in `package.json` to the name of your application
- Change `repository` in `package.json` to the newly created repository
  - This property is used for link in footer in default.
- Change `homepage` in `package.json` to your application name
  - This property is used for root path of application in default.
  - This should be the same as `urlPrefix` in
    [App Catalog](https://github.com/dataware-tools/protocols/blob/master/catalogs/app.json)
    if you want to register your application to dataware-tools

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

Open http://localhost:3000/{homepage} with your browser to see the result.

(If you configured `homepage` property of `package.json` to `app-template-nextjs` , you should open http://localhost:3000/app-template-nextjs)

You can start editing the page by modifying `pages/*.tsx`, `components/*.tsx`. The page auto-updates as you edit the file.

## Run in docker container

### How to build docker-image

```bash
$ export DOCKER_BUILDKIT=1
$ docker build -t app:latest --secret id=npmrc,src=${HOME}/.npmrc .
```

On MacOS or Linux, you may have to run the following commands before building the image.

```bash
$ ssh-add
```

### How to run docker-container

After success of building image

```bash
$ docker-compose up
```

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

## Note

- This template is intend to use for Single Page Application. So if you want create SSR, or SSG application, you should change some config of this template

## TODOs

- Add container for development
- Add .devcontainer.json example for supporting vscode remote container
