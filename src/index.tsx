import React from "react";
import ReactDOM from "react-dom/client";
import {
  Provider,
  createClient,
  fetchExchange,
  dedupExchange,
  cacheExchange,
} from "urql";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import { Main } from "./pages/Main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = createClient({
  url: "https://beta.pokeapi.co/graphql/v1beta",
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
});

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Main />}></Route>)
);

root.render(
  <React.StrictMode>
    <Provider value={client}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
