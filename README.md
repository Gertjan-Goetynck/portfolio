# Gertjan Goetynck portfolio website V1

## Running this site locally

1. **Install the Gatsby CLI**
   Open the CLI of your choice and install the Gatsby CLI globally with either yarn or npm. This isn't required if you already have the Gatsby CLI installed.

```sh
#Installation using yarn
yarn global add gatsby-cli
```

```sh
#Installation using npm
npm install -g gatsby-cli
```

2. **Clone repository**
   Enter the following command in your CLI to clone the repository.

```sh
git clone https://github.com/Gertjan-Goetynck/portfolio.git
```

3. **Install local dependencies**
   Use the command below to install all the local dependencies required to run this project

```sh
#Using yarn
yarn install
```

```sh
#Using npm
npm install
```

4. **Run locally**
   In order to run the site in development mode, use the following command in your CLI.

```sh
gatsby develop
```

If you rather run a live build, use:

```sh
#Builds the site
gatsby build
#Runs the built site in localhost
gatsby serve
```

## Stack used

### Gatsby

Gatsby is a Static Page Generator built on the ReactJS framework.

I have chosen to use Gatsby because of the many speed and size benefits it offers when building a React site that does not have a lot of dynamic content.

### Netlify

Netlify allows developers to host both static sites and sites using Static Site Generators for free.

Some of the features it offers include form handling, continuous deployment through git, DNS management, and many more.
