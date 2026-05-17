// types.mts

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;

  cart?: {
    productId: string;
    quantity: number;
  }[];

  createdAt: Date;
}


export interface Product {
  _id: string;
  name: string;
  category: string;
  description?: string;

  price: number;

  images?: string[];

  averageRating?: number;

  reviewCount?: number;
}


export interface Order {
  _id: string;

  userId: string;

  items: {
    productId: string;
    productName: string;
    quantity: number;
    priceAtPurchase: number;
  }[];

  total: number;

  createdAt: Date;
}


export interface Review {
  _id: string;

  productId: string;

  userId: string;

  rating: number;

  comment?: string;

  createdAt: Date;
}


export interface Alert {
  _id: string;

  title: string;

  type:
    | "warning"
    | "info"
    | "promotion";

  status:
    | "active"
    | "inactive";
}