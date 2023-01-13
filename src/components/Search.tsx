import { useState, ChangeEvent, useEffect, useRef } from "react";
import { Pokemon_V2_Pokemon_Bool_Exp } from "../gql/graphql";
import debounce from "lodash.debounce";
import escape from "lodash.escape";

export function Search(props: {
  variables: { where?: Pokemon_V2_Pokemon_Bool_Exp };
  onChange: (value: Pokemon_V2_Pokemon_Bool_Exp) => void;
}) {
  const [value, setValue] = useState(() => {
    if (props.variables?.where?.name?._similar) {
      return props.variables?.where?.name?._similar.replaceAll("%", "");
    }
    return "";
  });

  const debouncedSearch = useRef(
    debounce((value: string) => {
      if (!value) {
        props.onChange({ name: {} });
        return;
      }

      props.onChange({ name: { _similar: escape(value).toLowerCase() + "%" } });
    }, 1000)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="container m-4 w-fit">
      <div className="form-control flex flex-row justify-center align-baseline">
        <label className="label pr-3">
          <span className="label-text text-gray-600">Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered input-primary w-full max-w-xs"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
