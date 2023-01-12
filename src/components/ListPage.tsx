import { TypedDocumentNode, useQuery } from "urql";
import {
  PokemonsApIqueryQueryVariables,
  PokemonsApIqueryQuery,
  Exact,
} from "../gql/graphql";
import { Card } from "./Card";
import { Loading } from "./Loading";

type ListPageType = {
  query: TypedDocumentNode<
    PokemonsApIqueryQuery,
    Exact<{
      offset: number;
    }>
  >;
  variables: PokemonsApIqueryQueryVariables;
  onLoadMore: (last: number) => void;
  isLastPage: boolean;
};

export function ListPage({
  query,
  variables,
  onLoadMore,
  isLastPage,
}: ListPageType) {
  const [result] = useQuery({ query, variables });

  const { data, fetching, error } = result;

  const pokemons = data?.pokemons;
  const leftItems = data?.nextPage?.aggregate?.count;

  if (error) return <p>Oh no... {error.message}</p>;

  if (fetching) {
    return <Loading />;
  }

  return (
    <>
      {pokemons && (
        <>
          {pokemons.map((poke, i) => (
            <Card poke={poke} key={`${variables.offset}_${i}`} />
          ))}

          {isLastPage && !!leftItems && (
            <div className="self-end my-8">
              <button
                className="btn btn-primary btn-wide"
                onClick={() => onLoadMore(variables.offset + 10)}
              >
                load more
              </button>
            </div>
          )}

          {isLastPage && !leftItems && (
            <div>
              <p>No items were found 🙃</p>
              <img
                src="https://media.giphy.com/media/3o6Ztnp2gdGHwsfrmU/giphy-downsized.gif"
                alt="gif with pikachu"
                className="w-40 mt-8"
              />
            </div>
          )}
        </>
      )}
    </>
  );
}
