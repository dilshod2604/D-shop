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
  password: string;
  photo: string;
}
export interface IAddCart {
  user_id: number;
  product_id: string;
  quantity: number;
}
