export interface Product {
  name: string;
  amount: string;
}

export interface ProductId extends Product {
  id: number;
}
export interface NewProduct {
  item: Product;
}

export interface ProductList extends ProductId {
  orderId: number | null;
}
