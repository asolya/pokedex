/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  fragment PokeItem on pokemon_v2_pokemon {\n    id\n    name\n    sprites: pokemon_v2_pokemonsprites(limit: 1) {\n      ...PokeSprite\n    }\n\n    types: pokemon_v2_pokemontypes {\n      ...PokeType\n    }\n  }\n": types.PokeItemFragmentDoc,
    "\n  query pokemonTypesAPIquery {\n    pokemon_v2_pokemontype(distinct_on: type_id) {\n      type: pokemon_v2_type {\n        name\n        id\n      }\n    }\n  }\n": types.PokemonTypesApIqueryDocument,
    "\n  fragment PokeSprite on pokemon_v2_pokemonsprites {\n    sprites\n  }\n": types.PokeSpriteFragmentDoc,
    "\n  query pokemonsAPIquery(\n    $offset: Int!\n    $sorting: [pokemon_v2_pokemon_order_by!]\n    $where: pokemon_v2_pokemon_bool_exp\n    $limit: Int\n  ) {\n    pokemons: pokemon_v2_pokemon(\n      limit: $limit\n      offset: $offset\n      order_by: $sorting\n      where: $where\n    ) {\n      ...PokeItem\n    }\n\n    nextPage: pokemon_v2_pokemon_aggregate(offset: $offset, where: $where) {\n      aggregate {\n        count(columns: id)\n      }\n    }\n  }\n": types.PokemonsApIqueryDocument,
    "\n  fragment PokeType on pokemon_v2_pokemontype {\n    pokemon_v2_type {\n      name\n      id\n    }\n  }\n": types.PokeTypeFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PokeItem on pokemon_v2_pokemon {\n    id\n    name\n    sprites: pokemon_v2_pokemonsprites(limit: 1) {\n      ...PokeSprite\n    }\n\n    types: pokemon_v2_pokemontypes {\n      ...PokeType\n    }\n  }\n"): (typeof documents)["\n  fragment PokeItem on pokemon_v2_pokemon {\n    id\n    name\n    sprites: pokemon_v2_pokemonsprites(limit: 1) {\n      ...PokeSprite\n    }\n\n    types: pokemon_v2_pokemontypes {\n      ...PokeType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query pokemonTypesAPIquery {\n    pokemon_v2_pokemontype(distinct_on: type_id) {\n      type: pokemon_v2_type {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query pokemonTypesAPIquery {\n    pokemon_v2_pokemontype(distinct_on: type_id) {\n      type: pokemon_v2_type {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PokeSprite on pokemon_v2_pokemonsprites {\n    sprites\n  }\n"): (typeof documents)["\n  fragment PokeSprite on pokemon_v2_pokemonsprites {\n    sprites\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query pokemonsAPIquery(\n    $offset: Int!\n    $sorting: [pokemon_v2_pokemon_order_by!]\n    $where: pokemon_v2_pokemon_bool_exp\n    $limit: Int\n  ) {\n    pokemons: pokemon_v2_pokemon(\n      limit: $limit\n      offset: $offset\n      order_by: $sorting\n      where: $where\n    ) {\n      ...PokeItem\n    }\n\n    nextPage: pokemon_v2_pokemon_aggregate(offset: $offset, where: $where) {\n      aggregate {\n        count(columns: id)\n      }\n    }\n  }\n"): (typeof documents)["\n  query pokemonsAPIquery(\n    $offset: Int!\n    $sorting: [pokemon_v2_pokemon_order_by!]\n    $where: pokemon_v2_pokemon_bool_exp\n    $limit: Int\n  ) {\n    pokemons: pokemon_v2_pokemon(\n      limit: $limit\n      offset: $offset\n      order_by: $sorting\n      where: $where\n    ) {\n      ...PokeItem\n    }\n\n    nextPage: pokemon_v2_pokemon_aggregate(offset: $offset, where: $where) {\n      aggregate {\n        count(columns: id)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PokeType on pokemon_v2_pokemontype {\n    pokemon_v2_type {\n      name\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment PokeType on pokemon_v2_pokemontype {\n    pokemon_v2_type {\n      name\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;