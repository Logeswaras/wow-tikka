export interface AddCardModel {
  id: number;
  image: string;
  title: string;
  price: number;
  calories: string;
  persons: string;
  description: string;
  quantity: number;
  ingredients: Array<string>;
}
export interface AddCustomised {
  image: string;
  price: number;
  name: string;
}
export class MenuDescriptionModel {
  id: number;
  image: string;
  title: string;
  price: number;
  calories: string;
  persons: string;
  description: string;
  quantity: number;
  ingredients: Array<string>;
}
