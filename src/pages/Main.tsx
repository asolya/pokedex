import { useState } from "react";
import { Container } from "../components/Container";
import { List } from "../components/List";
import { Sorting } from "../components/Sorting";
import { Search } from "../components/Search";
import { Filter } from "../components/Filter";
import {
  Pokemon_V2_Pokemon_Order_By,
  Pokemon_V2_Pokemon_Bool_Exp,
} from "../gql/graphql";

type State = {
  sorting: Array<Pokemon_V2_Pokemon_Order_By>;
  where: Pokemon_V2_Pokemon_Bool_Exp;
  limit: number;
};

export function Main() {
  const [variables, setVariables] = useState<State>({
    sorting: [],
    where: {},
    limit: 12
  });

  return (
    <Container>
      <div className="container flex flex-col md:flex-row justify-center mt-8 mb-4">
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
      </div>
      <List variables={variables} />
    </Container>
  );
}
