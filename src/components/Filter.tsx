import { useState, ChangeEvent } from "react";
import { Pokemon_V2_Pokemon_Bool_Exp } from "../gql/graphql";
import { graphql } from "../gql";
import { useQuery } from "urql";

const pokemonTypesQueryDocument = graphql(/* GraphQL */ `
  query pokemonTypesAPIquery {
    pokemon_v2_pokemontype(distinct_on: type_id) {
      type: pokemon_v2_type {
        name
        id
      }
    }
  }
`);

export function Filter(props: {
  variables: { where?: Pokemon_V2_Pokemon_Bool_Exp };
  onSelect: (value: Pokemon_V2_Pokemon_Bool_Exp) => void;
}) {
  const [result] = useQuery({ query: pokemonTypesQueryDocument });

  const { data, fetching, error } = result;

  const types =
    data?.pokemon_v2_pokemontype?.map(({ type }) => ({
      name: type?.name,
      id: type?.id,
    })) || [];

  const [value, setValue] = useState(() => {
    if (props.variables?.where?.pokemon_v2_pokemontypes?.type_id) {
      return props.variables?.where?.pokemon_v2_pokemontypes?.type_id
        ?._eq as number;
    }
    return null;
  });

  // {pokemon_v2_pokemontypes: {type_id: {_eq: value.toLowerCase()}}

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(parseInt(e.target.value));
    let where = { pokemon_v2_pokemontypes: {} };
    if (!e.target.value) {
      props.onSelect(where);
      return;
    }

    props.onSelect({
      pokemon_v2_pokemontypes: { type_id: { _eq: parseInt(e.target.value) } },
    });
  };

  return (
    <div className="container m-4 w-fit">
      <div className="form-control flex flex-row justify-center align-baseline">
        <label className="label pr-3" htmlFor="filter">
          <span className="label-text text-gray-600">Type</span>
        </label>
        {error && <p>Oh no... {error.message}</p>}
        <select
          className="select select-bordered select-primary"
          onChange={onChange}
          value={value || ""}
          id="filter"
        >
          {fetching && <option>Loading...</option>}
          <option value="" key="filter-0">
            -
          </option>
          {types.length &&
            types.map(({ name, id }) => (
              <option
                value={id}
                key={`filter-${id}`}
                data-testid="pokemon-type-option"
              >
                {name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
