import { Injectable } from '@angular/core';
import { IProduct } from '../shared-classes-and-types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  getAllProducts(): IProduct[] {
    // Your logic to retrieve all products goes here
    // For this example, I'll just return an empty array
    return [];
  }
  // getProductById(prdId: number): IProduct {
  //   if (isNaN(prdId)) {
  //     return null;
  //   }
  //   const product = product.find(p => p.id === prdId);
  //   return product ? product : null;
  // }
}
// constructor() { }









