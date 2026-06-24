# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Install npx


npx comes bundled with npm, so just install Node.js via Chocolatey:
```bash
choco install nodejs
```
Then verify:

```bash
node -v
npm -v
npx -v
```

## Install a docosaurus site

To scaffold a new Docusaurus site, run:
```bash
npx create-docusaurus@latest my-website classic
```
Then start the dev server:
```bash
cd my-website
npm start
```


## Install docusaurus dependencies

```bash
corepack yarn install
```

## Local Development

```bash
corepack yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
corepack yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

command to test your build locally.
```
npm run serve
```

## Deployment

Using HTTPS (PAT):

```powershell
$env:USE_SSH="false"; $env:GIT_USER="bblackie"; corepack yarn deploy
```

```bash
USE_SSH=false GIT_USER=<Your GitHub username> corepack yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
