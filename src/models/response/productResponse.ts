import { CategoryResponse } from './categoryResponse';

export type ProductResponse = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryResponse;
  images: string[];
};
