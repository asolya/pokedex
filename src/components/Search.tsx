import { useState, ChangeEvent } from "react";
import { Pokemon_V2_Pokemon_Bool_Exp } from "../gql/graphql";

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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onButtonClick = () => {
    if (!value) {
      props.onChange({ name: {} });
      return;
    }

    props.onChange({ name: { _similar: value + "%" } });
  };

  return (
    <div className="container m-4 w-fit">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            value={value}
            onChange={onChange}
          />
          <button className="btn btn-square" onClick={onButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
