import { IProduct } from "@/types/sheme";

namespace PRODUCT {
  type GetProductsResponse = IProduct[];
  type GetProductsRequest = void;

  type GetProductResponse = IProduct;
  type GetProductRequest = number;
}
