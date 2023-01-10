import { useState } from "react";
import { graphql } from "../gql";
import { ListPage } from "./ListPage";

const pokemonsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query pokemonsAPIquery($offset: Int!) {
    pokemons: pokemon_v2_pokemon(limit: 10, offset: $offset) {
      ...PokeItem
    }

    nextPage: pokemon_v2_pokemon_aggregate(offset: $offset) {
      aggregate {
        count(columns: id)
      }
    }
  }
`);

export function List() {
  const [pageVariables, setPageVariables] = useState([
    {
      offset: 0,
    },
  ]);

  return (
    <div className="container flex flex-row flex-wrap max-w-100 justify-center">
      {pageVariables.map((variables, i) => (
        <ListPage
          key={i}
          variables={variables}
          query={pokemonsWithVariablesQueryDocument}
          isLastPage={i === pageVariables.length - 1}
          onLoadMore={(newOffset) =>
            setPageVariables([...pageVariables, { offset: newOffset }])
          }
        />
      ))}
    </div>
  );
}
