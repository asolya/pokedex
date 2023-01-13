import { useReadLocalStorage } from "usehooks-ts";
import { Container } from "../components/Container";
import { List } from "../components/List";
import { Pokemon_V2_Pokemon_Bool_Exp } from "../gql/graphql";

type Variables = {
  where: Pokemon_V2_Pokemon_Bool_Exp;
};

export function Favourites() {
  const favourites = useReadLocalStorage<number[]>("favourites");

  const variables: Variables = {
    where: {
      id: { _in: favourites },
    },
  };

  return (
    <Container>
      <div className="mt-8 mb-4 p-4 text-2xl bold ">
        <h1>
          Your{" "}
          <span className="highlight-container">
            <span className="highlight">favourite</span>
          </span>{" "}
          pokemons:
        </h1>
      </div>
      <List variables={variables} />
    </Container>
  );
}
