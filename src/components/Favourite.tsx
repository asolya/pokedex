import { useFavourite } from "../hooks";

export function Favourite(props: { id: number }) {
  const [isFavourite, handleToggleFavourite] = useFavourite(props.id);

  return (
    <button
      onClick={handleToggleFavourite}
      className={`mask mask-star-2 w-6 h-6 ${
        isFavourite ? "bg-primary-focus" : "bg-primary"
      }`}
    />
  );
}
