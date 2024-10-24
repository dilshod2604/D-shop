import { IProduct, IProducts } from "@/types/sheme";

namespace PRODUCT {
  type CreateProductResponse = void;
  type CreateProductRequest = IProduct;
  type GetProductResponse = IProducts[];
  type GetProductRequest = void;
  type GetProductByIdResponse = IProducts;
  type GetProductByIdRequest = string | string[];
}
