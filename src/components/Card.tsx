import { FragmentType, useFragment } from "../gql/fragment-masking";
import { graphql } from "../gql";
import { capitalize } from "../utils";
import { TypeBadge } from "./TypeBadge";

export const PokeFragment = graphql(/* GraphQL */ `
  fragment PokeItem on pokemon_v2_pokemon {
    id
    name
    sprites: pokemon_v2_pokemonsprites(limit: 1) {
      sprites
    }

    types: pokemon_v2_pokemontypes {
      ...PokeType
    }
  }
`);

export function Card(props: { poke: FragmentType<typeof PokeFragment> }) {
  const poke = useFragment(PokeFragment, props.poke);

  // TODO: quite expensive
  const sprite: { front_shiny: string } = JSON.parse(poke.sprites[0].sprites);

  return (
    <div className="card w-64 bg-base-100 shadow-xl m-4" key={poke.id}>
      <figure>
        <img src={sprite.front_shiny} alt={poke.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{capitalize(poke.name)}</h2>
        <div className="badge badge-outline">#{poke.id}</div>
        {poke.types.map((type, i) => (
          <TypeBadge type={type} key={i} />
        ))}
      </div>
    </div>
  );
}
