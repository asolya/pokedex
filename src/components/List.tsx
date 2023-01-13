import { useState, useEffect } from "react";
import { graphql } from "../gql";
import { PokemonsApIqueryQueryVariables } from "../gql/graphql";
import { ListPage } from "./ListPage";

const pokemonsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query pokemonsAPIquery(
    $offset: Int!
    $sorting: [pokemon_v2_pokemon_order_by!]
    $where: pokemon_v2_pokemon_bool_exp
  ) {
    pokemons: pokemon_v2_pokemon(
      limit: 12
      offset: $offset
      order_by: $sorting
      where: $where
    ) {
      ...PokeItem
    }

    nextPage: pokemon_v2_pokemon_aggregate(offset: $offset, where: $where) {
      aggregate {
        count(columns: id)
      }
    }
  }
`);

const defaultState = [
  {
    offset: 0,
  },
];

export function List(props: {
  variables: Partial<PokemonsApIqueryQueryVariables>;
}) {
  const [pageVariables, setPageVariables] = useState(defaultState);

  useEffect(() => {
    setPageVariables(defaultState);
  }, [props.variables]);

  return (
    <div
      className="container flex flex-row flex-wrap max-w-7xl justify-center"
      data-testid="list"
    >
      {pageVariables.map((variables, i) => (
        <ListPage
          key={i}
          variables={{ ...variables, ...props.variables }}
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
