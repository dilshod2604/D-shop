import { IProducts } from "@/types/sheme";

namespace SEARCH {
  type SearchProdctsResponse = IProducts[];
  type SearchProdctsRequest = string;
  type SearchProdctsByCategoryResponse = IProducts[];
  type SearchProdctByCategorysRequest = string;
}
