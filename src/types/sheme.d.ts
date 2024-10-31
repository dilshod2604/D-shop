export interface IProduct {
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  category: string;
  views: number;
}

export interface IProducts {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  category: string;
  views: number;
}
export interface IUser {
  name: string;
  email: string;
  password: string;
  photo: string;
}

export interface IMe {
  id: number;
  name: string;
  email: string;
  role: string;
  password: string;
  photo: string;
}
export interface IAddCart {
  userId: number | undefined;
  productId: string | string[];
  quantity: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface ICartItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  productId: string;
  product: Product;
  quantity: number;
}

interface IFavorites {
  userId: number;
  productId: string;
}
interface IFavoriteMovie {
  id: number;
  isFavorite: boolean;
  productId: string;
  userId: number;
}
