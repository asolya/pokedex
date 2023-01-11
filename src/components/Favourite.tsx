import { useState } from "react";

// TODO: improve performance
export function Favourite(props: { id: number }) {
  const { id } = props;
  const [favourites, setStorageItem] = useState<number[]>(() =>
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );

  const isFavourite = favourites.includes(id);

  const handleToggleFavourite = () => {
    if (!isFavourite) {
      const updatedFavourites = [...favourites, id];
      setStorageItem(updatedFavourites);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    } else {
      const updatedFavourites = favourites.filter((savedId) => savedId !== id);
      setStorageItem(updatedFavourites);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    }
  };

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
