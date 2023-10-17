interface SubNav {
  name: string;
  to: string;
}

export interface Navigation {
  name: string;
  to: string;
  sub?: SubNav[];
}

export type HandleAction = () => void;

export interface Product {
  name: string;
  price: string;
  imgOne: string;
  imgTwo?: string;
  to: string;
}
