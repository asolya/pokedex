import { FragmentType, useFragment } from "../gql/fragment-masking";
import { graphql } from "../gql";

export const PokeSpriteFragment = graphql(/* GraphQL */ `
  fragment PokeSprite on pokemon_v2_pokemonsprites {
    sprites
  }
`);

export function Image(props: {
  sprite: FragmentType<typeof PokeSpriteFragment>;
  name: string;
}) {
  const sprite = useFragment(PokeSpriteFragment, props.sprite);

  // TODO: quite expensive
  const src = JSON.parse(sprite.sprites)?.front_shiny as string;

  return (
    <figure>
      <img src={src} alt={props.name} />
    </figure>
  );
}
