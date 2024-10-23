export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
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
