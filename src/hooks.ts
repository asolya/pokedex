import { useState, useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

export function useFavourite(
  id: number
): [isFavourite: boolean, toggleFavourites: () => void] {
  const [favourites, updateFavourites] = useLocalStorage<number[]>(
    "favourites",
    []
  );

  const [isFavourite, setFavourite] = useState<boolean>(() => {
    return favourites.includes(id);
  });

  const toggleFavourites = useCallback(() => {
    let updatedFavourites: number[] = [];
    if (!isFavourite) {
      updatedFavourites = [...favourites, id];
    } else {
      updatedFavourites = favourites.filter((savedId) => savedId !== id);
    }
    setFavourite(!isFavourite);

    updateFavourites(updatedFavourites);
  }, [setFavourite, isFavourite, updateFavourites, favourites, id]);

  return [isFavourite, toggleFavourites];
}
