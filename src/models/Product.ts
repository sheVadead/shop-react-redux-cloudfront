import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  price: number,
  photo_id: string,
};
export type Stock = {
  count: number;
  product_id: string;
}

export type FullProduct = Product & Stock;

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
