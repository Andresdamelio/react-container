# Microfrontend React TV

Project created to expose components as microfrontend using Webpack Module Federation.

## Author

- [twitter: @andres_damelio](https://twitter.com/andres_damelio)
- [webiste: andresdamelio.tech](https://www.andresdamelio.tech)

## Stack

- **Library:** [React](https://es.reactjs.org/)
- **Language:** [Typescript](https://www.typescriptlang.org/)
- **Styles:** [Styled components](https://styled-components.com/)
- **Testing:**
  - [Cypress](https://www.cypress.io/)
  - [Jest](https://jestjs.io/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- Develpment

  - **`REMOTE_DEV_APP_ONE:`** movies@http://localhost:3001/remoteEntry.js
  - **`REMOTE_DEV_APP_TWO:`** tv@http://localhost:3002/remoteEntry.js

- production
  - **`REMOTE_PRODUCTION_APP_ONE:`** First project link pointing to remote-entry.js file Example: movies@react-movies.com/remoteEntry.js
  - **`REMOTE_PRODUCTION_APP_TWO:`** Second project link pointing to remote-entry.js file Example: tv@react-tv.com/remoteEntry.js

## Run Locally

Clone the project

```bash
  git clone https://github.com/Andresdamelio/react-container
```

Go to the project directory

```bash
  cd react-container
```

Install dependencies

```bash
  npm install
```

Generate build

```bash
  npm run build
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

Run test components

```bash
  npm run cypress:component
```

Run test e2e

```bash
  npm run cypress:e2e
```

Run test jest

```bash
  npm run test
```
