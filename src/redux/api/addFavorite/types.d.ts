import { IFavoriteProduct, IFavoritesItems } from "@/types/sheme";

namespace ADDFAVORITE {
  type AddFavoritesResponse = void;
  type AddFavoritesRequest = IFavorites;
  type GetFavoritesByIdResponse = IFavoriteProduct;
  type GetFavoritesByIdRequest = string;
  type GetFavoriteProductResponse = IFavoritesItems[];
  type GetFavoriteProductRequest = number;
  type DeleteFavoriteResponse = void;
  type DeleteFavoriteRequest = string;
}
