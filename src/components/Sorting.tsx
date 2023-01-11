import { useState, ChangeEvent } from "react";
import { Order_By, Pokemon_V2_Pokemon_Order_By } from "../gql/graphql";

export function Sorting(props: {
  variables: { sorting: Array<Pokemon_V2_Pokemon_Order_By> };
  onSelect: (value: Array<Pokemon_V2_Pokemon_Order_By>) => void;
}) {
  const [selected, setSelected] = useState(() => {
    if (props.variables.sorting.length === 1) {
      const sorting = props.variables.sorting[0];
      if (sorting.name) {
        switch (sorting.name) {
          case Order_By.Asc: {
            return "1";
          }
          case Order_By.Desc: {
            return "2";
          }
          default:
            return "";
        }
      } else if (sorting.pokemon_v2_pokemontypes_aggregate) {
        const value = sorting.pokemon_v2_pokemontypes_aggregate.avg?.type_id;
        switch (value) {
          case Order_By.Asc: {
            return "3";
          }
          case Order_By.Desc: {
            return "4";
          }
          default:
            return "";
        }
      }
    }
    return "";
  });

  // pokemon_v2_pokemontypes_aggregate: {avg: {type_id: asc}}}

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    setSelected(selectedValue);

    const sorting: Pokemon_V2_Pokemon_Order_By[] = [];

    switch (selectedValue) {
      case "1": {
        sorting.push({ name: Order_By.Asc });
        break;
      }
      case "2": {
        sorting.push({ name: Order_By.Desc });
        break;
      }
      case "3": {
        sorting.push({
          pokemon_v2_pokemontypes_aggregate: { avg: { type_id: Order_By.Asc } },
        });
        break;
      }
      case "4": {
        sorting.push({
          pokemon_v2_pokemontypes_aggregate: {
            avg: { type_id: Order_By.Desc },
          },
        });
        break;
      }
    }
    props.onSelect(sorting);
  };

  return (
    <div className="container m-4 w-fit">
      <div className="form-control flex flex-row justify-center align-baseline">
        <label className="label pr-3">
          <span className="label-text text-gray-600">Sort by</span>
        </label>
        <select
          className="select select-bordered select-primary"
          onChange={onChange}
          value={selected}
        >
          <option disabled value="">
            -
          </option>
          <option value="1">Name asc</option>
          <option value="2">Name desc</option>
          <option value="3">Type asc</option>
          <option value="4">Type desc</option>
        </select>
      </div>
    </div>
  );
}
