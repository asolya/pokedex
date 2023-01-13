import { Provider } from "urql";
import { fromValue } from "wonka";
import { render, screen, within } from "@testing-library/react";
import { Main } from "./Main";
import {
  mockedPokemonsResponse,
  mockedTypesResponse,
} from "../mocked-data.json";
import {
  PokemonTypesApIqueryDocument,
  PokemonsApIqueryDocument,
} from "../gql/graphql";
import { Kind } from "graphql";

type Props = {
  query: typeof PokemonTypesApIqueryDocument | typeof PokemonsApIqueryDocument;
};

const executeQueryImplementation = (props: Props) => {
  const query = props.query;

  if (query.definitions.length > 0) {
    const definition = props.query.definitions[0];

    if (definition.kind === Kind.OPERATION_DEFINITION) {
      switch (definition.name?.value) {
        case "pokemonTypesAPIquery":
          return fromValue(mockedTypesResponse);
        case "pokemonsAPIquery":
          return fromValue(mockedPokemonsResponse);
        default:
          return fromValue({});
      }
    }
  }

  return fromValue({});
};

const urqlMock: unknown = {
  executeQuery: executeQueryImplementation,
};

test("renders page correctly with given responses", () => {
  render(
    <Provider value={urqlMock as any}>
      <Main />
    </Provider>
  );
  const filterNode = screen.getByLabelText("Type", { selector: "select" });
  expect(filterNode).toBeInTheDocument();

  // Filter with 18 types is rendered, 19th is '-' option
  const filterOptionNodes = within(filterNode).getAllByTestId(
    "pokemon-type-option"
  );
  expect(filterOptionNodes.length).toEqual(18);

  const listNode = screen.getByTestId("list");
  expect(listNode).toBeInTheDocument();

  const cardNodes = within(listNode).getAllByTestId("pokemon-card");
  expect(cardNodes.length).toEqual(4);
});
