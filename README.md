# Getting Started with Pokedex

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The deployed version is [here](https://sunny-banoffee-d571b0.netlify.app/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run codegen`

This project is using [`GraphQL Code Generator`](https://the-guild.dev/graphql/codegen). GraphQL Code Generator is a plugin-based tool that helps you get the best out of your GraphQL stack.

To start codegen in watch mode, please run `npm run codegen -- --watch`, this is useful while developing graphql queries.

## Project description

This project a simplified version of Pokedex. It consumes [Graphql Pokemon API](https://beta.pokeapi.co/graphql/console/) and the app bootstraped with [CRA](). Under the hood it uses Typescript, [Urql](https://formidable.com/open-source/urql/) as graphql client, [Daisyui](https://daisyui.com/) and [Tailwindcss](https://tailwindcss.com/). Also [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) to generate types for queries.

### User stories

- As a user, I should be able to see the Pokemon (image, name, type)
- As a user, I should be able to search for a Pokemon
- As a user, I should be able to filter by type
- As a user, I should be able to sort by name, type
- As a user, I would like to be able to favorite several Pokemons and I would like those Pokemons to persist in the browser (local is sufficient, no need for external APIs) (`My favorites` should be accessible on a different route)
