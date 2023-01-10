import { graphql } from "../gql";
import { FragmentType, useFragment } from "../gql/fragment-masking";
import { capitalize } from "../utils";

export const PokeTypeFragment = graphql(/* GraphQL */ `
  fragment PokeType on pokemon_v2_pokemontype {
    pokemon_v2_type {
      name
      id
    }
  }
`);

export function TypeBadge(props: {
  type: FragmentType<typeof PokeTypeFragment>;
}) {
  const type = useFragment(PokeTypeFragment, props.type).pokemon_v2_type;

  return (
    <div className="badge badge-danger" key={type?.id}>
      {capitalize(type?.name)}
    </div>
  );
}
