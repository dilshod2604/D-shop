import { IFavoriteMovie, IFavorites } from "@/types/sheme";

namespace ADDFAVORITE {
  type AddFavoritesResponse = void;
  type AddFavoritesRequest = IFavorites;
  type GetFavoritesByIdResponse = IFavoriteMovie;
  type GetFavoritesByIdRequest = string;
}
