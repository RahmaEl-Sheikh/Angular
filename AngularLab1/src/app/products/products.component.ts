// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.scss']
// })
// export class ProductsComponent {

// }

import { Component } from '@angular/core';
import { IProduct, ICategory, DiscountOffers } from '../shared-classes-and-types/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurchased: boolean;

  constructor() {
    // Initialize properties as needed
    this.Discount = DiscountOffers.NoDiscount;
    this.StoreName = '';
    this.StoreLogo = '';
    this.ProductList = [];
    this.CategoryList = [];
    this.ClientName = '';
    this.IsPurchased = false;
  }
}