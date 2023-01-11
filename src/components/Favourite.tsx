import { useFavourite } from "../hooks";

export function Favourite(props: { id: number }) {
  const [isFavourite, handleToggleFavourite] = useFavourite(props.id);

  return (
    <div className="rating">
      <div
        onClick={handleToggleFavourite}
        className={`mask mask-star w-4 h-4 ${
          isFavourite ? "bg-accent" : "bg-primary"
        }`}
      />
    </div>
  );
}
