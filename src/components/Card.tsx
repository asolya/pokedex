import { FragmentType, useFragment } from "../gql/fragment-masking";
import { graphql } from "../gql";
import { TypeBadge } from "./TypeBadge";
import { Image } from "./Image";
import { Favourite } from "./Favourite";

export const PokeFragment = graphql(/* GraphQL */ `
  fragment PokeItem on pokemon_v2_pokemon {
    id
    name
    sprites: pokemon_v2_pokemonsprites(limit: 1) {
      ...PokeSprite
    }

    types: pokemon_v2_pokemontypes {
      ...PokeType
    }
  }
`);

export function Card(props: { poke: FragmentType<typeof PokeFragment> }) {
  const poke = useFragment(PokeFragment, props.poke);

  return (
    <div
      className="card w-64 bg-base-100 shadow-xl m-4"
      key={poke.id}
      data-testid="pokemon-card"
    >
      <div className="card-actions justify-end">
        <div className="badge badge-ghost align-itself-end mr-4 mt-4">
          #{poke.id}
        </div>
      </div>
      <Image sprite={poke.sprites[0]} name={poke.name} />

      <div className="card-body">
        <h2 className="card-title capitalize">
          {poke.name} <Favourite id={poke.id} />
        </h2>
        <div className="card-actions justify-start">
          {poke.types.map((type, i) => (
            <TypeBadge type={type} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
