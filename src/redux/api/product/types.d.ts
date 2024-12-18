import { IProduct, IProducts } from "@/types/sheme";

namespace PRODUCT {
  type CreateProductResponse = void;
  type CreateProductRequest = IProduct;
  type GetProductResponse = IProducts[];
  type GetProductRequest = void;
  type GetProductByIdResponse = IProducts;
  type GetProductByIdRequest = string | string[];
  type DeleteProductByIdResponse = void;
  type DeleteProductByIdRequest = string | string[];

  type EditProductByIdResponse = void;
  type EditProductByIdRequest = IProducts;
}
