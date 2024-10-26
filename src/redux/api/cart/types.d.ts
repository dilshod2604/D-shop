import { IAddCart, ICartItem } from "@/types/sheme";

namespace CART {
  type AddCartProductResponse = void;
  type AddCartProductRequest = IAddCart;
  type GetCartProductResponse = ICartItem[];
  type GetCartProductRequest = number;
}
