import { ICategory } from "./category";

export interface IProduct {
    categoryId: number;
    category?: ICategory;
    id: number;
    name: string;
}
