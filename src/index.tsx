import React from "react";
import ReactDOM from "react-dom/client";
import {
  Provider,
  createClient,
  fetchExchange,
  dedupExchange,
  cacheExchange,
} from "urql";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = createClient({
  url: "https://beta.pokeapi.co/graphql/v1beta",
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
});

root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
