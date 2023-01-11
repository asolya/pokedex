import { useState, useEffect, useCallback } from "react";

export function useFavourite(
  id: number
): [isFavourite: boolean, toggleFavourites: () => void] {
  const [isFavourite, setFavourite] = useState<boolean>(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    return favourites.includes(id);
  });

  useEffect(() => {
    const favourites: number[] = JSON.parse(
      localStorage.getItem("favourites") || "[]"
    );
    let updatedFavourites: number[] = [];
    if (isFavourite) {
      updatedFavourites = [...favourites, id];
    } else {
      updatedFavourites = favourites.filter((savedId) => savedId !== id);
    }

    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  }, [isFavourite, id]);

  const toggleFavourites = useCallback(() => {
    setFavourite(!isFavourite);
  }, [setFavourite, isFavourite]);

  return [isFavourite, toggleFavourites];
}
