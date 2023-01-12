import { graphql } from "../gql";
import { FragmentType, useFragment } from "../gql/fragment-masking";

export const PokeTypeFragment = graphql(/* GraphQL */ `
  fragment PokeType on pokemon_v2_pokemontype {
    pokemon_v2_type {
      name
      id
    }
  }
`);

const styles: Map<string, string> = new Map([
  ["normal", "badge-secondary"],
  ["fighting", "badge-primary"],
  ["flying", "badge-primary"],
  ["poison", "badge-secondary"],
  ["ground", "badge-accent"],
  ["rock", "badge-accent"],
  ["bug", "badge-secondary"],
  ["ghost", "badge-accent"],
  ["steel", "badge-accent"],
  ["fire", "badge-secondary"],
  ["water", ""],
  ["grass", "badge-accent"],
  ["electric", "badge-secondary"],
  ["psychic", "badge-primary"],
  ["ice", "badge-accent"],
  ["dragon", ""],
  ["dark", "badge-secondary"],
  ["fairy", "badge-primary"],
  ["default", "badge-primary"],
]);

export function TypeBadge(props: {
  type: FragmentType<typeof PokeTypeFragment>;
}) {
  const type = useFragment(PokeTypeFragment, props.type).pokemon_v2_type;
  const badgeStyle: string = styles.get(type?.name || "default") || "";

  return (
    <div className={`badge ${badgeStyle} capitalize`} key={type?.id}>
      {type?.name}
    </div>
  );
}
