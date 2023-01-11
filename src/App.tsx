import { useState } from "react";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sorting } from "./components/Sorting";
import {
  Pokemon_V2_Pokemon_Order_By,
  Pokemon_V2_Pokemon_Bool_Exp,
} from "./gql/graphql";
import { Search } from "./components/Search";
import { Filter } from "./components/Filter";

type State = {
  sorting: Array<Pokemon_V2_Pokemon_Order_By>;
  where: Pokemon_V2_Pokemon_Bool_Exp;
};

function App() {
  const [variables, setVariables] = useState({
    sorting: [],
    where: {},
  } as State);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex max-w-100 items-center flex-col flex-grow">
        <Search
          variables={variables}
          onChange={(value) => {
            setVariables({
              ...variables,
              where: { ...variables.where, ...value },
            });
          }}
        />
        <Filter
          variables={variables}
          onSelect={(value) => {
            setVariables({
              ...variables,
              where: { ...variables.where, ...value },
            });
          }}
        />
        <Sorting
          variables={variables}
          onSelect={(value) => {
            setVariables({ ...variables, sorting: value });
          }}
        />
        <List variables={variables} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
