import { ProductQuantity } from './ProductQuantity';
//import { Offers } from './offers';

export class Cart{
    id: number;
    ProductQuantityList: ProductQuantity[];
    grandTotal: number;
}